// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button, } from 'antd';

// Iteration 2
function FoodBox(props) {
    let calories = props.foods.calories
    let servings = props.foods.servings
    let name = props.foods.name
    let image = props.foods.image

   
  return (
    <Col>
      <Card key={name}
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="danger" onClick={()=> {
           
        }}> Delete </Button>
      </Card>
    </Col>
  )
}


export default FoodBox;