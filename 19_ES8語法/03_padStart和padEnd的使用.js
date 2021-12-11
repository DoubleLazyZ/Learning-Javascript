const message = 'Hello World'

const newMessage = message.padStart(15, '*').padEnd(20, '-')
console.log(newMessage)

// 案例
const cardNumber = '2312312312314546545456'
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, '*')
console.log(finalCard)
