import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
//import { TablePagination } from 'react-pagination-table';

export default class AddComm extends Component{
    static contextType = AppContext;   
    constructor(props) {
        super(props)
          this.state = {
            chk: []
          }
      }
    handleChangeEnt = event => {
        this.setState({ entityname: event.target.value });
      }
    handleChange = event => {
        
        this.setState({ code: event.target.value });
      
        event.preventDefault();
        event.persist();
        Axios.post('http://socalled.co.in/openminds/chk-comm.php',{
            entityname:this.entityname.value,
            code:this.code.value            

        })
        .then(function ({data}) {
            if(data.success === 1){               

                let chk = this.state.chk.map(chk => {                                            
                        chk.desc=this.desc.value; 
                        chk.cemail=this.cemail.value;
                        chk.statecode=this.statecode.value;
                        chk.datec=this.datec.value; 
                        chk.url=this.url.value;
                        chk.phoneno=this.phoneno.value;            
                        chk.region=this.region.value ;
                        chk.isEditing = true;
                       // return chk;
                      
                });
                this.setState({
                    chk
                });
            }
            else{
                alert(data.msg);
            }
        }).catch(function () {
        console.log();
        });
      }
    insertComm = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-login/add-Comm',{
            entityname:this.entityname.value,
            code:this.code.value,
            desc:this.desc.value, 
            cemail:this.cemail.value,
            statecode:this.statecode.value,
            datec:this.datec.value, 
            url:this.url.value,
            phoneno:this.phoneno.value,            
            region:this.region.value 

        })
        .then(function ({data}) {
            if(data.success === 1){
                alert(data.message);
               // this.context.addNewComm(data.id,this.Commname.value);
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
    
    
    <form onSubmit={this.insertComm}>
            <div className="form-row">
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Entity</label>
                    <input type="text" name="entityname" ref={(val) => this.entityname = val} className="form-control" placeholder="Name" onChange={this.handleChangeEnt}/>
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Code</label>
                    <input type="text" name="code" ref={(val) => this.code = val} className="form-control" placeholder="Code" onChange={this.handleChange}   />
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Description</label>
                    <input type="text" name="desc" 
                    ref={(val) => this.desc = val} className="form-control" 
                    placeholder="Description"
                    />
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Email ID</label>
                    <input type="email" name="cemail" ref={(val) => this.cemail = val} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Phone No.</label>
                    <input type="text" name="phoneno" ref={(val) => this.phoneno = val} className="form-control" placeholder="Phone No."/>
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Region</label>
                    <input type="text" name="region" ref={(val) => this.region = val} className="form-control" placeholder="Region"/>
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">State Code</label>
                    <input type="text" name="statecode" ref={(val) => this.statecode = val} className="form-control" placeholder="State Code"/>
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Date</label>
                    <input type="text" name="datec" ref={(val) => this.datec = val} className="form-control" placeholder="Date"/>
                </div>
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">URL</label>
                    <input type="text" name="url" ref={(val) => this.url = val} className="form-control" placeholder="URL"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary  ">Apply</button>
                </div>
            </div>
        </form>     
        
     

        //     <table className="table table-striped table-bordered">
        //     <thead>
        //         <tr>
        //             <th>Entity</th>
        //             <th>Code</th>
        //             <th>description</th>                    
        //             <th>Email ID</th>
        //             <th>Phone No</th>
        //             <th>Region</th>                    
        //             <th>State Code</th>
        //             <th>Date</th>
        //             <th>URL</th>
        //             <th>Status</th>
        //         </tr>
        //     </thead>
        //     <tbody>
                
        //     </tbody>
        // </table>
        );
    }
}