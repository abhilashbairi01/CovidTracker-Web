import React, { Component } from 'react'
import './Imgstyl.css';
 class Images extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate()+'-'+ (today.getMonth() + 1)+'-'+today.getFullYear()  ;

        this.state = {
            date: date,
        };
    }
    render() {
        return (
            <div>
                <div className="color">
            <div id="total">  
                <div className='img' id='left'><img src="https://media.istockphoto.com/vectors/medical-face-mask-icon-vector-id1214356891?k=6&m=1214356891&s=612x612&w=0&h=bdO_9kzIJZJbmEOP4ffRN7RwOrZF4Luyotdc4eMtywY=" alt="mask" height="100px" width="100px"></img></div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div id="main" className='img'>CORONA CASES IN INDIA</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='img' id='right'><img src="https://thumbs.dreamstime.com/b/washing-hands-sanitizer-liquid-soap-vector-icon-black-isolated-white-background-sanitary-antiseptic-hygiene-virus-179774821.jpg" alt="sanitizer" height="100px" width="100px" ></img></div>
                
            </div><hr></hr></div>
            <div className="toll">HELPLINE NUMBER:+91-11-23978046&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TOLL-FREE : 1075</div><br></br>
            <div className="today" style={{fontSize:'20px'}}>As on {this.state.date}</div>
            </div>
        )
    }
}

export default Images
