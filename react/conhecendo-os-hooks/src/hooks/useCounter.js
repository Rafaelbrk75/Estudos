import { useState } from 'react'

function getInitialValue() {
    console.log("obtendo valor inicial");
    return 1 + 1;
}

export default function useCounter() {
    const [count, setCount] = useState(() => getInitialValue())

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
        // se eu depender do valor para um calculo e bom usar esse formato de arrow function
    }

    return { count, increment }
}