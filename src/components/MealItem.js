import "./MealItem.css";

const MealItem = (props) => {
  const dispDate = props.date.toLocaleString("en-US", {hour: "2-digit", minute: "2-digit", hour12: false});

  return (
    <div>
      <h3>{props.meal}</h3>
      <div className = "test-class"><div>{"Time"}</div> <div>{"Food Item"}</div> <div>{"calories"}</div><div>{"fat"}</div><div>{"protein"}</div><div>{"carbs"}</div></div>
<div className="meal-item">
      <div className="meal-item_date">{dispDate}</div>
      <div className="meal-item_meal">
        <div>{props.food}</div>
      </div>
      <div className="meal-item_calories">{props.calories}</div>
      <div className="meal-item_fat">{props.fat}</div>
      <div className="meal-item_protein">{props.protein}</div>
      <div className="meal-item_carbs">{props.carbs}</div>
    </div>
    </div>
    
  );
};

export default MealItem;
