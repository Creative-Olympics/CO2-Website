import { signInWithPopup, fetchSignInMethodsForEmail, OAuthProvider, onAuthStateChanged, signOut as authSignOut } from 'firebase/auth';
import { writable } from 'svelte/store';
import { doc, getDoc } from "firebase/firestore"

import { modal } from '$lib/modals';
import { logs } from '$lib/logs';
import { toasts } from '$lib/toasts';
import { auth, db } from '$lib/firebase';

/** @type {import("svelte/store").Writable<import("@firebase/auth").User | null>} */
export let userData = writable(null)
/** @type {import("svelte/store").Writable<any | null>} */
export let privateData = writable(null)
/** @type {import("svelte/store").Writable<any | null>} */
export let publicData = writable(null)
/** @type {import("svelte/store").Writable<boolean>} */
export let isAdmin = writable(false)

onAuthStateChanged(auth, (u) => {
    userData.set(u)
    if (u) {
        getDoc(doc(db, "users", u.uid, "private", "general")).then((ud) => {
            privateData.set(ud.data())
        })
        getDoc(doc(db, "users", u.uid, "public", "general")).then((ud) => {
            publicData.set(ud.data())
        })

        u.getIdTokenResult().then((idTokenResult) => {
            isAdmin.set(idTokenResult.claims.role === "admin")
        })
    }else{
        privateData.set(null)
        publicData.set(null)
        isAdmin.set(false)
    }
})

export let signOut = () => {
    authSignOut(auth).then(() => {
        toasts.success("You've been successfully logged out!")
    })
}

export let login = (/** @type {import("@firebase/auth").AuthProvider} */ provider, /** @type {any} */ loginAndLinkModal) => {
    logs.add({ msg: "Opening sign in popup" }, "info")
    signInWithPopup(auth, provider)
        .then((result) => {
            toasts.success('Welcome back ' + result.user.displayName);
            modal.close();
            logs.add({ msg: "Signed in" }, "info")
        })
        .catch((error) => {
            if (error.code === 'auth/account-exists-with-different-credential') {
                logs.add({ msg: "Account already exists with different credentials" }, "info")
                var pendingCred = OAuthProvider.credentialFromError(error);
                var email = error.customData.email;
                fetchSignInMethodsForEmail(auth, email).then(function (methods) {
                    if (methods[0] === 'password') {
                        /*
                        var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                        auth
                            .signInWithEmailAndPassword(email, password)
                            .then(function (result) {
                                // Step 4a.
                                return result.user.linkWithCredential(pendingCred);
                            })
                            .then(function () {
                                // Microsoft account successfully linked to the existing Firebase user.
                                goToApp();
                            });
                        return;
                        */
                        console.log(error.code)
                        console.log(error.message)
                        logs.add(error, "error")
                        toasts.feedbackError("QursEsQa2C@RahNeil_N3:firebase:login:signInWithPopup:fetchSignInMethodsForEmail:methodPassword");
                        modal.close();
                    } else if (methods[0] === 'google.com') {
                        modal.open(modal, loginAndLinkModal, { providerID: "RahNeil_N3:ProviderID:Xr1pTDZIE4", userCred: pendingCred })
                    } else if (methods[0] === 'microsoft.com') {
                        modal.open(modal, loginAndLinkModal, { providerID: "RahNeil_N3:ProviderID:ZB8aogoHvU", userCred: pendingCred })
                    } else if (methods[0] === 'apple.com') {
                        modal.open(modal, loginAndLinkModal, { providerID: "RahNeil_N3:ProviderID:QBK4b9Vv2y", userCred: pendingCred })
                    } else {
                        console.log(error.code)
                        console.log(error.message)
                        console.log(methods)
                        logs.add({ error: error, methods: methods }, "error")
                        toasts.feedbackError("5da8CAQvJD@RahNeil_N3:firebase:login:signInWithPopup:fetchSignInMethodsForEmail:noMethodFound");
                        modal.close();
                    }
                });
            } else if (error.code === "auth/popup-closed-by-user") {
                toasts.warning('Login popup closed')
                logs.add({ msg: "Popup closed by user" }, "info")
            } else if (error.code === "auth/cancelled-popup-request") {
                logs.add({ msg: "Cancelled popup request" }, "info")
            } else {
                console.log(error.code)
                console.log(error.message)
                logs.add(error, "error")
                toasts.feedbackError("07Lgio5RuM@RahNeil_N3:firebase:login:signInWithPopup:unknownError");
                modal.close();
            }
        });
}