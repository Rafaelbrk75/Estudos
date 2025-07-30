const media = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Aritimetica Simples: ${media(3, 6, 10, 9)}`);

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, wheight }) => accum + (number * (wheight ?? 1)));
    const wheightSum = entries.reduce((accum, entry) => accum + (entry.wheight ?? 1), 0)
    return sum / wheightSum
}

console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, wheight: 3 },
    { number: 7, wheight: 2 },
    { number: 12, wheight: 5 },
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(orderedNumbers.length / 2);
    if (orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    } 
    const firstMedian = orderedNumbers[middle - 1];
    const seccondMedian = orderedNumbers[middle];
    return media(firstMedian, seccondMedian);
}

console.log(`Mediana: ${median(2, 5, 99, 4, 5, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0] 
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);