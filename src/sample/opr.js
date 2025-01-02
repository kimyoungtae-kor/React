let a,b,rest;
({a,...rest}={d:20,e: 10,b:30,c:40});
console.log(a);
console.log(b);
console.log(rest);
// {a,b,rest}={a:10,b:20,c:30,}

function f(x) {
  x = 20;
}
let value =10;
f(value);

console.log(value);
console.log(f());

function f2(x){
  x.a = 20;
}
let val = {a:10} // object
f2(val);
console.log(val);
