import {Component} from "react";

export default class example extends Component {
    constructor() {
        super();
        this.state = {
            // truyền vào là tập hợp các đối tượng
        }
    }

// constructor để tạo state  chứa biến hứng dữ liệu

    abc = () => {
        this.setState((state) => {
            return {}
        })
    }

// abc là function arrow dc tạo khi sử dụng render

    componentDidMount() {
        //sau khi đc contructor và render thì đc chạy
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
    }

    // các phương thức đc hỗ trợ tạo sẵn và kết hợp với vòng đời của commponnent

    render() {
        return (
            <>
                {/* sử dụng các thẻ trong html*/}
                {/* add event dùng hàm abc*/}
            </>
        )
    }

// render để tạo ra 1 đoạn html
}