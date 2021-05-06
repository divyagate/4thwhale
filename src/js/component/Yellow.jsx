import React from 'react';
export default class Yellow extends React.Component{
    constructor(props){
        super(props);
        
    }
    
render(){
    return(
    <div className="container container-yellow" style={{display:this.props.isLight ? "block" : "none"}}>
        <div className="trafficpole">
            <div className="light"></div>
            <div className="light yellow"></div>
            <div className="light"></div>
        </div>
        <div className="message">
            <p className="yellow-text-color">The light is Yellow</p>
        </div>
    </div>
    );
}
}