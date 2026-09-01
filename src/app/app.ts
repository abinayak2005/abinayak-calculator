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


  // Calculate button click pannumbothu idhu run aagum
  calculate(): void {

    if (this.operation === '+') {

      this.result = this.firstNumber + this.secondNumber;

    } else if (this.operation === '-') {

      this.result = this.firstNumber - this.secondNumber;

    }

  }


  // + or - button select panna
  setOperation(operation: string): void {

    this.operation = operation;

  }


  // Reset button click panna
  reset(): void {

    this.firstNumber = 0;
    this.secondNumber = 0;

    this.operation = '+';

    this.result = 0;

  }

}
```
