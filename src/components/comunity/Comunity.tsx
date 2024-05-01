import "../css/comunity.scss";

const Comunity = () => {
    return (
        <div className="comunity-container">
            <div className="comunity-comu">
                <div className="comunity-comu-title">
                    <p className="comunity-comu-title-1">HOW WE WORK</p>
                    <p className="comunity-comu-title-2">반려동물 커뮤니티</p>
                </div>
                <div className="comunuty-comu-row">
                    <div className="comunuty-comu-1">
                        <img src="반려동물소식.png" alt="반려동물 소식" />
                        <div className="pet-news">반려동물 소식</div>
                        <div className="small-text">작은 글자들</div>
                    </div>
                    <div className="comunuty-comu-2">
                        <img src="반려동물지식.png" alt="반려동물 지식/자유게시판" />
                        <div className="pet-news">반려동물 지식/자유게시판</div>
                        <div className="small-text">작은 글자들</div>
                    </div>
                    <div className="comunuty-comu-3">
                        <img src="애견교배.png" alt="애견 교배" />
                        <div className="pet-news">애견 교배</div>
                        <div className="small-text">작은 글자들</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comunity;