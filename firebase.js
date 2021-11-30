import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC--XfK5AVbngZIiGUmPs4iuVwrqk4iuyo",
    authDomain: "oxygen-pro.firebaseapp.com",
    projectId: "oxygen-pro",
    storageBucket: "oxygen-pro.appspot.com",
    messagingSenderId: "689719784704",
    appId: "1:689719784704:web:ad4c3c72247a9930c96fe5",
    measurementId: "G-65RVP0Z5NL"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);