import { getInvoice } from "../services/getInvoice"
import { ClientView } from "./clientView";
import { CompanyView } from "./companyView";
import { InvoiceView } from "./invoiceView";
import { ListItemView } from "./listItemView";

export const InvoiceApp=()=>{
    const {id, name, client, company, items}=  getInvoice();
    //const{product, price, quantity}= items;

    return(
     <>
     <div className = "card ms-1 me-1">
        <div className = "card-header">
            <h1>Invoice App</h1>
        </div> 
        <div className ="card-body">
            <div className = "container">
                <div className ="row">
                    <InvoiceView title={"Bill"} id={id} name={name}></InvoiceView>
                </div>
                <div className ="row">
                    <div className ="col">
                        <ClientView title={"Client data"} client={client}></ClientView>
                    </div>
                    <div className ="col">
                       <CompanyView title={"Fiscal Data"} company={company}></CompanyView>
                    </div>
                </div>
                <div className ="row">
                    <ListItemView items={items}></ListItemView>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}