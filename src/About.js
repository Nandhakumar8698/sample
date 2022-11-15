import React from "react";
import { Box, TextField, Typography} from '@mui/material/';
import { useState } from 'react';
import Drop from "./Drop";
const About = (props) => {
  const [age, setAge] = useState("");
  const [editing, setEditing] = useState(false);
  const [update, setUpdate] = useState(age);
  const [updated, setUpdated] = useState(props.name);
  const options = [

    { label: 'Fruit', value: 'fruit' },
 
    { label: 'Vegetable', value: 'vegetable' },
 
    { label: 'Meat', value: 'meat' },
 
  ];
  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  const handleClick = event => {
    event.preventDefault();
    setEditing(false);
    if (!age && !props.name) return alert('enter a values');
    if (!props.name) return alert('enter a name');
    setUpdated(props.name);
    setEditing(true);
    setEditing(false);
    if (!age) return alert('enter a age');
    setUpdate(age);
    setEditing(true);
  };
 return (
    <div>
      <Box
        component="form"
    sx={{
     display: 'flex',

    flexDirection: 'row',
     '& > :not(style)': { m: 1, width: '20ch' },
  }}
   noValidate
   autoComplete="off"
>
        <TextField id="outlined-basic" label="age" variant="outlined"
          //error={age.length === 0}
          //helperText={!age.length ? 'name is required' : ''}
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }} />
      </Box>
      <Drop

// label="What do we eat?"
options={options}
value={value}
onChange={handleChange}
/>    
      <button onClick={handleClick}>Click</button>
      {
        editing && props.name && age ? (<div><Typography><>Name : {updated}</>
        <><br />AGE    : {update}</><><br />F.Name : {value}</></Typography></div>) :( <div></div>)
       }
      


    </div>
  );
}
export default About;