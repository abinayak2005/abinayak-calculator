document.addEventListener('DOMContentLoaded', () => {
    const previousOperandTextElement = document.querySelector('.previous-operand');
    const currentOperandTextElement = document.querySelector('.current-operand');
    const historyTextElement = document.querySelector('.history');
    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, historyTextElement);

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;
            const buttonClass = button.className;
            
            if (buttonText === 'AC') {
                calculator.clear();
            } else if (buttonText === 'DEL') {
                calculator.delete();
            } else if (buttonText === '=') {
                calculator.compute();
            } else if (buttonText === '%') {
                calculator.percentage();
            } else if (buttonText === '±') {
                calculator.negate();
            } else if (buttonText === '√') {
                calculator.squareRoot();
            } else if (['+', '-', '×', '÷', '%', '^'].includes(buttonText)) {
                calculator.chooseOperation(buttonText);
            } else {
                calculator.appendNumber(buttonText);
            }
            
            calculator.updateDisplay();
        });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            calculator.appendNumber(e.key);
        } else if (e.key === '+' || e.key === '-') {
            calculator.chooseOperation(e.key);
        } else if (e.key === '*') {
            calculator.chooseOperation('×');
        } else if (e.key === '/') {
            e.preventDefault();
            calculator.chooseOperation('÷');
        } else if (e.key === '%') {
            calculator.percentage();
        } else if (e.key === '^') {
            calculator.chooseOperation('^');
        } else if (e.key === 'Enter' || e.key === '=') {
            e.preventDefault();
            calculator.compute();
        } else if (e.key === 'Backspace') {
            calculator.delete();
        } else if (e.key === 'Escape') {
            calculator.clear();
        }
        calculator.updateDisplay();
    });
});
