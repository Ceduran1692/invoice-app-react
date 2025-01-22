import { getInvoice } from "../services/getInvoice"

export const InvoiceApp=()=>{
    const {id, name, client, company, items}=  getInvoice();
    const {country, street, city}= client.address;
    const{product, price, quantity}= items;

    return <>
        <h1>Invoice App</h1>

        <h2>Bill</h2>
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
        </ul>
        <h3>Client data</h3>
        <ul>
            <li>
                Client: {client.name +' '+ client.lastname} 
            </li>
            <li>
                 Address:
                <ul>
                    <li>
                        Country: {country}
                    </li>
                    <li>
                        City: {city}
                    </li>
                    <li>
                        Street: {street}
                    </li>
                </ul>
            </li>
        </ul>
        <h3>Items</h3>
        
        {items.map((element,index) => (
            <ul key={index}>
                <li>
                    product: {element.product}
                </li>
                <li>
                    price: {element.price}
                </li>
                <li>
                    quantity: {element.quantity}
                </li>
            </ul>
        ))}

        <h2>Fiscal Data</h2>
        <ul>
            <li>
                Company: {company.name}
            </li>
            <li>
                Fiscal number: {company.fiscalNumber}
            </li>
        </ul>
    </>
}