import React from 'react';
export default class Red extends React.Component{
    constructor(props){
        super(props);
        
    }
render(){
    return(
    <div className="container container-red" style={{display:this.props.isLight ? "block" : "none"}}>
        <div className="trafficpole">
            <div className="light red"></div>
            <div className="light"></div>
            <div className="light"></div>
        </div>
        <div className="message">
            <p className="red-text-color">The light is Red</p>
        </div>
    </div>
    );
}
}