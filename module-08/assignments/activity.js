const timeout = (ms) => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
  
  const inc = (a) => timeout(800)
    .then(() => a + 1);
  
  const sum = (a, b) => timeout(800).
    then(() => a + b);
  
  const max = (a, b) => timeout(800).
    then(() => (a > b ? a : b));
  
  const avg = (a, b) => timeout(800)
    .then(() => sum(a, b))
    .then((s) => s / 2);
  
  const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return timeout(800)
        .then(() => this.name.split(sep));
    },
  };
  
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static of(name) {
      return timeout(800)
        .then(() => new Person(name));
    }
  
    split(sep = " ") {
      return timeout(800)
        .then(() => this.name.split(sep));
    }
  }
  
  const person = new Person("Marcus Aurelius");
  
  inc(5)
    .then((data) => console.log("inc(5) =", data))
    .then(() => sum(1, 3))
    .then((data) => console.log("sum(1, 3) =", data))
    .then(() => max(8, 6))
    .then((data) => console.log("max(8, 6) =", data))
    .then(() => avg(8, 6))
    .then((data) => console.log("avg(8, 6) =", data))
    .then(() => obj.split())
    .then((data) => console.log("obj.split() =", data))
    .then(() => person.split())
    .then((data) => console.log("person.split() =", data));
  