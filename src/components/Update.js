import React, { Component } from 'react'
import axios from 'axios'
import './Style.css'

 class Update extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              dailyconfirmed:0,
              dailydeceased:0,
              dailyrecovered:0,
              totalconfirmed:0,
              totaldeceased:0,
              totalrecovered:0,
              statename:[],
              active:[],
              recovered:[],
              confirmed:[],
              deaths:[],
              newcases:[],
              newcured:[],
              newdeaths:[],
              
         }
        //  this.clickhandler=this.clickhandler.bind(this)
     }
     show(){
      document.getElementById("mob").style.display="none";
      document.getElementById("mob1").style.display="block";
    
      
     }
     hide(){
       document.getElementById("mob").style.display="block";
       document.getElementById("mob1").style.display="none";
     }
     componentDidMount()
   {
       axios.get('https://www.mohfw.gov.in/data/datanew.json')
       .then(response => {
           console.log(response);
        // const today = new Date()
        // const yesterday = new Date(today) 

        const alldata = response.data;
        

        // yesterday.setDate(yesterday.getDate() - 1)
        // const dates=yesterday.toISOString().substring(0,10)

        let active=[],recovered=[],confirmed=[],statename=[],deaths=[],newcases=[],newcured=[],newdeaths=[];
        for(let i=0;i<36;i++)
        {
            active.push(alldata[i].new_active);
            recovered.push(alldata[i].new_cured);
            confirmed.push(alldata[i].new_positive);
            statename.push(alldata[i].state_name);
            deaths.push(alldata[i].new_death);
            newcases.push(alldata[i].new_positive-alldata[i].positive);
            newcured.push(alldata[i].new_cured-alldata[i].cured);
            newdeaths.push(alldata[i].new_death-alldata[i].death);
        }
       

           this.setState({

                         dailyconfirmed: alldata[36].new_positive-alldata[36].positive,  
                         dailydeceased: alldata[36].new_death-alldata[36].death, 
                         dailyrecovered: alldata[36].new_cured-alldata[36].cured ,
                         totalrecovered: alldata[36].new_cured,
                         totalconfirmed: alldata[36].new_positive,
                         totaldeceased: alldata[36].new_death,
                         statename:statename,
                         recovered: recovered,
                         confirmed: confirmed,
                         active:active,
                         deaths: deaths,
                         newcases: newcases,
                         newcured: newcured,
                         newdeaths: newdeaths,
                        
                       
                        
        })
        
       } )
      
          
       .catch(error => {
           console.log(error)
       })
   }  

    render() { 
       
        return (
            <div>
              <div id="totally">
             <div id="confirmed" className="conf"><br></br> *NEW CASES: <br></br>{this.state.dailyconfirmed}</div>
             <div id="confirmed" className="death"><br></br> *DEATHS: <br></br>{this.state.dailydeceased}</div>
              <div id="confirmed" className="rec"><br></br> *RECOVERED: <br></br>{this.state.dailyrecovered}</div>
              </div>
              <div id="tot">
              <div id="totalconfirmed" className="conf"><br></br>*TOTAL CASES:<br></br>{this.state.totalconfirmed}</div>
              <div id="totalconfirmed" className="death"><br></br>*TOTAL DEATHS:<br></br>{this.state.totaldeceased}</div>
              <div id="totalconfirmed" className="rec"><br></br>*TOTAL RECOVERED:<br></br>{this.state.totalrecovered}</div>
              </div>
              <br></br>
              <br></br>
              
              <div id="second">STATE WISE COVID CASES</div>
              <br></br>
              
              <button className="button button2" onClick={this.hide}>Overall</button>
              <button className=" button button1" onClick={this.show}>Today's</button>
              
              <div style={{overflowX:'auto'}} id="mob">
              <br></br>
              <table>
                  <tr>
                        <th>State</th>
                        <th>Total Active cases </th>
                        <th>TotalRecovered</th>
                        <th>Total confirmed</th>
                        <th>Total deaths</th>
                  </tr>
                  <tr>
                       <td>{this.state.statename.map(item => {
                          return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>       
                                   )
                                  })}
                         </td>
                        
                         <td> {this.state.active.map(item => {
                          return(
                           <p style={{borderBottom: '0.1vh solid'}}>{item}</p>
                      
                                 )
                                  })}</td>
                        
                        
                        <td> {this.state.recovered.map(item => {
                          return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>
                      
                              )
                              })}</td>
                         
                          
                         <td> {this.state.confirmed.map(item => {
                           return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>
                      
                             )
                             })}</td>
                          
                          
                          <td> {this.state.deaths.map(item => {
                              return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>
                      
                               )
                              })}</td>
                            
                    </tr>
        
               </table>
               </div>
               {/* <br></br> */}
               <br></br>
               <div style={{overflowX:'auto'}} id="mob1">
                 <br></br>
               <table>
               <tr>
                        <th>State</th>
                        <th>Active Cases</th>
                        <th>New Cases</th>
                        <th>New cured</th>
                        <th>New Deaths</th>
                        
                  </tr>
                  <tr>
                  <td>{this.state.statename.map(item => {
                          return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>       
                                   )
                                  })}
                         </td>
                         <td> {this.state.active.map(item => {
                          return(
                           <p style={{borderBottom: '0.1vh solid'}}>{item}</p>
                      
                                 )
                                  })}</td>
                    <td>{this.state.newcases.map(item => {
                          return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>       
                                   )
                                  })}
                    </td>
                    <td>{this.state.newcured.map(item => {
                          return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>       
                                   )
                                  })}
                         </td>
                         <td>{this.state.newdeaths.map(item => {
                          return(
                            <p style={{borderBottom: '0.1vh solid'}}>{item}</p>       
                                   )
                                  })}
                         </td>
                  </tr>
               </table>
               </div>
            
              <br></br>
            </div> 
        )
    }
}

export default Update
