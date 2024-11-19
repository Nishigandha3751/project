import Card from "./Card";

const Tours = ({ state, remove }) => {
    console.log(state);
    
    return (
        <div className="tours-container">
            <h1>Plan with Batch35</h1>
            <div className="main">
                {
                    state.map((items) => {
                        return (
                            <Card key={items.id} {...items} remove={remove} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Tours;
