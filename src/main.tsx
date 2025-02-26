import "./style.css";

// let isDone: boolean = true;

// const name: string = "Dmytro";
// const lastName: string = "Manko";
// const age: number = 20;
// const isHappy: boolean = false;

// type UserProfile = {
//   username: string;
//   age: number;
//   isActive: boolean;
// };

// const user = {
//   username: "Dmytro",
//   age: 20,
//   isActive: true,
// };

// function displayUserProfile(user: UserProfile) {
//   return `This is ${user.username}, he is ${user.age} years old and he is ${user.isActive}`;
// }

// console.log(displayUserProfile(user));

// type User = {
//     name: string;
//     age: number;
// }

// const numbers = [10, 20, 30, 40];

// function logSum(arr: User[]) {
//   return arr.reduce((acc, el) => acc + el, 0);
// }

// console.log(logSum(numbers));

// function safelyParseJson(jsonString: string) {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result;
//     }
//   } catch (error) {
//     console.log("Failed to parse JSON", error);
//   }
//   return null;
// }

// enum VehicleType {
//   Car = "Audi",
//   Truck = "Scania",
//   Moto = "BMW",
// }

// function getVehicleType(vehicle: VehicleType) {
//   return `The type of your vehicle is: ${vehicle}`;
// }

// console.log(getVehicleType(VehicleType.Car));
// console.log(getVehicleType(VehicleType.Truck));
// console.log(getVehicleType(VehicleType.Moto));

// function formatInput(input: string | number) {
//   if (typeof input === "number") {
//     return input.toFixed(2);
//   } else {
//     return input.toLowerCase();
//   }
// }

// function lightSwitcher(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("be ready");
//   } else if (color === "red") {
//     console.log("stop");
//   }
// }

// lightSwitcher("blue");

// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// errorHandler("Critical error");

// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHallo(): string;
//   sayBy(): void;
//   showAge(age: number): string;
// }

// const user = {
//   name: "Bob",
//   age: 23,
//   lastName: "Mikrovchenko",
//   sayHallo() {
//     return "Hi!";
//   },
//   sayBy() {
//     console.log("By");
//   },
//   showAge(age: string) {
//     return `My age is ${age}`;
//   },
// };

// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// function getKeyElement<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: "Dmytro",
//   age: 13,
//   occupation: "Engineer",
// };

// const name = console.log(getKeyElement(person, "name"));
// const age = console.log(getKeyElement(person, "age"));
// const occupation = console.log(getKeyElement(person, "occupation"));

// interface UserProfile {
//   name: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   name: "Dmytro",
//   email: "dmytro@gmail.com",
//   age: 23,
// };

// function updateUserProfile(
//   profile: UserProfile,
//   updatedProfile: Partial<UserProfile>
// ) {
//   return { ...profile, ...updatedProfile };
// }

// const updatedUserProfile = updateUserProfile(originalProfile, {
//   name: "Hallo",
//   age: 27,
// });

// console.log(updatedUserProfile);

// interface User {
//   id: number;
//   name: string;
// }

// const userProfile: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// userProfile.id = 200;

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const userInfo: Employee = {
//   id: 1,
//   name: "Bob",
//   email: "bob@gmail.com",
//   department: "IT",
//   hireDate: new Date(2024 - 2 - 11),
// };

// function getUserInfo(userInfo: Employee): Pick<Employee, "name" | "email"> {
//   return {
//     name: userInfo.name,
//     email: userInfo.email,
//   };
// }

// console.log(getUserInfo(userInfo));

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const user: Employee = {
//   id: 1,
//   name: "Bob",
//   email: "bob@gmail.com",
//   department: "IT",
//   hireDate: new Date(2024 - 12 - 23),
// };

// function getOnlyInfo(userInfo: Employee): Omit<Employee, "hireDate"> {
//   return {
//     id: userInfo.id,
//     name: userInfo.name,
//     email: userInfo.email,
//     department: userInfo.department,
//   };
// }

// console.log(getOnlyInfo(user));

// function recordTemperatures(temps: number[]): Record<string, number> {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });

//   return temperatureRecord;
// }

// const weeklyTemps = [22, 24, 23, 25, 26];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord);

// Homework 1

// const age: number = 50;
// const username: string = "Max";
// const toggle: boolean = true;
// const empty: null = null;
// const callback = (a: number): number => {
//   return 100 + a;
// };

// Homework 2

// let person: [string, number];

// person = ["Max", 21];

// Homework 3

// let maybePerson: string | number;

// let maybeActive: "enable" | "disable";

// Homework 4

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// Homework 5

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Homework 6

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   address?: {
//     city: string;
//     country: string;
//   };
// }

// const mango: User = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const poly: User = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
// };

// Homework 7

// interface Pages {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// }

// const page1: Pages = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2: Pages = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

// Homework 8

// import axios from "axios";

// async function fetchData<T>(url: string): Promise<T> {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

// Homework 9

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// Homework 10

// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign({}, objA, objB);
// }

// Homework 11

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: Partial<User>) {}

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

// Homework 12

// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }
// const RoleDescription: Record<UserRole, string> = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

// Homework 13

// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// type Params = Omit<Form, "errors">;

// import axios, { AxiosResponse } from "axios";

// async function getUser<T>(url: string): Promise<T> {
//   try {
//     const response: AxiosResponse<T> = await axios.get<T>(url);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }
