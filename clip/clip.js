import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { widthMove } from "./library/widthMove";
import { opacity } from "./library/opacity";
import { svgCover } from "./library/svgCover";
import { blur } from "./library/blur";
import { topMove } from "./library/topMove";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});
clip.addIncident(topMove("50%",".title", 1000), 500);
clip.addIncident(topMove("150%",".title", 1000), 4000);
clip.addIncident(opacity(1,".content1 .note1", 500), 6000);
clip.addIncident(opacity(1,".box", 500), 8000);
clip.addIncident(opacity(1,".content1 .note2-part", 200,"@stagger(0,5000)"), 10000);
clip.addIncident(widthMove("100px",".first-box",1000), 10000);
clip.addIncident(widthMove("300px",".last-box",1000), 12500);
clip.addIncident(svgCover(1,"#line line",1500),15000);
clip.addIncident(widthMove("@stagger(100px,300px)",".box",1000), 17500);
clip.addIncident(svgCover(0,"#line line",1000),23000);
clip.addIncident(widthMove("5px",".box",1000), 23000);
clip.addIncident(blur("blur(1rem)",".content1",1000), 23000);
clip.addIncident(opacity(0,".content1",1000), 23000);

// /////the second part
clip.addIncident(opacity(1,".content2 .note1", 500), 25000);
clip.addIncident(opacity(1,".content2 .note2-part", 200,"@stagger(0,5000)"), 26000);
clip.addIncident(widthMove("100px",".first-box",1000), 26000);
clip.addIncident(widthMove("300px",".last-box",1000), 28500);
clip.addIncident(svgCover(1,"#curve path",1500),31000);
clip.addIncident(widthMove("@stagger(100px,300px,0,easeInCirc)",".box",1000), 33500);
clip.addIncident(svgCover(0,"#curve path",1000),39000);
clip.addIncident(widthMove("0px",".box",1000), 39000);
clip.addIncident(blur("blur(1rem)",".content2",1000), 39000);
clip.addIncident(opacity(0,".content2",1000), 39000);



