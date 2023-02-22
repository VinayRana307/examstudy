import { Component } from "react";
import bharatPlace_subname from '../../Questions/TableData/TablesQuestion'
import Table from 'react-bootstrap/Table';

export default class TableData extends Component{
    constructor(){
        super();
        this.state ={
        }
    }
    render(){
        console.log(bharatPlace_subname)
        return(
            <div>
                <span className="link" ><a href="/examstudy/#/home">Home</a></span>
                <h4 style={{margin:'2% 8% 1% 8%',color:'red',fontWeight:'600'}}>भारत के प्रमुख भोगोलिक उपनाम</h4>
                <Table striped bordered hover className="container">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>भोगोलिक उपनाम</th>
                            <th>शहर</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bharatPlace_subname.map((item,index)=>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.subname}</td>
                        <td>{item.city}</td>
                    </tr>
                    )}
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
                </Table>
            </div>
        )
    }
}