const obietnica = async (data) => {
  return new Promise((resolve, reject) => {
    if (typeof data === "number") {
      setTimeout(() => {
        resolve("hello");
      }, "2000");
      return;
    }

    if (typeof data === "string") {
      setTimeout(() => {
        resolve("test");
      }, "1000");
      return;
    }
    reject(new error("Data should be either number or a string!"));
  });
};

// obietnica(12);
