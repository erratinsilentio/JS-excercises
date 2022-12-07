# Zadania z klas cz.2

## Zadanie 1
Do wbudowanej w język JS klasy String dodaj do prototypu metodę upperFirst(), która zmienia pierwszą literę podanego stringa w wielką literę.<br />
Podpowiedź:<br />
[Dodawanie swoich metod do klas wbudowanych](https://stackoverflow.com/questions/8392035/add-method-to-string-class) sprawdz podejście w ES6 wspomniane w wątku
## Zadnie 2
Do wbudowanej w język JS klasy number dodaj metodę isOdd() sprawdzającą czy liczba jest parzysta i isEven() sprawdzającą czy podana liczba jest nieparzysta.

## Zadanie 3
Klasa Fish posiadająca pole wiek, poziom glodu i flagę isIll.
- [ ] zainicjalizuj pole w konstruktorze,
- [ ] dodaj metody manipulujace polami klasy,

## Zadanie 4
Klasa Gupik dziedziczaca po polu Fish i posiadająca flagę isSleep
- [ ] zainicjalizuj pole w konstruktorze,
- [ ] dodaj metode zmieniajaca flage isSleep,

## Zadanie 5
Klasa krewetka dziedziczaca po klasie Fish. Dodaj pole isFiltering informujace po tym czy krewetka filtruje teraz wode czy nie.
- [ ] dodaj metode ktora zmienia pole informujace o tym czy krewetka filtruje wode czy nie

## Zadanie 6
Stwórz klasę Akwarium która posiada pola fishes=[], fillLevel.
- [ ] w konstruktorze zainicjalizuj pola.
- [ ] dodaj metodę nakarm, która iteruje po obiektach tablicy fishes i karmi rybki
- [ ] dodaj metodę isSomeHungry, która iteruje po obiektach tablicy fishes i sprawdza czy poziom glodu jakiejs rybki jest <50 
- [ ] dodaj metodę isSomeIll, ktora iteruje po obiektach tablicy fishes i sprawdza czy ktoras rybka jest chora,
- [ ] dodaj metodę fill przyjmującą procent napełnienia i zmieniającą pole fillLevel.
- [ ] addFish która przyjmuje pole i dodaje ja do tablicy ryb w akwarium,
- [ ] dodaj metode action, która iteruje po tablicy rybek i oblicza prawdopodobienstwo zdarzenia (Math.random>0.5) jeśli rybka jest Gupikiem to zmienia jego flage (boolean) isSleep, a jesli to krewetka to zmienia jego flage isFitering,
- [ ] dodaj metode info, ktora iteruje po tablicy rybek i wyswietla informacje o jej polach
- [ ] dodaj metode wyslij na kwarantanne, ktora wykorzystuje metode addFish z klasy z zadania 7

## Zadanie 7
Stwórz klase AkwariumKwarantanna, która dziedziczy po Akwarium.
- [ ] dodaj metode zwroc z kwarantanny ktora wykorzystuje metode addFish z klasy Akwarium