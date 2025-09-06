import { getAnalytics, logEvent, type Analytics } from "firebase/analytics";
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { type Firestore, getFirestore } from "firebase/firestore";
import { getPerformance, type FirebasePerformance } from "firebase/performance";

interface IFirebaseParams {
  service_name?: string;
  id_list_product: number;
  list_product_name: string;
  page_title: string;
  page_path?: string;
}

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let analytics: Analytics;
let perf: FirebasePerformance;
let db: Firestore;

if (firebaseConfig?.projectId) {
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== "undefined") {
    analytics = getAnalytics(app);
    perf = getPerformance(app);
    db = getFirestore(app);
  }
}

export { analytics, logEvent, perf, db };

export default function sendFirebase(dataParams: IFirebaseParams): void {
  const currentPagePath = window.location.pathname;
  const router = `/tagyana${currentPagePath}`;

  const params: IFirebaseParams = {
    service_name: "Tagyana Project",
    id_list_product: dataParams.id_list_product,
    list_product_name: dataParams.list_product_name,
    page_title: dataParams.page_title,
    page_path: dataParams.page_path ? dataParams.page_path : router,
  };

  logEvent(analytics, "page_view", params);
}
