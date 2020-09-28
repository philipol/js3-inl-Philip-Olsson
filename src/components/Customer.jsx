import React, {useEffect, useState} from 'react';
import UserKit from '../data/UserKit';
import {  useHistory, useParams } from 'react-router-dom';


export default function Customer(props){
    const { id } = useParams();
    const history = useHistory()
    const userKit = new UserKit()
    
    const [customerDetail, setCustomerDetail] = useState()


    useEffect(()=>{
        fetchCustomerData()
      },[])
  
    function fetchCustomerData() {
        userKit.getCustomer(id)
        .then(res => res.json())
        .then(data => {
            setCustomerDetail(data)
        })
    }
    function delCustomer (id) {
        userKit.deleteCustomer(id)
        .then(data => {
            console.log(data)
            history.push("/home")
        })
    }   
    
    console.log(customerDetail)
    return (
        <div>
            {customerDetail &&    
                <span> 

                    Id: {customerDetail.id}
                    Name: {customerDetail.name}
    
                </span>
            }

            <button onClick={()=>delCustomer(id)}>Delete</button>
        </div>
    )
  }






/*Email: {props.children[1]}, 
Phonenumber: {props.children[2]}, 
Website: {props.children[3]}, 
Reference: {props.children[4]}, 
Organisation number: {props.children[5]}, 
VAT number: {props.children[6]}, 
Payment term: {props.children[7]},*/
