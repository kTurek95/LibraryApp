#### Autor: Kacper Turek

- `example_currency_rates.json` - lokalne źródło danych z kursami walut
- `database.json` - baza danych z zapisanymi kursami walut
- `database.sqlite` - baza danych z informacjami o przewalutowaniach
- `task\connectors\database\json.py` - służy do pracy z plikami json
- `task\connectors\database\sqlite.py` - służy do pracy z baza danych sqlalchemy
- `task\connectors\local\file_reader.py` - służy do pracy z plikami
- `taks\__main__.py` - główny moduł z logiką uruchamiania skryptu
- `task\config.py` - plik konfiguracyjny
- `task\currency_conventer.py` - moduł z logiką przewalutowania
- `tests\test_currency_converter.py` - moduł z testem dla currency_converter.py
- `tests\test_json.py` - moduł z testami dla json.py
- `tests\test_sqlite.py` - moduł z testami dla sqlite.py

#### Przykład użycia
Należy przejść do katalogu `recruitment-python-2024` i wpisać w terminalu `pip install -r requirements.txt`.
Po zainstalowaniu wszystkich potrzebnych bibliotek trzeba napisać w terminalu np:
`python -m task dev DKK 50 api`. W zależności od rezultatu w terminalu ukaże się infromacja o udanym bądź nie 
przewalutowaniu waluty.
