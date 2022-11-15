
import React from "react";
import {Box, InputLabel, FormControl} from '@mui/material/';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
const Dropdown = ({ label, value, options, onChange }) => {

    return (
   
       
//         <Box
//         component="form"
//     sx={{
//      display: 'flex',

//     flexDirection: 'row',
//      '& > :not(style)': { m: 2, width: '60ch' },
//   }}
//    noValidate
// >
<label>
   
   {label}
   <FormControl sx={{ minWidth: 180 }}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <select value={value} onChange={onChange}>
   
          {options.map((option) => (
   
            <option value={option.value}>{option.label}</option>
   
          ))}
   
        </select>
        </FormControl>

     </label> 
    );
   
   }
   export default Dropdown;