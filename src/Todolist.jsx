import a, { useState } from 'react';
import Input from './Data';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
var TODO=()=>{

    var id;
    var [current , update]=useState({
        fname:'',
    });
    var InputChange=(event)=>{
var name=event.target.name;
var value=event.target.value;
update(
    (pre)=>
    {
        return{
            ...pre,
            [name]:value,
        }
    }
);
    };
    var [c , u]=useState([]);
    var button=()=>
    {
u(
    (pre)=>{
        return[
            ...pre,
            current,
        ]
    }
);

update(
    {
        fname:'',
    }
)
    };
    var Delete=(index)=>
    {
u(
    (prev)=>{
        return prev.filter((value , indexx)=>{
            return index !== indexx;
        })
    }
);
    }
    var Clea=()=>{
u([]);
    }
    var ValuE=(value , state)=>{
        var S=state.target.name;
u(
     (pre)=>{
    
        return {
    ...pre,
    [S]:value,
        }
     }
);
    };
    return(
        <>
            <div id='q'>
                <div id='w'>
                <div id='e'>
                <h1>Todolist</h1>
                    <Input 
name='fname'
placeholder='Enter Text'
change={InputChange}
value={current.fname}
btn={button}
                    />
                    
                </div>
                
                {
c.map(
    (value ,index)=>{

     id={index};
return <div id='l'>

<h3>{value.fname} </h3>
<div id='qw'>
<EditSharpIcon  id='x' onClick={()=>{ValuE(value)}} />
</div>
<DeleteIcon  id='k' onClick={()=>
{
    Delete(index);

}}

 />
</div>
    }
)
                }
                <br/><br/>
                <div id='nb'>
                <button onClick={Clea}>Clear all</button>
                </div>
                </div>
            </div>
        </>
    );
};
export default TODO;