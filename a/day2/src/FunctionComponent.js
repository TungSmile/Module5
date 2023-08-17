import {useState} from "react";

export default function ExampleFunctionComponent() {
    let [list, setList] = useState([{
        name: 'A',
        age: 19
    }, {
        name: 'B',
        age: 20
    }]);
    let [name, setName] = useState('');
    let [age, setAge] = useState('');

    // với function component thì ko dùng state mà dùng tạo biến và dùng useState;

    return (
        <>{list.map((item, ind) => (
            <h2 key={ind}>{item.name}, {item.age}</h2>
        ))}
            <input type="text" value={name} onChange={(e)=> {
                setName(e.target.value)
            }}/>
            <input type="text" value={age} onChange={(e)=> {
                setAge(e.target.value)
            }}/>
            <button onClick={()=> {
                setList([...list, {
                    name: name,
                    age: age
                }])
                setName('');
                setAge('');
            }}>Add</button>
        </>
    );

    // dùng return thay cho function render;
    // ko có các function thể hiện life cycle như với class component;
}