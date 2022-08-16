import createEmotionCache from "@emotion/cache";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import { StrictMode } from "react";
import { App } from "./App";
import { defineReactMicroFrontend } from "@valendres/react-micro-frontend";
import "./global.styles";

defineReactMicroFrontend(
  "potato-micro-frontend",
  (_, container) => {
    const emotionCache = createEmotionCache({
      key: "app",
      container: container?.shadowRoot,
    });
    return (
      <StrictMode>
        <EmotionCacheProvider value={emotionCache}>
          <App />
        </EmotionCacheProvider>
      </StrictMode>
    );
  },
  {
    shadow: true,
  }
);
