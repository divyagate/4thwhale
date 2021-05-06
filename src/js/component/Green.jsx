import React from 'react';
export default class Green extends React.Component{
constructor(props){
    super(props);
   
}

render(){
    return(
    <div className="container container-green" style={{display:this.props.isLight ? "block" : "none"}}>
        <div className="trafficpole">
            <div className="light"></div>
            <div className="light"></div>
            <div className="light green"></div>
        </div>
        <div className="message">
            <p className="green-text-color">The light is Green</p>
        </div>
    </div>
    );
}
}