importScripts('https://www.gstatic.com/firebasejs/9.6.6/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.6/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBu7TQgVqznpopb_HVdo7FJw2y54-AZKNM",
  authDomain: "authenticate-dbf8a.firebaseapp.com",
  projectId: "authenticate-dbf8a",
  storageBucket: "authenticate-dbf8a.appspot.com",
  messagingSenderId: "133331608934",
  appId: "1:133331608934:web:8977a878ee2be768e314a7",
  measurementId: "G-VN59N635R4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
