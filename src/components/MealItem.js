import "./MealItem.css";

const MealItem = (props) => {
  

  return (
    <div className="meal-item">
      <div className="meal-item_date">{props.date.toISOString()}</div>
      <div className="meal-item_meal">
        <h3>{props.regularMeal}</h3>
        <div>{props.foodServed}</div>
      </div>
      <div className="meal-item_calories">{props.calories}</div>
      <div className="meal-item_fat">{props.fat}</div>
      <div className="meal-item_protein">{props.protein}</div>
      <div className="meal-item_carbs">{props.carbs}</div>
    </div>
  );
};

export default MealItem;
