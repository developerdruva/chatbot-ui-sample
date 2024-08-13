import React, { useCallback, useState } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

const MainComponent = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 100)
    }, [salary])
    return (
        <div>
            <Title />
            <Count count={age} text={'Age'} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count count={salary} text={'Salary'} />
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}

export default React.memo(MainComponent)