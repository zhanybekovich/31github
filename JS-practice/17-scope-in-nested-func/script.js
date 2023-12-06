function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y); ----> Error y is not defined

  second();
}

first();
