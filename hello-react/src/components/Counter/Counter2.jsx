import { useEffect, useState } from "react";
import styled from "styled-components";
export const Counter2 = ({ name }) => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log('useEffect');
        setTimeout(()=>{setLoading(false)}, 3000);
    }, [loading, count]);

    const onDecsease = () => {
        setCount(count - 1);
    }

    const onIncsease = () => {
        setCount(count + 1);
    }

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `;

    console.log('re-render');
    return (
        <div>
            <Title> Hello </Title>
            {
                loading?
                    <div>Loadding2</div> :
                    <>
                    <button className="counter-button" onClick={onDecsease}>-</button>
                    <span>{count}</span>
                    <button className="counter-button" onClick={onIncsease}>+</button>
                    </>
            }
            
        </div>
    )
}