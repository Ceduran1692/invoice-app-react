import PropTypes from 'prop-types';

export const ListItemView=({items})=> {
    return(
        <>
        <h3 className ="card-title text-center" >Items</h3>
        <div className ="container">
            <div className ="border-round">
                <table className ="table border rounded">
                    <thead className ="table-info">
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
        </>
    )

}

ListItemView.propTypes={
    items: PropTypes.array.isRequired
}