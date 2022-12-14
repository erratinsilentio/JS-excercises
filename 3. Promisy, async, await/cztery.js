const getData = async () => {
  const json = await fetch("https://restcountries.com/v3.1/all");
  const data = await json.json();
  console.log(data);

  // - [ x ] policz ile krajów ma walutę euro
  const euro = data
    .filter((item) => item.currencies)
    .filter((country) => country.currencies.EUR).length;

  // - [ x ] znajdź kraj bez stolicy,
  const noCapital = data.filter((item) => !item.capital);

  // - [ x ] pogrupuj nazwy krajów według kontynentu,
  const africa = data.filter((item) => item.continents == "Africa");
  const europe = data.filter((item) => item.continents == "Europe");
  const oceania = data.filter((item) => item.continents == "Oceania");
  const asia = data.filter((item) => item.continents == "Asia");
  const southAmerica = data.filter(
    (item) => item.continents == "South America"
  );
  const northAmerica = data.filter(
    (item) => item.continents == "North America"
  );

  // - [ x ] znajdź który kontynent ma najwięcej, a który najmniej państw,
  const continents = [
    africa,
    europe,
    oceania,
    asia,
    southAmerica,
    northAmerica,
  ];
  const mostCountries = continents.reduce((prev, current) =>
    prev.length > current.length ? prev : current
  );

  // - [ x ] zsumuj popuacje krajów na danych kontynentach,
  africaPopulation = africa.reduce(
    (prev, current) => prev + current.population,
    0
  );
  asiaPopulation = asia.reduce((prev, current) => prev + current.population, 0);
  oceaniaPopulation = oceania.reduce(
    (prev, current) => prev + current.population,
    0
  );
  oceaniaPopulation = oceania.reduce(
    (prev, current) => prev + current.population,
    0
  );
  europePopulation = europe.reduce(
    (prev, current) => prev + current.population,
    0
  );
  northAmericaPopulation = northAmerica.reduce(
    (prev, current) => prev + current.population,
    0
  );
  southAmericaPopulation = southAmerica.reduce(
    (prev, current) => prev + current.population,
    0
  );

  // - [ x ] zsumuj powierzchnie krajów na danych kontynentach,
  africaArea = africa.reduce((prev, current) => prev + current.area, 0);
  asiaArea = asia.reduce((prev, current) => prev + current.area, 0);
  oceaniaArea = oceania.reduce((prev, current) => prev + current.area, 0);
  europeArea = europe.reduce((prev, current) => prev + current.area, 0);
  northAmericaArea = northAmerica.reduce(
    (prev, current) => prev + current.area,
    0
  );
  southAmericaArea = southAmerica.reduce(
    (prev, current) => prev + current.area,
    0
  );

  // - [ x ] wyswietl nazwy kontynentow o najwiekszej i najmiejszej powierzchni,
  const areas = [
    { name: "africa", area: africaArea },
    { name: "asia", area: asiaArea },
    { name: "oceania", area: oceaniaArea },
    { name: "europe", area: europeArea },
    { name: "north america", area: northAmericaArea },
    { name: "south america", area: southAmericaArea },
  ];

  const areasSorted = areas.sort((a, b) => a.area - b.area);

  const smallestArea = areasSorted[0].name;
  const largestArea = areasSorted[areasSorted.length - 1].name;

  // - [ x ] wyswietl nazwy kontynentow o najwiekszej i najmniejszej populacji,
  const populations = [
    { name: "africa", population: africaPopulation },
    { name: "asia", population: asiaPopulation },
    { name: "oceania", population: oceaniaPopulation },
    { name: "europe", population: europePopulation },
    { name: "north america", population: northAmericaPopulation },
    { name: "south america", population: southAmericaPopulation },
  ];

  populationsSorted = populations.sort((a, b) => a.population - b.population);

  const smallestPopulation = populationsSorted[0].name;
  const highestPopulation =
    populationsSorted[populationsSorted.length - 1].name;

  // - [ x ] posortuj waluty alfabetycznie,
  const currencies = data
    .filter((item) => item.currencies)
    .map((country) => Object.keys(country.currencies))
    .sort();
};

getData();
