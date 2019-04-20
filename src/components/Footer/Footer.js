import React , {Component} from "react";

export default class Footer extends Component {
    render(){
        return(
            <div className="Footer-container" style={{textAlign:"center",background:"#0288D1"}}>
                <p style={{margin:"0", padding:"10px 0px", color:"white"}}>Website developed by <span style={{color:"black"}}>Muhammad Aqsam</span> &copy;</p>
           </div>
        );
    }
}