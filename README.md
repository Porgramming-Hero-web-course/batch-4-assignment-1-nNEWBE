# ➡️ The Significance of Union and Intersection Types in TypeScript

## 🚀 Introduction

TypeScript is a programming language developed by Microsoft that builds on top of JavaScript by adding static types. It's a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript, and that every JavaScript program is a syntactically legal TypeScript program. Also, the runtime behavior of TypeScript and JavaScript is identical. In this blog, we'll explore two powerful features of TypeScript union types and intersection types. When working with JavaScript, managing different types of data can become challenging, especially in larger projects. TypeScript addresses this by introducing union and intersection types, allowing developers to precisely control the types of variables, function parameters, and return values. Let us discover how these types can help us manage data types in TypeScript projects.

## 🔄 Union Types

### 📚 Definition

Union types in TypeScript allow a variable to have multiple types. This is useful when a value can be one of several types.

### 💻 Syntax of Union Types

```typescript
let value: number | string;
value = 20; // ✅ 
value = "Hello"; // ✅ 
value = true; // ❌ 
```

### 📝 Explaination (Union Types)

```typescript
let value: number | string;
```

- This declares a variable named `value` that can only hold a value of type number or `string`.
- The `|` (pipe) symbol between `number` and `string` indicates that `value` is a union type, meaning it can be one type or the other.

```typescript
value = 20; // ✅
```

- This assignment is valid because `20` is a `number`, which is one of the types allowed in the union (`number | string`).

```typescript
value = "Hello"; // ✅
```

- This is also valid because `"Hello"` is a `string`, which is also included in the union type.

```typescript
value = true; // ❌
```

- This assignment is not valid. TypeScript will throw an error:

```typescript
Error: Type 'boolean' is not assignable to type 'number | string'
```

- The reason for this error is that true is a boolean, and boolean is not included in the union type (`number | string`).
- TypeScript enforces type safety by preventing you from assigning a value that isn't part of the defined union type.

## 🔄 Intersection Types

### ✡️ Definition

Intersection types in TypeScript are used to combine multiple types into one. They are created using the `&` (ampersand) symbol.

### 💻 Syntax of Interseciton Types

```typescript
type Person = { name: string; age: number };
type Employee = { employeeId: number; department: string };

const manager: Person & Employee = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "HR"
};
```

### 📝 Explaination (Intersection Types)

``` typescript
type Person = { name: string; age: number };
```

This defines a type called `Person` with two properties:

- `name` : a string
- `age` : a number

``` typescript
type Employee = { employeeId: number; department: string };
````

This defines another type called `Employee` with two properties:

- `employeeId`: a number
- `department`: a string

```typescript
const manager: Person & Employee = { ... };
```

The expression `Person & Employee` is an intersection type. It means that the variable manager must have all the properties from both `Person` and `Employee`. In other words:

- It needs to have the properties from the Person type (`name` and `age`).
- It also needs to have the properties from the Employee type (`employeeId` and `department`).

Assigning a Value to manager

```typescript
const manager: Person & Employee = {
  name: "Alice",        // from Person
  age: 30,              // from Person
  employeeId: 101,      // from Employee
  department: "HR"      // from Employee
};
```

In this assignment:

- `name: "Alice"` and `age: 30` satisfy the `Person` type.
- `employeeId: 101` and `department: "HR"` satisfy the `Employee` type.

The object assigned to `manager` has all four required properties, so it successfully satisfies the intersection type `Person & Employee`.

### 📒 Conclusion

The union and intersection types in TypeScript are essential tools that enable developers to create type-safe, flexible, and maintainable code. By understanding when to use each, you can write more efficient and error-free TypeScript applications.
