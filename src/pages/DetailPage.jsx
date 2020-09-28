import React from 'react'

export default function DetailPage() {
    return (
        <div>
            {
                customerDetails.map((customer, index) => {
                //console.log(customerList[i])
                //console.log(i)
                return (
                    <Customer key={index}
                    >
                        
                        {customer.website}
                        {customer.reference}
                        {customer.organisationNr}
                        {customer.vatNr}
                        {customer.paymentTerm}
                    </Customer>)
                })
            }
        </div>
    )
}
