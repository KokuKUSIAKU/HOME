import React from "react";

const STACK_REGISTRY = {
  HTML: "HTML5",
  CSS: "CSS3",
  BOOTSTRAP: "BOOSTRAP",
  JAVASCRIPT: "JAVASCRIPT",
  REACT: "REACT",
  REDUX: "REDUX",
  WEBPACK: "WEBPACK",
  NODEJS: "NODJS",
  EXPRESS: "EXPRESS",
  MONGODB: "MONGODB"
};

class Stacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stackList: "",
    };
    this.createList = this.createList.bind(this);
  }
  componentWillMount() {
    this.setState({
      stackList: this.createList(),
    });
  }
  componentDidMount() {
    for (let item in STACK_REGISTRY) {
      let canvas = document.getElementById(item);
      let ctx = canvas.getContext("2d");
      let step1 = 1 / 2;
      let step2 = Math.sqrt(3) / 2;
      let width = canvas.width / 2;
      let height = canvas.height / 2;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "30px Frank Arial";
      ctx.fillStyle ="rgb(255,255,255)";
      ctx.fillText(STACK_REGISTRY[item], width, height);
      ctx.beginPath();
      ctx.moveTo(step1 * width, (1 - step2) * height);
      ctx.lineTo((1 + step1) * width, (1 - step2) * height);
      ctx.lineTo(2 * width, height);
      ctx.lineTo((1 + step1) * width, (1 + step2) * height);
      ctx.lineTo(step1 * width, (1 + step2) * height);
      ctx.lineTo(0, height);
      ctx.lineTo(step1 * width, (1 - step2) * height);
      ctx.strokeStyle = "rgb(255,255,255)";
      ctx.stroke();
      
    }
  }

  createList() {
    var list = [];
    for (let item in STACK_REGISTRY) {
      list.push(
        <canvas id={item} key={item} className="stack-item"></canvas>
      );
    }
    return list;
  }

  render() {
    return (
      <section id="stack">
        <div className="stack-wrapper">
          <h2 className="section-title">My Stack </h2>
          <div className="container-fluid">
            <div className="tech-stack">
              <div className="row">
                <div className="stack-introduction col-md-4">
                  <p className="stack-introduction-text">I work with and I possess grounded expertise on these technologies</p>
                </div>
                <div className="stack-container col-md-8">
                  <div className="stack-list">
                    {this.state.stackList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Stacks;