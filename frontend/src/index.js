import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ymmfh57oz1mf6r4f.us.auth0.com"
    clientId="6iPS2jgclvNSsLCr7E6oNYZ73BZgMlaA"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
    
  >
    <App />
  </Auth0Provider>
);
reportWebVitals();
