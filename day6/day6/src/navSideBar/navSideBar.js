import './navSideBar.css';
export default function navSideBar() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (<>
        <div className="row">
            <div className="col-12">
                <span style="font-size:30px;cursor:pointer" onClick="openNav()">&#9776; open</span>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </>)
    // updating
}