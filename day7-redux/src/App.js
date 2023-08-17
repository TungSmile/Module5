import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const x = useSelector(state => {
        console.log(state)
        return state
    })
    return (
        <>{x}
            <button onClick={ ()=>{
                dispatch(
                    {
                        type:'click',
                        payload:{
                            name:"b"
                        }
                    }
                )
            }



            }></button>
        </>
    );
}

export default App;
