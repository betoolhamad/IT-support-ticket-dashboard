import "./Statcard.css";

function Statcard({title , value}) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p className="card-number">{value}</p>

        </div>
    )
}

export default Statcard