# Junior-AI-Developer

Witam, oto moja praca

pliki z kodami:
**index.js**	- główny kod zadania
**artykul.html**	- wygenerowana przez OpenAI (docelowo ląduje w katalogu assets, jako że AI czasami dawało lepsze a czasami gorsze wyniki,
 		  więc dla porównania która wersja jest lepsza, postanowiłem go wrzucać tam aby nie tracić lepszych wersji tego, co 
		  wygenerowało AI
**podgladArtykuluOpenAI.html** - tutaj mamy mój szablon, który dodatkowo nadaje szatę graficzną temu co obrobiła AI w pliku artykul.html 
				(drażniło mnie to, że ilość promptów się zmieniała, ich treść i charakter też a pomimo to AI nie spełniał
				moich wymagań estetycznych)
DLA CHĘTNYCH

**szablon.html** 	- tutaj jest kod z szablonem i miejscem gotowym do wklejenia artykułu
**podglad.html**	- a tutaj ( podobnie jak w przypadku podgladArtykuluOpenAi.html ) podgląd tego, co wkleiliśmy w szablon
**.env** 		- NIESTETY MUSICIE TUTAJ PAŃSTWO UŻYĆ SWOJEGO KLUCZA OPEN API :D

***  O KODACH	***
**index.js**

	Ten skrypt w JavaScript odczytuje artykuł z pliku tekstowego, wysyła jego treść do OpenAI API, aby uzyskać sformatowany HTML, a następnie zapisuje wynik jako plik HTML. Używam bibliotek takich jak axios do żądań HTTP, fs do operacji na plikach oraz dotenv do zarządzania zmiennymi środowiskowymi. Dzięki async/await obsługuję asynchroniczne operacje i zapewniam obsługę błędów na każdym etapie przetwarzania. Mój kod automatyzuje generowanie struktury HTML, korzystając z API OpenAI, co oszczędza czas i zwiększa efektywność. Centralizuję konfigurację klucza API, co poprawia bezpieczeństwo i łatwość zarządzania.
Niestety korzystałem z wersji gpt-3.5 turbo ( nic nie stoi na przeszkodzie zmienić na wersję 4 )

**Instrukcja uruchomienia:**
* Node.js powinien być zainstalowany na komputerze.
* W pliku .env wpisać klucz API ( w miejscu komentarza -  /* tutaj miejsce na klucz Open API */ )
* Zainstalować odpowiednie pakiety - w katalogu projektu w terminalu wpisać 'npm install axios dotenv' 
* Następnie w terminalu wpisać 'node index.js'
* Teraz należy wejść do folderu 'assets' i tam mamy nowo wygenerowany plik artykul.html - trzeba go wkleić katalog wyżej
	( w linijce 61 kodu można usunąć ścieżkę ./assets/artykul.html i zostawić samo ./artykul.html i wtedy będzie od razu go wrzucało i 
		zastępowało na bieżąco )

**podgladArtykuluOpenAi.html**

	Ten kod to szablon HTML służący do wyświetlania artykułu w przeglądarce. Składa się z podstawowej struktury strony z wbudowanym stylem CSS i skryptem JavaScript do dynamicznego ładowania treści artykułu z pliku artykul.html. Ten kod umożliwia dynamiczne wczytywanie i wyświetlanie zawartości artykułu z zewnętrznego pliku HTML na stronie, zapewniając prostą i responsywną prezentację z użyciem stylów CSS ( których moja wielka  'współpraca' z AI nie była w stanie osiągnąć...:) )
Podobnie jak powyżej, postawiłem na asynchroniczne ładowanie zawartości z pliku artykul.html ( z katalogu w którym się znajduje podgladArtykuluOpenAi.html więc zmienione pliki trzeba tam wrzucać albo zapisywać bezpośrednio w tym katalogu) 

**Instrukcja uruchomienia:**
* Sprawdzić czy pliki index.js , artykul.html , podgladArtykuluOpenAI.html są w tym samym katalogu
* Otworzyć w katalogu terminal ( w pasku adresowym katalogu wpisać 'cmd' ) 
* Utworzyć lokalny serwer wpisując ' python -m http.server '
* Wpisać w przeglądarce ' http://localhost:8000/podgladArtykuluOpenAi.html ' lub w terminalu ' podgladArtykuluOpenAi.html '

**szablon.html**

	Ten szablon HTML służy do wyświetlania artykułu w atrakcyjnej formie na tle pełnoekranowego obrazu. Zawiera kontener .article-container, w którym wyświetlana jest treść artykułu, z wyróżnionymi nagłówkami, akapitami i obrazami.
Tło strony jest ustawione na obrazek (background.jpg w katalogu assets), a tekst jest umieszczony na przezroczystym tle, co zapewnia dobrą czytelność. W stylach CSS zastosowano responsywność i estetyczne formatowanie, z marginesami i 
wcięciami dla lepszej prezentacji. Całość zapewnia estetyczny i nowoczesny wygląd, idealny do prezentacji artykułów online.
W zaznaczonym miejscu wklejamy tekst  ( /* Tutaj wklejamy artykuł, który następnie podejrzymy klikając w podgląd.html */ ) , który będzie wyświetlany.

**Instrukcja postepowania:**
* Wklej tekst w odpowiednim polu ( opisanym powyżej ) 

***Jeśli artykuł ma odpowiednią strukturę (np. <h1>, <h2>, <p>, <img>), tekst i obrazy zostaną odpowiednio wyświetlone, zgodnie z CSS w szablonie.
***Jeśli artykuł to tylko surowy tekst, można dodać odpowiednie style lub tagi HTML, by dostosować wygląd w odpowiedni sposób.

* ( nie chcąc korzystać z podglad.html) - Utworzyć lokalny serwer wpisując w terminalu ' python -m http.server ', a nastepnie ' szablon.html ' , lub w przeglądarce adres  ' http://localhost:8000/szablon.html '

**podglad.html**

	Ten kod służy do dynamicznego wczytywania zawartości z pliku szablon.html i wyświetlania go w obrębie elementu o identyfikatorze content-container. Używam w nim funkcji fetch, aby pobrać zawartość pliku HTML, 
a następnie wstawiam ją do strony. Jeśli wczytanie pliku się nie powiedzie, zamiast artykułu pojawi się komunikat o błędzie. Kod wykorzystuje async/await, co sprawia, że operacja jest asynchroniczna i nie blokuje innych 
działań na stronie. Jego zaletą jest prostota i efektywność, ponieważ automatycznie ładuje i wyświetla treść z zewnętrznego pliku, co ułatwia zarządzanie i aktualizowanie zawartości bez potrzeby modyfikowania kodu HTML strony głównej.

**Instrukcja uruchomienia:**
* Sprawdzić czy pliki index.js , szablon.html , podglad.html są w tym samym katalogu
* Otworzyć w katalogu terminal ( w pasku adresowym katalogu wpisać 'cmd' ) 
* Utworzyć lokalny serwer wpisując ' python -m http.server '
* Wpisać w przeglądarce ' http://localhost:8000/podglad.html ' lub w terminalu ' podglad.html ' .


******************************************************************************************

Ze swojej strony, pragnę dodać, że świetnie się bawiłem pracując nad tym zadaniem, nauczyłem się też kilku nowych rzeczy ( pomimo drobnych nieścisłości, których AI nie chciało jakoś naprostować nawet przy moich usilnych próbach zmieniania promptów ).  Mam nadzieję, że prawidłowo je wykonałem, zgodnie z oczekiwaniami i że powyższy opis wraz z instrukcjami są czytelne, wyjaśniają wszystko, sięgają sedna i sam nie wiem jeszcze co mogę dodać:) Byłbym wdzięczny
za wszelakie sugestie, krytykę, opinie i wszystko co może okazać się pomocne w pracy w branży IT, jako że są to moje pierwsze kroki - chciałbym wiedzieć, czy popełniłem gdzieś faux pas, albo jakieś kardynalne błędy wdały się w 
moją prace... Będzie mi bardzo miło jeżli otrzymam jakieś wskazówki na przyszłość jeżeli Państwo się nie zdecydują na współpracę ze mną ( oczywiście jeżeli zostanę przyjęty to tym bardziej, ponieważ w Państwa interesie będzie taki ruch względem mnie podjęty ) .

Serdecznie dziękuję za szansę jaką otrzymałem i za poświęcenie czasu na przebrnięcie fachowym okiem przez moją pracę.

Sławomir Gądek 








