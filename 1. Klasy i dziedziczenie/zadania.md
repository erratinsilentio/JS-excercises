# Klasy i dziedziczenie zadania

## Zadanie 1
Stwórz klasę Computer posiadającą pola:
- moc zasilacza, - podawane w W
- prędkość procesora - podawane w GHz,
- ilosc rdzeni procesora,
- płyta główna,
- GPU karty graficznej - podawane w GHz, 
Dodaj konstruktor i getery oraz setery do pól.<br />
Dodaj metodę info wyświetlającą informacje o komputerze.<br />
Dodaj metodę calculateProcessorsPower, która zwróci sumę predkoscProcesora*iloscRdzeni+GPU.<br />

## Zadanie 2
Stwórz klasę SuperComputer dziedziczącą po klasie Computer, która posiada dodatkowe pole na ilość procesorów.
Nadpisz metodę info o wyświetlanie dodatkowej informacji o ilości procesorów.
Nadpisz metodę z klasy bazowej calculateProcessorsPower według wzoru:
``` iloscProcesorow*(predkoscProcesora*iloscRdzeni)```
Napisz metodę estimateCalculations, która dla podanego czasu w cyklach (GHz) oblicza czas obliczen wedlug wzoru:
```timeInCycles/(iloscProcesorow*(predkoscProcesora*iloscRdzeni))```

## Zadanie 3
Stwórz klasę CryptoMinerStation dziedziczącą po klasie Computer, która posiada dodatkowe pole na ilość GPU.
Nadpisz metodę info o wyświetlanie dodatkowej informacji o ilości GPU.
Nadpisz metodę calculateProcessorsPower według wzoru: 
```(iloscGPU*GPU)+(predkoscProcesora*iloscRdzeni)```
Napisz metodę miningTime, która dla podanego czasu i kosztu prądu za W na GHz, oblicza koszt miningu według wzoru:
```time*costs*GHz```

## Zadanie 4
Napisz klasę ComputerGarage przechowującą komputery w tablicach. Pola klasy:
- Computers = [],
- SuperComputers=[],
- CryptoMinerStations=[]
Stwórz metody tworzące pola powyższych klas i dodające je do odpowiednich tablic.
Stwórz metodę info, która dla podanej nazwy tablicy wyświetli informaje o wszystkich klasach z danej tablicy.
Stwórz metodę garageInfo, która wyświetli informacje o wszystkich komputerach w garażu
Stwórz metodę addToGarage, która przyjmuje computer, super computer lub cryptoMinerStation i dodaje obiekt do odpowiedniej tablicy

# Zadanie 5
Aby odświeżyć CSSa i poćwiczyć go z JSem zaimplementuj stronę dostępną pod [linkiem](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)