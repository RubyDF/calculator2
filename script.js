const inputField = document.querySelector('.input-field')
const clearBtn = document.querySelector('.clear')
const symbols = document.querySelectorAll('.symbol')

const operatorList = ['/', '*', '-', '+', '=']
let value1 = ''
let currentOperator = ''
let value2 = ''
let answer

clearBtn.addEventListener('click', (event) => {
  inputField.textContent = ''
  value1 = ''
  value2 = ''
  currentOperator = ''
  answer = ''
})

symbols.forEach((symbol) => {
  symbol.addEventListener('click', (event) => {
    // if input symbol is "=" do operation, and append answer into inputField
    if (symbol.value === "=") {
      if (currentOperator === operatorList[0]) {
        answer = Number(value1) / Number(value2)
      } else if (currentOperator === operatorList[1]) {
        answer = Number(value1) * Number(value2)
      } else if (currentOperator === operatorList[2]) {
        answer = Number(value1) - Number(value2)
      } else if (currentOperator === operatorList[3]) {
        answer = Number(value1) + Number(value2)
      }
      inputField.textContent = answer
    }

    // if symbol value is in operator list, add it to currentOperator
    if (operatorList.includes(symbol.value) && symbol.value !== "=") {
      currentOperator = symbol.value
      inputField.textContent = ''
    }

    // if we don't have operator, we're still taking in value 1
    // character in value 1 cannot be operator symbol
    if (!currentOperator && !operatorList.includes(symbol.value)) {
      value1 = value1 + symbol.value
      inputField.textContent = value1
    } else if (currentOperator && !operatorList.includes(symbol.value)) {
      value2 = value2 + symbol.value
      inputField.textContent = value2
    }
  })
})
