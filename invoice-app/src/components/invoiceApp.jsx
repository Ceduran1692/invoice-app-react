import { getInvoice } from "../services/getInvoice"

export const InvoiceApp=()=>{
    const {id, name, client, company, items}=  getInvoice();
    const {country, street, city}= client.address;
    const{product, price, quantity}= items;

    return(
     <>
     <div class= "card ms-1 me-1">
        <div class= "card-header">
            <h1>Invoice App</h1>
        </div> 
        <div class="card-body">
            <div class= "container">
                <div class="row">
                    <h2 class="card-title">Bill</h2>
                    <ul class="list-group">
                        <li class="list-group-item">id: {id}</li>
                        <li class="list-group-item">name: {name}</li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col">
                        <h3 class="card-title">Client data</h3>
                        <ul class="list-group">
                            <li class="list-group-item active">
                                Client: {client.name +' '+ client.lastname} 
                            </li>
                            <li class="list-group-item">
                                Address:
                                <ul >
                                    <li >
                                        Country: {country}
                                    </li>
                                    <li>
                                        City: {city}
                                    </li>
                                    <li >
                                        Street: {street}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2 class="card-title">Fiscal Data</h2>
                        <ul class="list-group">
                            <li class="list-group-item active">
                                Company: {company.name}
                            </li>
                            <li class="list-group-item">
                                Fiscal number: {company.fiscalNumber}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <h3 class="card-title text-center" >Items</h3>
                    <div class="container">
                        <div class="border-round">
                            <table class="table border rounded">
                                <thead class="table-info">
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {items.map((element,index) => (
                                        <tr key={index}>
                                            <td>
                                                {element.product}
                                            </td>
                                            <td>
                                                {element.price}
                                            </td>
                                            <td>
                                                {element.quantity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>                            
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}