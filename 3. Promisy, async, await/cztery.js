const getData = async () => {
  const json = await fetch("https://restcountries.com/v3.1/all");
  const data = await json.json();
  console.log(data);

  // - [ ] policz ile krajów ma walutę euro
  // filter i reduce

  const currencies = data.map((item) => {
    if (item.currencies == "EUR") {
      return item;
    } else {
      return null;
    }
  });
  console.log(currencies);

  // - [ ] znajdź kraj bez stolicy,
  // filter

  // - [ ] pogrupuj nazwy krajów według kontynentu,
  // 3x sort

  // - [ ] znajdź który kontynent ma najwięcej, a który najmniej państw,
  // reduce do poprzednich tablic

  // - [ ] zsumuj popuacje krajów na danych kontynentach,
  // reduce do poprzednich tablic

  // - [ ] zsumuj powierzchnie krajów na danych kontynentach,
  // reduce do poprzednich tablic

  // - [ ] wyswietl nazwy kontynentow o najwiekszej i najmiejszej powierzchni,
  // filter

  // - [ ] wyswietl nazwy kontynentow o najwiekszej i najmniejszej populacji,
  // filter

  // - [ ] posortuj waluty alfabetycznie,
  // map i sort
};

getData();
