import "./MealItem.css";

const MealItem = () => {
  let mealDate = new Date(2021, 5, 8, 4, 7, 0, 0);
  let regularMeal = "Lunch";
  let foodServed = "Cookie";
  let calories = 100;
  let fat = 1;
  let protein = 534;
  let carbs = 1;



  
    return (
    <div className="meal-item">
      <div className="meal-item_date">{mealDate}</div>
      <div className="meal-item_meal">
        <div>{regularMeal}</div>
        <h3>{foodServed}</h3>
      </div>
      <div className="meal-item_calories">{calories}</div>
      <div className="meal-item_fat">{fat}</div>
      <div className="meal-item_protein">{protein}</div>
      <div className="meal-item_carbs">{carbs}</div>
    </div>
  );
};

export default MealItem;
