import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import ReferenceListPage from "./pages/ReferenceListPage";
import ReferenceDetailPage from "./pages/ReferenceDetailPage";
import ReviewPage from "./pages/ReviewPage";
import "./index.css";

// HashRouter (URL-də #) — GitHub Pages-də server-side routing tələb etmir,
// ona görə subrout refresh-də 404 olmur.
//
// Reference bölmələri (connectors/grammar/idioms/functional) TƏK cüt generik
// route ilə işlənir: `:sectionKey` və `:sectionKey/:groupId`. Yeni bölmə
// əlavə etmək üçün route deyil, yalnız registr dəyişir (Open/Closed).
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "topic/:id", element: <TopicPage /> },
      { path: "review", element: <ReviewPage /> },
      { path: ":sectionKey", element: <ReferenceListPage /> },
      { path: ":sectionKey/:groupId", element: <ReferenceDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
