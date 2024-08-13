import React, { useMemo, useState } from 'react'

const ExampleOnUseMemo = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const handleclick1 = () => {
        setCounter1(counter1 + 1);
    };
    const handleclick2 = () => {
        setCounter2(counter2 + 1);
    };
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return counter1 % 2 === 0;
    }, [counter1])
    return (
        <div className="">
            {counter1}
            <button onClick={handleclick1}>counter1 </button>
            <br />
            <br />
            <button onClick={handleclick2}>counter2 </button>
            {counter2}
            <br />
            <span> {isEven ? "Even" : "Odd"}</span>
        </div>
    );
}

export default ExampleOnUseMemo

