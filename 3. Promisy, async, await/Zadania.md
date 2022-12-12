# Zadania z promis i async, await

## Zadanie 1

Stwórz promisę, która na wejście może dostać dowolny typ danych. Jeśli otrzymana dana to liczba zwróć odpowiedź "hello" po 2 sekundach, a jeśli to string odpowiedź zwróć po sekundzie "test". W innym przypadku zwróć błąd. Wykorzystaj składnię async, await.

## Zadanie 2

Zaimplementuj advice generator ze strony [frontend mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

## Zadanie 3

Zapoznaj się z [API](https://jsonplaceholder.typicode.com/) i pobierz z API https://jsonplaceholder.typicode.com/users po załadowaniu strony wszystkich userów, a następnie za pomocą JSa stwórz funkcję, która stworzy kartę i wyświetli dane usera w przeglądarce domyślne widoczne (username, email) oraz po kliknięciu w przycisk wyświetla następne informacje (adres miasto, ulica, kod pocztowy). Zastosuj operacje na DOM, składnię async, await oraz ostyluj galerię kart userów z wykorzystaniem SCSSa lub tailiwnd css.

## Zadanie 4

Pobierz dane z endpointu https://restcountries.com/v3.1/all a następnie wykonaj operacje:
- [ ] policz ile krajów ma walutę euro,
- [ ] znajdź kraj bez stolicy,
- [ ] pogrupuj nazwy krajów według kontynentu,
- [ ] znajdź który kontynent ma najwięcej, a który najmniej państw,
- [ ] zsumuj popuacje krajów na danych kontynentach,
- [ ] zsumuj powierzchnie krajów na danych kontynentach,
- [ ] wyswietl nazwy kontynentow o najwiekszej i najmiejszej powierzchni,
- [ ] wyswietl nazwy kontynentow o najwiekszej i najmniejszej populacji,
- [ ] posortuj waluty alfabetycznie,

Podpowiedź dane możesz grupować za pomocą reduce, przykładowa implementacja [tutaj](https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/)