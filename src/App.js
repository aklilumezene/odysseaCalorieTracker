import MealItem from "./components/MealItem"

function App() {
  let mealDate = new Date(2021, 5, 8, 4, 7, 0, 0);
  let regularMeal = "Lunch";
  let foodServed = "Cookie";
  let calories = 100;
  let fat = 1;
  let protein = 534;
  let carbs = 1;
  
  return (
    <div className="App">
    <h1>Hello React</h1>
    <MealItem 
    date = {mealDate}
    regularMeal = {regularMeal}
    foodServed = {foodServed}
    calories = {calories}
    fat = {fat}
    protein = {protein}
    carbs = {carbs}

    />
    </div>
  
  );
}

export default App;
