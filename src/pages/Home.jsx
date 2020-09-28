import React, {useState, useEffect} from 'react';
import UserInfo from '../components/UserInfo';
import {Link} from 'react-router-dom';
import UserKit from '../data/UserKit'

export default function Home() {
    const userKit = new UserKit()

    const [customerList, setCustomerList] = useState([])

    const [customerName, setCustomerName] = useState("")
    const [customerEmail, setCustomerEmail] = useState("")
    const [customerPhoneNr, setCustomerPhoneNr] = useState("")
    const [customerWebsite, setCustomerWebsite] = useState("")
    const [customerReference, setCustomerReference] = useState("")
    const [customerOrganisationNr, setCustomerOrganisationNr] = useState("")
    const [customerVatNr, setCustomerVatNr] = useState("SE1234567890")
    const [customerPaymentTerm, setCustomerPaymentTerm] = useState("")

    useEffect(()=>{
        fetchClients()
      },[])

    function fetchClients() {
        userKit.getCustomerList()
        .then(res => res.json())
        .then(data => {
          setCustomerList(data.results)
        })  
      }

      function handleStates () {
        setCustomerName("")
        setCustomerEmail("")
        setCustomerPhoneNr("")
        setCustomerWebsite("")
        setCustomerReference("")
        setCustomerOrganisationNr("")
        setCustomerVatNr("SE1234567890")
        setCustomerPaymentTerm("")
      }

    function handleCreateCustomer() {
        const payload = {
        name: customerName,
        email: customerEmail,
        phoneNumber: customerPhoneNr,
        website: customerWebsite,
        reference: customerReference,
        organisationNr: customerOrganisationNr,
        vatNr: customerVatNr,
        paymentTerm: customerPaymentTerm
        }
        console.log(payload)
        userKit.createCustomer(payload)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        fetchClients()
        })
    handleStates()
    }

    return(
        <div>
            <UserInfo/>
            <button onClick={fetchClients}>Get my Clients</button>
          <ul>
            {customerList ? (
                customerList.map((customer,index) => {
                    return(
                        <Link key={index} to={`/customer/${customer.id}`}><p>Name: {customer.name}</p></Link>                    )
                })
            ) : (
                <span>No customer</span>
            )}
          </ul>
          <div>
            <input placeholder="Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
            <input placeholder="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}/>
            <input placeholder="PhoneNr" value={customerPhoneNr} onChange={(e) => setCustomerPhoneNr(e.target.value)}/>
            <input placeholder="Website" value={customerWebsite} onChange={(e) => setCustomerWebsite(e.target.value)}/>
            <input placeholder="Reference" value={customerReference} onChange={(e) => setCustomerReference(e.target.value)}/>
            <input placeholder="OrganisationNr" value={customerOrganisationNr} onChange={(e) => setCustomerOrganisationNr(e.target.value)}/>
            <input placeholder="VatNr" value={customerVatNr} onChange={(e) => setCustomerVatNr(e.target.value)}/>
            <input placeholder="PaymentTerm" value={customerPaymentTerm} onChange={(e) => setCustomerPaymentTerm(e.target.value)}/>
            <button onClick={handleCreateCustomer}>Create test customer</button>
          </div>
        </div>
        
    )
}
