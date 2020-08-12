importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyB694yjmpOfpCL5SjoHLZ8sPW-NP9Nw9M8",
    authDomain: "my-project-1562334490565.firebaseapp.com",
    databaseURL: "https://my-project-1562334490565.firebaseio.com",
    projectId: "my-project-1562334490565",
    storageBucket: "my-project-1562334490565.appspot.com",
    messagingSenderId: "288856888998",
    appId: "1:288856888998:web:a70fee27588ca7da8cc667"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});