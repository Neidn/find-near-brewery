const breweryPopup = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.type}</p>
            <p>{props.address}</p>
        </div>
    )
}

export default breweryPopup;
