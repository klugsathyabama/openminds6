import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

export default class Addentity extends Component{
    static contextType = AppContext;   
    
    insertentity = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://socalled.co.in/openminds/add-entity.php',{
            entity_name:this.entityname.value 
        })
        .then(function ({data}) {
            if(data.success === 1){
                alert(data.message);
               // this.context.addNewentity(data.id,this.entityname.value);
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
            <form onSubmit={this.insertentity}>
            <div className="form-row">
                <div className="form-group col-sm-8">
                    <label className="font-weight-bold">Entity</label>
                    <input type="text" name="entityname" ref={(val) => this.entityname = val} className="form-control" placeholder="Name"/>
                </div>
                
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary col-sm-4">Apply</button>
                </div>
            </div>
        </form>        
        );
    }
}