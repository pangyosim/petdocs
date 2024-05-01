import Facilites from "../../components/facilites";
import Navbar from "../../components/navbar";


function MainPage () {
    return(
        <div>
            <Navbar/>
            {/* 공백용 div */}
            <div style={{height:"500px"}}></div> 
            <Facilites/>
        </div>
    );
}

export default MainPage;