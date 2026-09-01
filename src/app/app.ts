```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  firstNumber: number = 0;
  secondNumber: number = 0;

  operation: string = '+';

  result: number = 0;
  
  errorMessage: string = '';


  // Calculate button click - PRODUCTION VERSION: Only Addition for Positive Integers
  calculate(): void {
    this.errorMessage = '';

    // Validate positive integers only
    if (this.firstNumber < 0 || this.secondNumber < 0) {
      this.errorMessage = 'Error: Only positive integers are supported in this version';
      this.result = 0;
      return;
    }

    if (this.operation === '+') {
      this.result = this.firstNumber + this.secondNumber;
    } else {
      this.errorMessage = 'Error: Only addition is supported in this version';
      this.result = 0;
    }
  }


  // + or - button select panna
  setOperation(operation: string): void {
    this.operation = operation;
    this.errorMessage = '';
  }


  // Reset button click panna
  reset(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operation = '+';
    this.result = 0;
    this.errorMessage = '';
  }

}
```
