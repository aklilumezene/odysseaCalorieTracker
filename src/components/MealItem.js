import "./MealItem.css";

const MealItem = () => {
  return (
    <div className="meal-item">
      <div className="meal-item_date">07/6 08:29</div>
      <div className="meal-item_meal">
        <div>Lunch</div>
        <h3>Cookie</h3>
      </div>
      <div className="meal-item_calories">100</div>
      <div className="meal-item_fat">1</div>
      <div className="meal-item_protein">534</div>
      <div className="meal-item_carbs">1</div>
    </div>
  );
};

export default MealItem;
