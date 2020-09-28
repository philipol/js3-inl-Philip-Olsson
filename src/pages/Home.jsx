import React, {useState, useEffect} from 'react';
import UserInfo from '../components/UserInfo';
import {Link} from 'react-router-dom';
import UserKit from '../data/UserKit';
import styled from 'styled-components';


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
            <GetCustomerContainer>
                <GetCustomerBtn onClick={fetchClients}>Get my customers</GetCustomerBtn>
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

            </GetCustomerContainer>
          <CreateCustomerForm>
            <Input placeholder="Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
            <Input placeholder="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}/>
            <Input placeholder="PhoneNr" value={customerPhoneNr} onChange={(e) => setCustomerPhoneNr(e.target.value)}/>
            <Input placeholder="Website" value={customerWebsite} onChange={(e) => setCustomerWebsite(e.target.value)}/>
            <Input placeholder="Reference" value={customerReference} onChange={(e) => setCustomerReference(e.target.value)}/>
            <Input placeholder="OrganisationNr" value={customerOrganisationNr} onChange={(e) => setCustomerOrganisationNr(e.target.value)}/>
            <Input placeholder="VatNr" value={customerVatNr} onChange={(e) => setCustomerVatNr(e.target.value)}/>
            <Input placeholder="PaymentTerm" value={customerPaymentTerm} onChange={(e) => setCustomerPaymentTerm(e.target.value)}/>
            <CreatCustomerBtn onClick={handleCreateCustomer}>Create test customer</CreatCustomerBtn>
          </CreateCustomerForm>
        </div>
        
    )
}
const GetCustomerContainer = styled.div`
border:1px solid black;
background-color: lightgray;
padding: 2%;
place-items: center;
`

const GetCustomerBtn = styled.button`
    border-radius: 15px;

`

const CreateCustomerForm = styled.div`
margin-top: 25px;
width: 70%;
margin-left: 15%;
display:grid;
grid-template-rows: 1fr;
gap: 5px;
border-radius: 5px;
border: 1px solid black;
padding: 3%;
`

const Input = styled.input`
border: 1px solid gray;
`

const CreatCustomerBtn = styled.button`
border-radius: 15px;
`

