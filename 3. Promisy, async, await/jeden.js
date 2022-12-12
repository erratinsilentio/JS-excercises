const obietnica = async (data) => {
  if (typeof data === "number") {
    setTimeout(() => {
      console.log("hello");
    }, "2000");
    return;
  }

  if (typeof data === "string") {
    setTimeout(() => {
      console.log("test");
    }, "1000");
    return;
  }
  throw new error("Data should be either number or a string!");
};

obietnica(true);
