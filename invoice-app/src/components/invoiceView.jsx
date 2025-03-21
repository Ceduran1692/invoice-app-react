import PropTypes from 'prop-types';

export const InvoiceView= ({title, id, name}) =>{

    return (
        <>
            <h2 className="card-title">{title}</h2>
            <ul className="list-group">
                <li className="list-group-item">id: {id}</li>
                <li className="list-group-item">name: {name}</li>
            </ul>
        </>
    )
}

InvoiceView.propTypes ={
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}