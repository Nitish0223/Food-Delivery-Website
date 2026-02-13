const ResCard = (props) => {
    const{resData} = props;
    const {imageUrl,name,cuisines,rating,costForTwo,deliveryTime} = resData
    return (
      <div className="res-card">
        <img className="res-image" alt="Restaurant card" src={imageUrl}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{rating} Ratings</h4>
        <h4>{costForTwo + " "} rupees for two</h4>
        <h4>{deliveryTime + " "} min</h4>
       </div>
    );
}


export const LabelResCard = (ResCard) => {
return (props) => {
  return (
    <div className="labelResCard">
    <label id="label">Promoted</label>
    <ResCard {...props}/>
    </div>
  );
}
}
export default ResCard;