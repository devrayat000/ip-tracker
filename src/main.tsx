import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "leaflet/dist/leaflet.css";
import { SWRConfig } from "swr";

ReactDOM.createRoot(document.getElementById("_app") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
