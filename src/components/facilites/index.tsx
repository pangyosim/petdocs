
import BasicButton from "../button/button";
import "../css/facilites.scss";
import img1 from "../../images/facilites/facilites_1.png";
import img2 from "../../images/facilites/facilites_2.png";

function Facilites () {
    const testOnClick = () => {
        alert("testOnClick!!");
    }
    return (
        <>
            <div className="facilites-wrap">
                <div className="facilites-container">
                    <div className="facilites-div">
                        <div className="facilites-title">
                            <div className="facilites-sub-title">
                                <span>Pet-Friendly Facilities</span>
                            </div>
                            <div className="facilites-main-title">
                                <span>애견 동반시설</span>
                            </div>
                        </div>
                        <div className="facilites-content">
                            <div className="facilites-left">
                                <div className="facilites-script">
                                    <span>
                                        반려견과 함께 
                                    </span>
                                    <br />
                                    <span>
                                        입장 가능한
                                    </span>
                                    <br />
                                    <span>
                                        숙소 / 카페 / 식당
                                    </span>
                                </div>
                                <div className="facilites-button">
                                    <BasicButton 
                                        color="c2"
                                        text="자세히 보기"
                                        page="/test"
                                        // data="2"
                                        // width={120}
                                        // height={60}
                                        // radius={20}
                                        // onClick={testOnClick} // 클릭이벤트는 버튼을 사용하는 컴포넌트에서 생성 후 prop으로 넘겨주기
                                    />
                                </div>
                            </div>
                            <div className="facilites-right">
                                <img src={img1} alt="friendly" />
                            </div>
                        </div>
                    </div>

                    <div className="facilites-div">
                        <div className="facilites-title">
                            <div className="facilites-sub-title">
                                <span>Nearby Vet</span>
                            </div>
                            <div className="facilites-main-title">
                                <span>내 근처 동물병원</span>
                            </div>
                        </div>
                        <div className="facilites-content">
                            <div className="facilites-left">
                                <div className="facilites-script">
                                    <span>
                                        나의 위치와
                                    </span>
                                    <br />
                                    <span>
                                        가까운 
                                    </span>
                                    <br />
                                    <span>
                                        동물병원
                                    </span>
                                </div>
                                <div className="facilites-button">
                                    <BasicButton 
                                        color="c2"
                                        text="자세히 보기"
                                        page="/test"
                                    />
                                </div>
                            </div>
                            <div className="facilites-right">
                                <img src={img2} alt="vet" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Facilites;