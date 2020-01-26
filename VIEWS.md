# Dashboard

`/`

- statystyki dzisiejszych zamówień (zdalnie i lokalnie)
- listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

`/login`

- pola na login i hasło
- guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

`/tables`

- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń
  - każda kolumna = 1 stolik
  - każdy wiersz = 30 minut
  - ma przypominać widok tygodnia w kalendarzu Google, gdzie zamiast dni są różne stoliki
  - po kliknieciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

`/tables/booking/:id`

- zawiera wszystkie informacje dotyczące rezerwacji
- umozliwia edycję i zapisanie zmian

`/tables/booking/new`

- analogicznie do powyżej, bez początkowych informacji

`/tables/events/:id`

- analogicznie do powyżej, dla eventów

`/tables/events/new`

- analogicznie do powyżej, dla eventów, bez początkowych informacji

# Widok kelnera

`/waiter`

- tabela
  - w wierszach stoliki
  - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie dostępne akcje dla danego stolika

`/waiter/order/new`

- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
- zamówienie (zamówione produkty z opcjami i ceną)
- kwota zamówienia

`/waiter/older/:id`

- jak powyższa

# Widok kuchni

`/kitchen`

- wyświetlać liste zamówień w kolejności ich złożenia
- lista musi zawierać:
  - numer stolika (lub zamówienia zdalengo)
  - pełne informacje dot. zamówionych dań
- na liście musi być mozliwość oznaczenia zamówienia jako zrealizowane