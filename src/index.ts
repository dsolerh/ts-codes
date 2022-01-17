import { sealed } from './sealed-class.decorator';

function first() {
  console.log('first(): creates the function');

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): is called');
  };
}

function second() {
  console.log('second(): creates the function');

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('second(): is called');
  };
}

class ExampleClass {
  constructor() {
    console.log('ExampleClass: is created');
  }
  @first()
  @second()
  /**
   * exampleMethod
   */
  public exampleMethod() {
    console.log('exampleMethod(): is called');
  }
}

const example = new ExampleClass();
example.exampleMethod();

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}

@sealed
@reportableClassDecorator
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport('Needs dark mode');
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:

console.log((bug as any).reportingURL);
