const createPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('My name is Tung Anh');
  }, 1000);

  setTimeout(() => {
    reject('OK');
  }, 2000);
});

const runAsync = async () => {
  try {
    Promise.reject('lmao')
      .then((error) => console.log(`something was wrong ${error}`))
      .catch((err) => console.log(err));

    Promise.resolve('Hello').then((value) => console.log(value));
  } catch (error) {
    console.log(error);
  }
};
runAsync();
