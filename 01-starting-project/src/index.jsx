import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./global.css";
import { StrictMode } from "react";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
	<StrictMode>
		<App />
	</StrictMode>
);
