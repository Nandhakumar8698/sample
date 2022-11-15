import './index.css';
import {Box, Link} from '@mui/material/';
//import Link from '@mui/material/Link';
const AppHeader = () =>{
    return(
        <div>
     <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >

        <Link style={{ marginLeft: '3rem' }} href="/about">About</Link>&nbsp;&nbsp;
        <Link href="/home">Home</Link>
       </Box>
       </div>
 );
}
export default AppHeader;