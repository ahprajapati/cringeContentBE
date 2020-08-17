export const getRandomNumber =  (from, to, prev) => {
    const newNumber = parseInt(Math.random() * (from - to) + to,10)
    return newNumber !== prev ? newNumber : getRandomNumber(from,to,prev)
}; 
