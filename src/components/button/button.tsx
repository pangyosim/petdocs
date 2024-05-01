import React from 'react';
import styles from '../css/button.module.scss';
import { useNavigate } from 'react-router-dom';

/*
# 버튼 사용 방법
<BasicButton 
    color="c1"              // 필수
    text="자세히"           // 필수
    page="/test"            // 필수
    data="1"                // 필수
    width={123}             // 생략 가능
    height={45}             // 생략 가능
    onClick={testOnClick}   // 페이지 이동만 할 때는 생략 가능
/>
# 주의사항
- ex) data="" 와 같이 사용하지 않더라도 예시와 같이 작성해야함

# color 
- c1~c4 중 원하는 색 선택 >> " . " 없이 c1 과 같이 작성
- .c1 : #A79277
- .c2 : #D1BB9E
- .c3 : #EAD8C0
- .c4 : #FFF2E1

# text
- 버튼 내 텍스트 설정

# page 
- 원하는 이동 경로가 있을 때 " / " 포함 하여 작성
- onClick 을 넘겨서 사용할 때는 "" 과 같이 작성해도 무관
- ex) "/test" || ""

# data 
- 자유롭게 사용
- ex) 페이지 이동시 / 게시판 수정 등 

# width & height
- 원하는 w/h 설정
- 단위 없이 숫자만 입력
- 단위 : px
- 생략 가능 (생략시 : width: 180px; height: 80px;)

# radius
- 원하는 border-radius 설정
- 단위 없이 숫자만 입력
- 단위 : px
- 생략 가능 (생략시 : 20px;)

# onClick
- 클릭이벤트는 버튼을 사용하는 컴포넌트에서 생성 후 prop으로 넘겨주기
- 페이지 이동만 할 때는 생략 가능
- onClick 을 넘기게 되면 page는 작동하지 않으므로 굳이 작성할 필요 없음

*/


interface BasicButtonProps {
    color: string;
    text: string;
    page: string;
    data?: any;
    width?: number;
    height?: number;
    radius?: number;
    onClick?: () => void;
}


const BasicButton: React.FC<BasicButtonProps> = ({ color, text, page, data, width, height, radius, onClick }) => {
    const navigate = useNavigate();
    const click = () => {
        if (onClick) {
            onClick();
        } else if (data !== undefined) {
            navigate(`${page}/${data}`);
        } else {
            navigate(page);
        }
    };
    

    return (
        <button 
            className={`${styles.button} ${styles[color]}`} 
            onClick={click}
            style={{ width: width, height: height, borderRadius:radius }}
        >
            {text}
        </button>
    );

}

export default BasicButton;
