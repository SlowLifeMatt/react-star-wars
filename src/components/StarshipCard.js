const StarshipCard = ({name, model, manufacturer, cost_in_credits}) => {

    return (
        <div className="shipcard">
        <h1 className="ship">Name: {name}</h1>
        <h3>Model: {model}</h3>
        <h3>Manufacturer: {manufacturer}</h3>
        <h3>Cost: {cost_in_credits}</h3>
        </div>
    )
}

export default StarshipCard