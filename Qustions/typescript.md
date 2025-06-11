# Typescript

### Typescript Fundamentals

**Basic Types**: number, string, boolean, array, enum, any, void, null, undefined

```
let color: string = 'blue'

let list1: numbner[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

enum Color {Red, Gren, Blue}
let c: Color = Color.Green
```

**Type Annotations:** Explicitly declaring types for variables, parameters, and return values

```
let name: string = 'John'

function add(x: number, y: number): number {
  return x + y
}

let point: {x: number, y: number} = {x: 10, y: 20}
```

**Interfaces:** Defining object shapes and contracts

```
interface User {
  id: number;
  name: string;
  age?: number;
  readonly createdAt: Date
}

let newUser: User = {
  ...
}

interface Employee extends User {
  department: string
}

interface Calculator {
  add(x: number, y: number): number;
}
```

**Classes:** Object oriented programming with Typescript

- like classes in React with constructor

**Generics:** Generics allow you to create reusable components that work with multiple types while maintaining type safety. They're like "type variables" that get filled in when the generic is used

- "type variables" placeholders that get specified when you use a function, class or interface

```
function identityh<T>(value: T): T {
  return value
}

const result1 = identity<number>(42)
const result2 = identity<string>('hello')

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2]
}

const createPair<string, number>('hello', 42)
```

**Type Assertions:** Telling the compiler you know more about a type than it does

```
<!-- Type assertion using angle brackets -->
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

<!-- Type assertion using 'as' syntax (preffered in JSX) -->
let otherValue: any = 'another string'
let otherLength: number = (otherValue as string).length
```

**Union Types:** type 1 OR type 2

```
type StringOrNumber = string | number
```

**Intersection Types:** type 1 AND type 2

```
interface Printabnle {
  print(): void;
}

interface Logable {
  log(message: string): void
}

type PrintableAndLoggable = Printable & Loggable

const obj: PrintableAndLogable = {
  print() {
    console.log('Printing')
  },
  log(message: string) {
    console.log(message)
  }
}
```

### What are the benefits of Typescript?

- Static type checking, errors caught at compile-time rather than runtime
- Enhanced IDE support - better autocompletion and refactoring
- Self-documenting code
- Easier to Maintain
- Modern JS features
- Easier to refactor

### What are the differences between `interface` and `type`?

**Interface**

- used for defining objects shapes and contracts(API, function, classes)
- can be extended using `extends` keyword
- supports declaration merging
- can be augmented later

```
interface User {
  name: string
}

interface User {
  age: number
}

interface Admin extends User {
  permissions: string[]
}
```

**Type**

- can define any type(primitives, unions, intersections)
- Uses intersection (&) for combining types
- cannot be reopened after definition
- flexible for more complex type operations

### Other

- Typescript can automatically infer types without explicit annotations
