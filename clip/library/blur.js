import { CSSEffect } from "@donkeyclip/motorcortex";
export const blur = (blur,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        filter:blur,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
