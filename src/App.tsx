import React from "react";
import logo from "./logo.svg";
import "./App.css";

// 2-6

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username: string = "Hello";
let dummyNum: number = 2;
let bool: boolean = true;

let array1: boolean[] = [true, false, true];
let array2: (number | string)[] = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string;
}

interface NAME2 {
  first: string;
  last?: string;
}

interface NAME3 {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };
let nameObj2: NAME2 = { first: "Yamada" };
let nameObj3: NAME3 = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// 2-7

type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// 2-8

let value: boolean | number;
value = true;
value = 10;
// value = "a";

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
    </div>
  );
}

export default App;
