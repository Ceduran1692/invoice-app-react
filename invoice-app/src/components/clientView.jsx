import PropTypes from 'prop-types';

export const ClientView= ({title, client}) =>{
    const {country, street, city}= client.address;

    return(
        <>
            <h3 className="card-title">{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">
                    Client: {client.name +' '+ client.lastname} 
                </li>
                <li className="list-group-item">
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
        </>
    )
}

ClientView.propTypes={
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}