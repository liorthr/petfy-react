import './card2.css'

const Card2 = () => {
    return (
        <>
            <div className="card">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="grid-item">Item {index + 1}</div>
                ))}
                {/* <div className="grid_items">
                    <div className="grid_item1">  1 </div>
                    <div className="grid_item2">  2 </div>
                    <div className="grid_item3">  3 </div>
                    <div className="grid_item4">  4 </div>
                </div> */}
            </div>
        </>
    );
}

export default Card2;
