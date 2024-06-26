import {
	signInWithPopup,
	fetchSignInMethodsForEmail,
	OAuthProvider,
	onAuthStateChanged,
	signOut as authSignOut
} from "firebase/auth"
import { get, writable } from "svelte/store"
import { doc, getDoc } from "firebase/firestore"

import AccountSetupModal from "$cmp/modals/AccountSetupModal.svelte"

import { modal } from "$lib/modals"
import { logs } from "$lib/logs"
import { toasts } from "$lib/toasts"
import { auth, fsdb } from "$lib/firebase"
import UserProfileModal from "$cmp/modals/UserProfileModal.svelte"

/** @type {import("svelte/store").Writable<import("@firebase/auth").User | null | undefined>} */
export let userData = writable(undefined)
/** @type {import("svelte/store").Writable<import("@firebase/firestore").DocumentData | undefined | null>} */
export let privateData = writable(undefined)
/** @type {import("svelte/store").Writable<import("@firebase/firestore").DocumentData | undefined | null>} */
export let publicData = writable(undefined)
/** @type {import("svelte/store").Writable<boolean>} */
export let isAdmin = writable(false)

onAuthStateChanged(auth, (u) => {
	userData.set(u)
	if (u) {
		getDoc(doc(fsdb, "users", u.uid, "private", "general"))
			.then((ud) => {
				privateData.set(ud.data())
			})
			.catch((err) => {
				console.log(err)
				logs.add(err, "error")
				toasts.feedbackError("ISjznvVZg0@RahNeil_N3:user:onAuthStateChanged:getDoc:private:general")
			})
		getDoc(doc(fsdb, "users", u.uid, "public", "general"))
			.then((ud) => {
				publicData.set(ud.data())

				if (!ud.data()) {
					//TODO REMOVE TRUE
					logs.add({ msg: "Public data is empty, opening AccountSetupModal" }, "info")

					modal.open(AccountSetupModal, { userID: u.uid })
				}
			})
			.catch((err) => {
				console.log(err)
				logs.add(err, "error")
				toasts.feedbackError("pLaKcDkLIO@RahNeil_N3:user:onAuthStateChanged:getDoc:public:general")
			})

		u.getIdTokenResult()
			.then((idTokenResult) => {
				isAdmin.set(idTokenResult.claims.role === "admin")
			})
			.catch((err) => {
				console.log(err)
				logs.add(err, "error")
				toasts.feedbackError(
					"OubyBeMopi@RahNeil_N3:user:onAuthStateChanged:getIdTokenResult:claims:isAdmin"
				)
			})
	} else {
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

export let login = (
	/** @type {import("@firebase/auth").AuthProvider} */ provider,
	/** @type {any} */ loginAndLinkModal
) => {
	logs.add({ msg: "Opening sign in popup" }, "info")
	signInWithPopup(auth, provider)
		.then((result) => {
			toasts.success("Welcome back " + result.user.displayName)
			modal.close()
			logs.add({ msg: "Signed in" }, "info")
		})
		.catch((error) => {
			if (error.code === "auth/account-exists-with-different-credential") {
				logs.add({ msg: "Account already exists with different credentials" }, "info")
				var pendingCred = OAuthProvider.credentialFromError(error)
				var email = error.customData.email
				fetchSignInMethodsForEmail(auth, email).then(function (methods) {
					if (methods[0] === "password") {
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
						toasts.feedbackError(
							"QursEsQa2C@RahNeil_N3:firebase:login:signInWithPopup:fetchSignInMethodsForEmail:methodPassword"
						)
						modal.close()
					} else if (methods[0] === "google.com") {
						modal.open(loginAndLinkModal, {
							providerID: "RahNeil_N3:ProviderID:Xr1pTDZIE4",
							userCred: pendingCred
						})
					} else if (methods[0] === "microsoft.com") {
						modal.open(loginAndLinkModal, {
							providerID: "RahNeil_N3:ProviderID:ZB8aogoHvU",
							userCred: pendingCred
						})
					} else if (methods[0] === "apple.com") {
						modal.open(loginAndLinkModal, {
							providerID: "RahNeil_N3:ProviderID:QBK4b9Vv2y",
							userCred: pendingCred
						})
					} else {
						console.log(error.code)
						console.log(error.message)
						console.log(methods)
						logs.add({ error: error, methods: methods }, "error")
						toasts.feedbackError(
							"5da8CAQvJD@RahNeil_N3:firebase:login:signInWithPopup:fetchSignInMethodsForEmail:noMethodFound"
						)
						modal.close()
					}
				})
			} else if (error.code === "auth/popup-closed-by-user") {
				toasts.warning("Login popup closed")
				logs.add({ msg: "Popup closed by user" }, "info")
			} else if (error.code === "auth/cancelled-popup-request") {
				logs.add({ msg: "Cancelled popup request" }, "info")
			} else {
				console.log(error.code)
				console.log(error.message)
				logs.add(error, "error")
				toasts.feedbackError("07Lgio5RuM@RahNeil_N3:firebase:login:signInWithPopup:unknownError")
				modal.close()
			}
		})
}

export let openUserProfileModal = (
	/** @type string */ providerID,
	/** @type string | undefined */ userID
) => {
	logs.add({ msg: "UserProfileModal opened for "+providerID }, "info")

	if (get(userData)?.uid != null) {
		const url = new URL(window.location.toString())
		url.searchParams.set(encodeURIComponent("5uY"), encodeURIComponent(userID || ""))
		history.replaceState({}, "", url)

		modal.open(UserProfileModal, { userID: userID }, "5uY")
	} else {
		toasts.feedbackError(
			"s6ygzmsG0G@RahNeil_N3:user:openUserProfileModal:from+"+providerID+":invalidUserID"
		)
	}
}
