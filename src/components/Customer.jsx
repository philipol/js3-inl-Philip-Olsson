import React, {useEffect, useState} from 'react';
import UserKit from '../data/UserKit';
import {  useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';


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
            console.log(data)
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
        <DetailContainer>
            {customerDetail &&    
                <span> 

                    <CustomerDetails>Id: {customerDetail.id}</CustomerDetails>
                    <CustomerDetails>Name: {customerDetail.name}</CustomerDetails>
                    <CustomerDetails>Email: {customerDetail.email}</CustomerDetails>
                    <CustomerDetails>PhoneNumber: {customerDetail.phoneNumber}</CustomerDetails>
                    <CustomerDetails>Website: {customerDetail.website}</CustomerDetails>
                    <CustomerDetails>Reference: {customerDetail.reference}</CustomerDetails>
                    <CustomerDetails>OrganisationNr: {customerDetail.organisationNr}</CustomerDetails>
                    <CustomerDetails>VatNr: {customerDetail.vatNr}</CustomerDetails>
                    <CustomerDetails>PaymentTerm: {customerDetail.paymentTerm}</CustomerDetails>
    
                </span>
            }

            <button onClick={()=>delCustomer(id)}>Delete</button>
        </DetailContainer>
    )
  }

const DetailContainer = styled.div`
width: 60%;
margin-left: 20%;
padding:3%;
margin-top: 5%;
border:1px solid black;
`

const CustomerDetails = styled.p`
border: 1px solid black;
padding: 5%;
`
