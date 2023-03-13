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
clip.addIncident(topMove("150%",".title", 1000), 3000);
clip.addIncident(opacity(1,".content1 .note1", 500), 4500);
clip.addIncident(opacity(1,".box", 500), 5200);
clip.addIncident(opacity(1,".content1 .note2-part", 200,"@stagger(0,3000)"), 8000);
clip.addIncident(widthMove("100px",".first-box",1000), 8000);
clip.addIncident(widthMove("300px",".last-box",1000), 9500);
clip.addIncident(svgCover(1,"#line line",1500),11000);
clip.addIncident(widthMove("@stagger(100px,300px)",".box",1000), 13000);
clip.addIncident(svgCover(0,"#line line",1000),17000);
clip.addIncident(widthMove("5px",".box",1000), 17000);
clip.addIncident(blur("blur(1rem)",".content1",1000), 17000);
clip.addIncident(opacity(0,".content1",1000), 17000);

// /////the second part
clip.addIncident(opacity(1,".content2 .note1", 500), 19000);
clip.addIncident(opacity(1,".content2 .note2-part", 200,"@stagger(0,3000)"), 20000);
clip.addIncident(widthMove("100px",".first-box",1000), 20000);
clip.addIncident(widthMove("300px",".last-box",1000), 21500);
clip.addIncident(svgCover(1,"#curve path",1500),23000);
clip.addIncident(widthMove("@stagger(100px,300px,0,easeInCirc)",".box",1000), 25000);
clip.addIncident(svgCover(0,"#curve path",1000),29000);
clip.addIncident(widthMove("0px",".box",1000), 29000);
clip.addIncident(blur("blur(1rem)",".content2",1000), 29000);
clip.addIncident(opacity(0,".content2",1000), 29000);



