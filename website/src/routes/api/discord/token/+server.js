import { adminApp } from '$lib/server/fireadmin';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { json } from '@sveltejs/kit'
import { setDoc } from 'firebase/firestore';
import { env } from '$env/dynamic/private';

const DISCORD_CLIENT_ID = env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = env.DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = env.DISCORD_REDIRECT_URI;
const DISCORD_API_URL = env.DISCORD_API_URL;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET(event) {

    const query = event.url.searchParams

    // fetch returnCode set in the URL parameters.
    const returnCode = query.get('code');
    console.log('returnCode =>', returnCode);

    // initializing data object to be pushed to Discord's token endpoint.
    // the endpoint returns access & refresh tokens for the user.
    const dataObject = {
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: DISCORD_REDIRECT_URI,
        code: returnCode || '',
        scope: 'identify email guilds'
    };

    // performing a Fetch request to Discord's token endpoint
    const request = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams(dataObject),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    const response = await request.json();

    // redirect to front page in case of error
    if (response.error) {
        console.log(response.error)
        console.log('redirect to / due error');
        return new Response(null, {
            status: 302
        })
    }

    // redirect user to front page with cookies set
    //const access_token_expires_in = new Date(Date.now() + response.expires_in); // 10 minutes
    //const refresh_token_expires_in = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    //console.log('redirect to / with cookies');

    const requestUserInfo = await fetch(`${DISCORD_API_URL}/users/@me`, {
        headers: { 'Authorization': `Bearer ${response.access_token}` }
    });

    // returns a discord user if JWT was valid
    const responseUserInfo = await requestUserInfo.json();
    //console.log(responseUserInfo)

    /** @type {any} */
    let userInfo = {};

    if (responseUserInfo.id && responseUserInfo.verified) {
        userInfo = responseUserInfo

        //console.log(userInfo);

        let userId = userInfo.id;

        const additionalClaims = {
            email: userInfo.email,
            displayName: userInfo.username,
            photoURL: `https://cdn.discordapp.com/avatars/${userId}/${userInfo.avatar}.png`,
        };

        let existingUser = undefined
        try {
            existingUser = await adminApp.auth().getUserByEmail(additionalClaims.email);
        } catch (e) { }

        //console.log(existingUser)
        if (!existingUser) {
            //console.log('dont exist')
            await adminApp.auth().createUser({
                uid: userId,
                ...additionalClaims,
                providerToLink: {
                    uid: userId,
                    providerId: 'discord.com',
                    ...additionalClaims
                }
            })

            const userRef = getFirestore(adminApp).collection('users').doc(userId);

            await userRef.set({
                'discord': userInfo.id
            });
        } else {
            //console.log('exist')

            userId = existingUser.uid;


            const userRef = getFirestore(adminApp).collection('users').doc(userId);

            try {
                await userRef.update({
                    'discord': userInfo.id
                });
            } catch (e) {
                await userRef.set({
                    'discord': userInfo.id
                });
            }


            // await adminApp.auth().updateUser(userId, {
            //     providerToLink : {
            //         uid: userId,
            //         providerId: 'discord.com',
            //         ...additionalClaims
            //     }
            // })
        }


        // await adminApp.auth().createProviderConfig({
        //     providerId: 'discord.com',
        //     enabled: true,
        //     displayName: 'discord',
        // })


        const customToken = await getAuth(adminApp)
            .createCustomToken(userId);

        //await adminApp.auth().updateUser(userId, additionalClaims)


        //console.log(customToken);
        return json(customToken);

    } else {
        return new Response(null);
    }
}