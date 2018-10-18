import React, { Component } from 'react';
import styled from 'styled-components';
import './card.css';
import img from '../../images/home.jpg';


const CardBackground = styled.div`
    background:url(${props => props.dataImage ? props.dataImage : "#FFF"});
    background-size:cover;
    width:115%;
    height:113%;
`

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = ({ 
        width : 0,
        height : 0,
        mouseX : 0,
        mouseY : 0,
        mouseLeaveDelay : null,
        dataImage : null
    });

    this.cardBgTransform = this.cardBgTransform.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.mousePX = this.mousePX.bind(this);
    this.mousePY = this.mousePY.bind(this);
    this.cardRef = React.createRef();
  }
  mousePX() {
    return this.state.mouseX / this.state.width
  }
  mousePY() {
    return this.state.mouseY / this.state.height
  }
  cardStyle() {
    const rX = this.mousePX() * 30
    const rY = this.mousePY() * -30
    return {
      transform: 'rotateY(' + rX  + 'deg) rotateX(' +  rY  + 'deg)',
    }
  }
  cardBgTransform() {
    const tX = (this.mousePX() * -40);
    const tY = (this.mousePY() * -40);
   
    return {
        transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)',
      };
  }
  handleMouseMove(e) {
      let width = this.state.width;
      let height = this.state.height;
      var elem = e.target
      var rect = elem.getBoundingClientRect();
      let v = {
        mouseX : e.screenX - rect.left - width / 2,
        mouseY : e.screenY - rect.top - height / 2
      };
      this.setState(v);
  }
  handleMouseEnter() {
    clearTimeout(this.state.mouseLeaveDelay)
  }
  handleMouseLeave() {
    
    let delay = setTimeout(() => {
      this.setState({
        mouseX : 0,
        mouseY : 0
      })
    }, 1000)
    this.setState({
        mouseLeaveDelay : delay
    });
  }

  componentDidMount(){
      this.setState({
          dataImage :this.props.dataImage,
          width : this.cardRef.current.offsetWidth,
          height : this.cardRef.current.offsetHeight,
      })
  }

  render() {
    const props = this.props;
   
    return (
      <div
        className="card-wrap"
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={this.cardRef}
      >
        <div className="card" style={this.cardStyle()}>
          <CardBackground
            className="card-bg"
            style={this.cardBgTransform()}
            dataImage={props.dataImage}
          />
          <div className="card-info">
            <h1>{this.props.header}</h1>
            <p>{this.props.bodyText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
