const getData = async () => {
  const json = await fetch("https://restcountries.com/v3.1/all");
  const data = await json.json();
  console.log(data);

  // policz ile krajów ma walutę euro

  const currencies = data.map((item) => {
    if (item.currencies == "EUR") {
      return item;
    } else {
      return null;
    }
  });
  console.log(currencies);
};

getData();
