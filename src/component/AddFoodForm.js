// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const { addNewFood } = props;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addNewFood(newFood);

    console.log('Submitted: ', newFood);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} name="name" type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} name="image" type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} name="calories" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} name="servings" type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
