import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

export default class Addentity extends Component{
    static contextType = AppContext;   
    constructor(props) {
        super(props)
        this.state = {rows: []};
      }

      appendRow(event) {
        var rel = event.target.getAttribute("rel");
        rel = parseInt(rel) + 1;
      
        var joined = this.state.rows.concat(
        <tr>
          <td>
            <input type="text" id={`select-type` + rel} />
          </td>
          <td>
            <input type="text" id={`select-position` + rel} />
          </td>
          <td>
            <input type="text" id={`select-position` + rel} />
          </td>
          <td>
            <input type="text" id={`select-position` + rel} />
          </td>
          <td>
            <input type="text" id={`select-position` + rel} />
          </td>
        </tr>
        );
        this.setState({ rows: joined })
      }
    
    insertPM = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://socalled.co.in/openminds/add-PM.php',{
            PM_name:this.PMname.value 
        })
        .then(function ({data}) {
            if(data.success === 1){
                alert(data.message);
               // this.context.addNewPM(data.id,this.PMname.value);
                event.target.reset();
                 
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){

        return(
           
<div className="col-sm-12 a">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Process</td>
                      <td>Stage</td>
                      <td>Event</td> 
                      <td>
                          Append</td>                      
                    </tr>
                  </thead>
                  

                  <tbody id="rows" name="rows" >
                    <tr>
                      <td>1</td>
                      <td>
                        <select
                          className="form-control"
                          name="process"
                          id="process"
                          onChange={event =>
                            this.handleprocess(event)
                          }                        >
                          <option value="select">Select</option>
                          {/* {this.state.Process.map(p => (
                            <option
                              value={p.id}
                              key={p.id}
                            >
                              {p.entityname}
                            </option>
                          ))} */}
                        </select>
                      </td>
                      <td style={{ width: "180px" }}>
                      <select
                          className="form-control"
                          name="stage"
                          id="stage"
                          onChange={event =>
                            this.handlestage(event)
                          }
                        >
                          <option value="select">Select</option>
                          {/* {this.state.stage.map(p => (
                            <option
                              value={p.id}
                              key={p.id}
                            >
                              {p.entityname}
                            </option>
                          ))} */}
                        </select>
                      </td>
                      
                      <td style={{ width: "180px" }}>
                      <select
                          className="form-control"
                          name="ev"
                          id="ev"
                          onChange={event =>
                            this.handleev(event)
                          }
                        >
                          <option value="select">Select</option>
                          {/* {this.state.stage.map(p => (
                            <option
                              value={p.id}
                              key={p.id}
                            >
                              {p.entityname}
                            </option>
                          ))} */}
                        </select>
                      </td>
                      <td>
                      <button
       rel="1"
       type="button"
       id="addbtn"
       className="btn btn-circle"
       name= "rows"
       onClick={this.appendRow}>
       <i className="fa fa-plus" />
     </button>
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>

        );
    }
}

{/* <form onSubmit={this.insertPM}>
<div className="form-row">
    <div className="form-group col-sm-8">
        <label className="font-weight-bold">PM</label>
        <input type="text" name="PMname" ref={(val) => this.PMname = val} className="form-control" placeholder="Name"/>
    </div>
    
    <div className="form-group col-sm-12 text-right">
        <button type="submit" className="btn btn-primary col-sm-4">Apply</button>
    </div>
</div>
</form>        */}