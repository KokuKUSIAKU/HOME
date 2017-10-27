import React from "react";
const STACK_REGISTRY = {
  HTML:"HTML5",
  CSS:"CSS3",
  BOOTSTRAP:"BOOSTRAP",
  JAVASCRIPT:"JAVASCRIPT",
  REACT:"REACT",
  REDUX:"REDUX",
  WEBPACK:"WEBPACK",
  NODEJS:"NODJS",
  EXPRESS:"EXPRESS",
  MONGODB:"MONGODB"
};

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stackList:"",
    };
    this.createList = this.createList.bind(this);
  }
  componentWillMount() {
    this.setState( {
      stackList:this.createList(),
    });
  }
  componentDidMount(){
    for (let item in STACK_REGISTRY){
      let canvas = document.getElementById(item);
      let ctx = canvas.getContext("2d");
      let step1 = 1/2;
      let step2 = Math.sqrt(3)/2;
      let width = canvas.width/2; 
      let height = canvas.height/2; 
      ctx.textBaseline ="middle";
      ctx.textAlign ="center";
      ctx.font ="30px Frank Arial";
      ctx.fillText(STACK_REGISTRY[item],width, height);

      // draw an hexagone arout stack item
      ctx.beginPath();
      ctx.moveTo(step1*width,(1-step2)*height); 
      ctx.lineTo((1+step1)*width, (1-step2)*height); 
      ctx.lineTo(2*width, height);
      ctx.lineTo((1+step1)*width, (1+step2)*height); 
      ctx.lineTo(step1*width, (1+step2)*height);
      ctx.lineTo(0, height);
      ctx.lineTo(step1*width,(1-step2)*height);     
      ctx.stroke();
    }
  }
  createList() {
    var list = [];
    //list.push(React.createElement("canvas", { id: "html", width: "3em", heigth: "3em" }));
    for (let item in STACK_REGISTRY) {
      list.push( 
        <canvas id={item} className ="stack-item" style={{width:"150",height:"150"}}></canvas>
      );
    }
    return list; 
    //return React.createElement("canvas", { id: "html", width: "3em", height: "3em" });
  }

  render() {
    return (
      <div className="stack">
        
        { this.state.stackList}
      </div>);
  }
}

export default Stack; 