Promise.resolve("success!")
  .then(function(value) {
    console.log(value);
  })
  .catch(function(value) {
    console.log(value);
  });

Promise.reject("failure!")
  .then(function(value) {
    console.log(value);
  })
  .catch(function(value) {
    console.log(value);
  });
