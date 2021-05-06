import React from 'react';
import Red from './Red.jsx';
import Yellow from './Yellow.jsx';
import Green from './Green.jsx';
import '../../styles/TrafficLight.scss';
export default class TrafficLight extends React.Component{

    state = {
        green: true,
        yellow: false,
        red: false
    };
    
    transition = () => {
        if (this.state.green) {
          this.setState({
            green: false,
            yellow: true,
            red: false
          });
          this.shortInterval();
          return;
        }
    
        if (this.state.yellow) {
          this.setState({
            green: false,
            yellow: false,
            red: true
          });
          this.longInterval();
          return;
        }
    
        if (this.state.red) {
          this.setState({
            green: true,
            yellow: false,
            red: false
          });
          this.longInterval();
          return;
        }
    };
    
    longInterval() {
        setTimeout(this.transition, 20000);
    }
    
    shortInterval() {
        setTimeout(this.transition, 10000);
    }
    
    componentDidMount() {
        this.longInterval();
    }


render(){
    const { green, yellow, red } = this.state;
    return(
        <div className="mainWrapper">
        <Red isLight={red}/>
        <Yellow isLight={yellow}/>
        <Green isLight={green}/>
        </div>
    );
}
}