import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import { useState } from 'react';
import Search from './component/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    const updatedFoodData = [...foodData, newFood];
   
      setFood(updatedFood);
      setFoodData(updatedFoodData);
    }

    const filterFoodList = (str) => {
      let filteredFood

      if (str === "") {
        filteredFood = foodData;
      } else {
        filteredFood = foodData.filter((foodFilter)=> {
         return foodFilter.name.toLowerCase() === str.toLowerCase();
        })
      }

      setFood(filteredFood)
    }



  return (
    <div className="App">
        <AddFoodForm addNewFood={addNewFood} />
      <Button> Hide Form / Add New Food </Button>
     <Search filteredFood={filterFoodList}/>
      <Divider>Food List</Divider>
      {food.map((food1) => {
        return (
          
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <FoodBox foods={food1} />
          </Row>
        );
      })}
      </div>
  );
}

export default App;
