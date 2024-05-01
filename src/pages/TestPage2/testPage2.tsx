import { Link } from "react-router-dom";


function TestPage2 () {
    return(
        <div>
            <h1><Link to={"/main"}>메인페이지 이동2</Link></h1>
        </div>
    );
}

export default TestPage2;