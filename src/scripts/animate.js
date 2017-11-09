
import reverseArray from "./reverseArray"; 

require("./waypoints"); 

const SLIDE_EFFECT = ["slideInLeft","slideInRight"]; 

function Slide(targetId, effect) {
  new Waypoint({
    element: document.getElementById(targetId), 
    handler: function effectHandler() {
      var firstChild = this.element.firstChild; 
      var lastChild = this.element.lastChild; 

      firstChild.addEventListener("animationend", function() {
        lastChild.className  = `${lastChild.className} ${effect[1]}`;
      }); 
      
      firstChild.className = `${firstChild.className} ${effect[0]}` ; 
    }, 
    offset:"75%"
  }); 
}

window.onload = function () {
  Slide("web-development", SLIDE_EFFECT); 
  Slide("web-responsive", reverseArray(SLIDE_EFFECT));
}; 
