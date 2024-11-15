# Junior-AI-Developer

# Witam, oto moja praca

## Pliki z kodami:
- **index.js** – główny kod zadania
- **artykul.html** – wygenerowana przez OpenAI (docelowo ląduje w katalogu assets, ponieważ AI czasami dawało lepsze, a czasami gorsze wyniki, postanowiłem wrzucać je tam, aby nie tracić lepszych wersji)
- **podgladArtykuluOpenAI.html** – szablon HTML, który dodatkowo nadaje szatę graficzną temu, co obrobiła AI w pliku artykul.html (AI nie spełniało moich estetycznych wymagań)
- **szablon.html** – kod z szablonem i miejscem gotowym do wklejenia artykułu
- **podglad.html** – podgląd tego, co wkleiliśmy w szablon
- **.env** – plik, w którym musisz wpisać swój klucz OpenAI API

---

## O KODACH

### **index.js**
Ten skrypt w JavaScript odczytuje artykuł z pliku tekstowego, wysyła jego treść do OpenAI API, aby uzyskać sformatowany HTML, a następnie zapisuje wynik jako plik HTML. Używam bibliotek takich jak axios do żądań HTTP, fs do operacji na plikach oraz dotenv do zarządzania zmiennymi środowiskowymi. Dzięki async/await obsługuję asynchroniczne operacje i zapewniam obsługę błędów na każdym etapie przetwarzania. Mój kod automatyzuje generowanie struktury HTML, korzystając z API OpenAI, co oszczędza czas i zwiększa efektywność. Centralizuję konfigurację klucza API, co poprawia bezpieczeństwo i łatwość zarządzania. Niestety korzystałem z wersji gpt-3.5 turbo (nic nie stoi na przeszkodzie, by zmienić na wersję 4).

#### Instrukcja uruchomienia:
1. Node.js powinien być zainstalowany na komputerze.
2. W pliku `.env` wpisz klucz API (w miejscu komentarza: `/* tutaj miejsce na klucz Open API */`).
3. Zainstaluj odpowiednie pakiety: w katalogu projektu w terminalu wpisz `npm install axios dotenv`.
4. Następnie w terminalu wpisz `node index.js`.
5. Wejdź do folderu `assets`, znajdziesz tam nowo wygenerowany plik `artykul.html`. Przenieś go do katalogu wyżej.
   (W linijce 61 kodu możesz usunąć ścieżkę `./assets/artykul.html` i zostawić samo `./artykul.html`, a plik będzie od razu wrzucany i zastępowany na bieżąco.)

---

### **podgladArtykuluOpenAi.html**
Ten kod to szablon HTML służący do wyświetlania artykułu w przeglądarce. Składa się z podstawowej struktury strony z wbudowanym stylem CSS i skryptem JavaScript do dynamicznego ładowania treści artykułu z pliku `artykul.html`. Ten kod umożliwia dynamiczne wczytywanie i wyświetlanie zawartości artykułu z zewnętrznego pliku HTML na stronie, zapewniając prostą i responsywną prezentację z użyciem stylów CSS. Zdecydowałem się na asynchroniczne ładowanie zawartości z pliku `artykul.html` (z katalogu, w którym znajduje się `podgladArtykuluOpenAi.html`, więc zmienione pliki trzeba tam wrzucać albo zapisywać bezpośrednio w tym katalogu).

#### Instrukcja uruchomienia:
1. Sprawdź, czy pliki `index.js`, `artykul.html`, `podgladArtykuluOpenAI.html` są w tym samym katalogu.
2. Otwórz terminal w katalogu (w pasku adresowym katalogu wpisz `cmd`).
3. Utwórz lokalny serwer, wpisując `python -m http.server`.
4. W przeglądarce wejdź na adres `http://localhost:8000/podgladArtykuluOpenAi.html` lub wpisz `podgladArtykuluOpenAi.html` w terminalu.

---

### **szablon.html**
Ten szablon HTML służy do wyświetlania artykułu w atrakcyjnej formie na tle pełnoekranowego obrazu. Zawiera kontener `.article-container`, w którym wyświetlana jest treść artykułu, z wyróżnionymi nagłówkami, akapitami i obrazami. Tło strony jest ustawione na obrazek (`background.jpg` w katalogu `assets`), a tekst jest umieszczony na przezroczystym tle, co zapewnia dobrą czytelność. W stylach CSS zastosowano responsywność i estetyczne formatowanie, z marginesami i wcięciami dla lepszej prezentacji. Całość zapewnia estetyczny i nowoczesny wygląd, idealny do prezentacji artykułów online.

#### Instrukcja postępowania:
1. Wklej tekst w odpowiednim polu (opisanym powyżej).
2. Jeśli artykuł ma odpowiednią strukturę (np. `<h1>`, `<h2>`, `<p>`, `<img>`), tekst i obrazy zostaną odpowiednio wyświetlone, zgodnie z CSS w szablonie.
3. Jeśli artykuł to tylko surowy tekst, można dodać odpowiednie style lub tagi HTML, by dostosować wygląd w odpowiedni sposób.
4. (Nie chcąc korzystać z `podglad.html`) – Utwórz lokalny serwer wpisując w terminalu `python -m http.server`, a następnie otwórz `szablon.html` w przeglądarce pod adresem `http://localhost:8000/szablon.html`.

---

### **podglad.html**
Ten kod służy do dynamicznego wczytywania zawartości z pliku `szablon.html` i wyświetlania go w obrębie elementu o identyfikatorze `content-container`. Używam w nim funkcji `fetch`, aby pobrać zawartość pliku HTML, a następnie wstawiam ją do strony. Jeśli wczytanie pliku się nie powiedzie, zamiast artykułu pojawi się komunikat o błędzie. Kod wykorzystuje `async/await`, co sprawia, że operacja jest asynchroniczna i nie blokuje innych działań na stronie.

#### Instrukcja uruchomienia:
1. Sprawdź, czy pliki `index.js`, `szablon.html`, `podglad.html` są w tym samym katalogu.
2. Otwórz terminal w katalogu (w pasku adresowym katalogu wpisz `cmd`).
3. Utwórz lokalny serwer, wpisując `python -m http.server`.
4. W przeglądarce wejdź na adres `http://localhost:8000/podglad.html` lub wpisz `podglad.html` w terminalu.

---

Ze swojej strony pragnę dodać, że świetnie się bawiłem pracując nad tym zadaniem. Nauczyłem się kilku nowych rzeczy, mimo drobnych nieścisłości, których AI nie chciało poprawić, nawet po moich próbach zmiany promptów. Mam nadzieję, że prawidłowo wykonałem zadanie i że powyższy opis wraz z instrukcjami są jasne i wyjaśniają wszystko. Będę wdzięczny za wszelkie sugestie i opinie, ponieważ to moje pierwsze kroki w branży IT. Chciałbym wiedzieć, czy popełniłem jakieś poważne błędy lub co mogę poprawić w przyszłości.

Serdecznie dziękuję za poświęcony czas i szansę, jaką otrzymałem!

Sławomir Gądek








