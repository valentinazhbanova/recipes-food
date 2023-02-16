function MyRecipesComponent({label, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div> 
            <div className="container">
                <img src={image} alt='Food'/>
            </div>
            <div className="container">
                <ul className="list">
                {ingredients.map(ingredient => (
                <li>
                <img className="icon" src='https://cdn-icons-png.flaticon.com/512/17/17153.png?w=740&t=st=1676446599~exp=1676447199~hmac=3c4334a4c9916f0cc1ba1b424232d429be37b370d5b16b43ba3f04ed6376e030' alt='check mark'/>
                {ingredient}</li>
                ))}
                </ul>
            </div>
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
</div>
)
}

export default MyRecipesComponent;