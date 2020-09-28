import React, {useState} from 'react';
import Customer from './components/Customer';
import UserKit from '../data/UserKit';


export default function Clients() {
    const userKit = new UserKit()
    const [customerList, setCustomerList] = useState([])


  function fetchClients() {
    userKit.getCustomerList()
    .then(res => res.json())
    .then(data => {
        let id = data.results.id
        let customerArr = [
            id = {
                data: data.results
            }
        ]
      setCustomerList(data.results)
    })  
  }

  function delCustomer (id) {
    if(window.confirm('Är du säker på att du vill radera den här kunden?'))
    {
      userKit.deleteCustomer(id)
      .then(data => {
          fetchClients()
      })
    }
}
function detailView (index) {
    
    customerList.map((customer) => {

    })
  }
 
    return (
        <div>
            <button onClick={fetchClients}>Get my Clients</button>
            <ul>
            {
                customerList.map((customer,index) => {
                    //console.log(customerList[i])
                    //console.log(i)
                    return (
                        <Customer 
                        key={index}
                        id={customer.id} 
                        detailView={detailView}
                        delEvent={delCustomer}
                        >
                            
                            {customer.website}
                            {customer.reference}
                            {customer.organisationNr}
                            {customer.vatNr}
                            {customer.paymentTerm}
                        </Customer>)
                })
            }
            </ul>
        </div>
    )
}