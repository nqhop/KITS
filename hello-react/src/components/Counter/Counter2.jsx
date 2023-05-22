import { useEffect, useState } from "react";
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

    console.log('re-render');
    return (
        <div>
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