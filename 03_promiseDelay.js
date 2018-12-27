setTimeout(function returnsAPromise() {
  return Promise.resolve("success!").then(function(value) {
    console.log(value);
  });
}, 1000);
