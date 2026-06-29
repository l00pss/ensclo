import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import ConnectorsPage from "./pages/ConnectorsPage";
import ConnectorGroupPage from "./pages/ConnectorGroupPage";
import GrammarPage from "./pages/GrammarPage";
import GrammarGroupPage from "./pages/GrammarGroupPage";
import "./index.css";

// HashRouter (URL-də #) — GitHub Pages-də server-side routing tələb etmir,
// ona görə subrout refresh-də 404 olmur.
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "topic/:id", element: <TopicPage /> },
      { path: "connectors", element: <ConnectorsPage /> },
      { path: "connectors/:groupId", element: <ConnectorGroupPage /> },
      { path: "grammar", element: <GrammarPage /> },
      { path: "grammar/:groupId", element: <GrammarGroupPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
