import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const x = useSelector(state => {
            return state
        }
    )

    const deposit = () => {
        dispatch({
            type: 'increment',
            payload: 10
        })
    }

    const withdraw=() =>{
        dispatch({
            type: 'decrement',
            payload: 10
        })
    }


    return (
        <>
            <h1>{x}</h1>
            <button onClick={deposit}>deposit</button>
            <button onClick={withdraw}>withdraw</button>
        </>
    );
}

export default App;
