import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

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

// 2-9

let company: "facebook" | "Google" | "Amazon";
company = "Amazon";
// company = "Apple";

let memory: 256 | 512;
// memory = 12;
memory = 256;

// 2-10

let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
// msg2 = 3;

let animal = { cat: "small vat" };
let newAnimal: typeof animal = { cat: "big cat" };

// 2-11

type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
// key = "aaa";

const SPORTS = {
  soccer: "Socfer",
  basball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";
// keySports = "aaa";

// 2-12

enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 2-13

const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2;

// 2-14

interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" };
const gen2: GEN<number> = { item: 2 };

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "a" };
const gen5: GEN2<number> = { item: 2 };
// const gen6: GEN2<boolean> = { item: true };

function funcGen<T>(props: T) {
  return { item: props };
}
const gen7 = funcGen("test");
const gen8 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen9 = funcGen1("hello");
// const gen10 = funcGen1(3);

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen11 = funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

// 2-15

type USERS = typeof Data;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
};

export default App;
