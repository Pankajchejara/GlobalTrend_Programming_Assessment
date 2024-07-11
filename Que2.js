// Simple Arithmetic Expression Evaluator

function calculateSimpleExpression(expression) {
    let tokens = expression.split(/([+-])/);
    let result = 0;
    let currentOperator = '+';

    tokens.forEach(token => {
        if (token === '+' || token === '-') {
            currentOperator = token;
        } else {
            if (currentOperator === '+') {
                result += Number(token);
            } else if (currentOperator === '-') {
                result -= Number(token);
            }
        }
    });

    return result;
}


console.log(calculateSimpleExpression("5+2")); 
console.log(calculateSimpleExpression("5-2")); 
