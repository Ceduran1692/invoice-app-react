import PropTypes from'prop-types';

export const CompanyView=({title, company}) =>{
    return (
        <>
            <h2 className ="card-title">{title}</h2>
            <ul className ="list-group">
                <li className ="list-group-item active">
                    Company: {company.name}
                </li>
                <li className ="list-group-item">
                    Fiscal number: {company.fiscalNumber}
                </li>
            </ul>
        </>
    )

}

CompanyView.propTypes={
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
}