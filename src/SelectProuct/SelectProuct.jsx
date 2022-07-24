import React, { Component } from "react";

export default class SelectProuct extends Component {
 
  constructor() {
 
    super();

    this.state = {
      imgUrl: "",
      names: "",
      desce: ""
    };
    
  }
 
  changeGlass = (number, name, desc) => {
    const imgUrl = `/products/v${number}.png`;
    const names = `${name}`;
    const desce = `${desc}`;
    this.setState({names});
    this.setState({desce});
    this.setState({imgUrl});
    document.getElementById("glass").style.display = "block"
  };

  render() {
    return (
      <div className="container" id="backGround">
        <div
          className="text-center text-white bg-dark bg-opacity-75"
         
        >
          <h2>TRY GLASSES APP ONLINE</h2>
        </div>
        <div className="row">
          <div id="top">
            <div className="top-item">
              <img src="./img/model.jpg" alt="" />
              <div
                className="top-content text-start bg-gradient bg-warning" 
              >          
                <h5 className="text-primary">
                  {this.state.names}
                </h5>
                <p className="text-white fs-6">
                {this.state.desce}
                </p>
              </div>
            </div>
            <div className="top-item">
              <img src="./img/model.jpg" alt="" />
              <div id="glass" style={{position: "absolute", top:"24%",left:"18%",
              width:"65%", display:"none"}}>
                <img src={this.state.imgUrl} alt="glass" height={"80px"}/>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="container bg-white">
              <div
                className="row"
                id="bot-item"
                style={{ alignItems: "center" }}
              >
                <div className="col-2" onClick={() => this.changeGlass("1", "GUCCI G8850U", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g1.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("2", "GUCCI G8759H", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g2.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("3", "DIOR D6700HQ", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g3.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("4", "DIOR D6005U", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g4.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("5", "PRADA P8750", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g5.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("6", "PRADA P9700", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g6.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("7", "FENDI F8750", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g7.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("8", "FENDI F8500", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g8.jpg" alt="" />
                </div>
                <div className="col-2" onClick={() => this.changeGlass("9", "FENDI F4300", "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ")}>
                  <img src="./icons/g9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
