import { loadPlugin } from "@donkeyclip/motorcortex";
import SVGDDef from "@donkeyclip/motorcortex-svgdraw";
const SVGD = loadPlugin(SVGDDef);

export const svgCover = (cover,selector, duration, delay=0,easing = "linear") =>
  new SVGD.Draw(
    {
      animatedAttrs: {
        cover,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
