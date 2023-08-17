import {Component} from "react";

class demo extends Component {
    constructor() {
        super();
        this.state = {
            obj: {
                name: "a",
                age: 10
            },
            x: 0, y: 0, rs: 0
        }
    }
    handleChange=(event)=>{
        let {name,value}=event.target;
        this.setState({[name]:value})
        // [] name để nó là ký chứ ko phải là 1 chuỗi string
    }



    render() {
        return (
            <>
                <input type="text" name="x"  onChange={(event) => {
                    this.handleChange(event);
                    // gọi 1 function trong constructor
                }}/><br/>
                <input type="text" onChange={(event) => {
                    this.setState({y: event.target.value})
                }}/><br/>
                <button onClick={() => {
                    this.setState({rs: +this.state.x + +this.state.y})
                }
                }>+
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x - +this.state.y})
                }
                }>-
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x * +this.state.y})
                }
                }>*
                </button>
                <button onClick={() => {
                    this.setState({rs: +this.state.x / +this.state.y})
                }
                }>/
                </button><br/>
                <h2>{this.state.rs}</h2>
            </>
        )
    }
}

export default demo;


// let list=[
//     {name:"a",age:21},
//     {name:"b",age:11},
//     {name:"c",age:16},
//     {name:"d",age:51}
// ];
