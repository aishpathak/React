const Shimmer = ()=>{
    return (
        
            <div className="shimmer-card">
                {Array(10).fill("").map((e)=><div className="restaurant-list"></div>)}
        </div>
    );
}

export default Shimmer;