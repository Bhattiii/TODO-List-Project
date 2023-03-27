import a from 'react';
import TODO from './Todolist';
import './Css.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddIcon from '@material-ui/icons/Add';
var Input=(props)=>{

return(
    <>
<input id='r' type={Text} placeholder={props.placeholder} name={props.name}  onChange={props.change} value={props.value} />
  <span> 
<AddIcon id='u' onClick={props.btn}></AddIcon>
</span>
    </>
);
};
export default Input;