import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UuidService {
  fib: number[] = this.generateFibonacci();

  constructor() { }

  generateFibonacci() {
    let fib = [];
    for (let i = 0; i <= 16; i++) fib[i] = i === 0 ? 0 : i === 1 ? 1 : fib[i - 2] + fib[i - 1];
    return [...new Set(fib)];
  }

  leadingZero(num: number): string {
    let numStr = Math.abs(num).toString();
    return num < 0 ?
      numStr
      : num < 10 ?
        `00${numStr}`
        : num >= 10 && num < 100 ?
          `0${numStr}`
          : numStr;
  }

  UUID(last: string) {
    let uuids: string[] = [];
    for (let i = 0; i <= this.fib.length; i++) {
      let fibonacci: number = this.fib[i],
        first: string,
        second: string,
        third: string,
        result: string;
      for (let j: number = 999 - fibonacci; j >= 0; j--) {
        first = this.leadingZero(j + fibonacci);
        second = this.leadingZero(j);
        third = this.leadingZero(fibonacci);
        result = parseInt(first) >= parseInt(second) ?
          `${first}${second}${third}`
          : `${second}${first}${third}`;
        uuids.push(result);
      }
    }
    uuids = uuids.sort((a, b) => +a - +b);
    return uuids[uuids.indexOf(last) + 1] || uuids[0];
  }
}
