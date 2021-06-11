import MealItem from "./components/MealItem";

function App() {
  const meals = [
    {
      date: new Date(2021, 5, 10, 17, 45, 0, 0),
      meal: "Breakfast",
      food: "Cookie",
      calories: 100,
      fat: 1,
      protein: 534,
      carbs: 1,
    },
    {
      date: new Date(2021, 5, 12, 17, 45, 0, 0),
      meal: "Lunch",
      food: "Donut",
      calories: 100,
      fat: 232,
      protein: 32,
      carbs: 1,
    },
    {
      date: new Date(2021, 5, 10, 17, 45, 0, 0),
      meal: "Dinner",
      food: "Hamburger",
      calories: 242.5,
      fat: 11.8,
      protein: 15.2,
      carbs: 17.9,
    },
    {
      date: new Date(2021, 5, 10, 8, 45, 0, 0),
      meal: "Breakfast",
      food: "Hotdog",
      calories: 325.4,
      fat: 29.7,
      protein: 11.7,
      carbs: 2.7,
    },
    {
      date: new Date(2021, 5, 9, 12, 10, 0, 0),
      meal: "Lunch",
      food: "Omelette",
      calories: 176.3,
      fat: 13.9,
      protein: 11.7,
      carbs: 0.8,
    },
    {
      date: new Date(2021, 5, 9, 20, 0, 0, 0),
      meal: "Dinner",
      food: "Chicken",
      calories: 222.6,
      fat: 12.9,
      protein: 23.7,
      carbs: 0, 
    }
  ];

  return (
    <div className="App">
      <h1>Hello React</h1>
      <MealItem
        date={meals[0].date}
        meal={meals[0].meal}
        food={meals[0].food}
        calories={meals[0].calories}
        fat={meals[0].fat}
        protein={meals[0].protein}
        carbs={meals[0].carbs}
      />
      <MealItem
        date={meals[1].date}
        meal={meals[1].meal}
        food={meals[1].food}
        calories={meals[1].calories}
        fat={meals[1].fat}
        protein={meals[1].protein}
        carbs={meals[1].carbs}
      />
      <MealItem
        date={meals[2].date}
        meal={meals[2].meal}
        food={meals[2].food}
        calories={meals[2].calories}
        fat={meals[2].fat}
        protein={meals[2].protein}
        carbs={meals[2].carbs}
      />
      <MealItem
        date={meals[3].date}
        meal={meals[3].meal}
        food={meals[3].food}
        calories={meals[3].calories}
        fat={meals[3].fat}
        protein={meals[3].protein}
        carbs={meals[3].carbs}
      />
      <MealItem
        date={meals[4].date}
        meal={meals[4].meal}
        food={meals[4].food}
        calories={meals[4].calories}
        fat={meals[4].fat}
        protein={meals[4].protein}
        carbs={meals[4].carbs}
      />
    </div>
  );
}

export default App;
