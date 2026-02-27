import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Side-effect import: registers all nys-* custom elements on the page.
// No @lit/react wrappers needed — React 19 handles custom elements natively.
import "@nysds/components";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
