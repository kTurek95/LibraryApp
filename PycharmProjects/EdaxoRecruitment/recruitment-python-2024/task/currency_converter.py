"""
This module contains the logic for converting selected currencies to PLN (Polish Zloty).
It provides functions to fetch currency exchange rates from various sources and to perform
the conversion of amounts from a specified currency to PLN.
"""


from dataclasses import dataclass
from json import JSONDecodeError
import datetime
import requests
from .connectors.local import file_reader


@dataclass(frozen=True)
class ConvertedPricePLN:
    """
    A data class to store information about the converted price in PLN.
    """
    price_in_source_currency: float
    currency: str
    currency_rate: float
    currency_rate_fetch_date: str
    price_in_pln: float


class PriceCurrencyConverterToPLN:
    """
    A class to handle the conversion of prices from a specified currency to PLN.
    """

    def __init__(self, currency: str, source: str, mode: str) -> None:
        """
        Initializes the PriceCurrencyConverterToPLN.

        Args:
            currency (str): The currency code.
            source (str): The source of the currency rate ('json' or 'api').
            mode (str): The mode in which the converter is operating.
        """
        self.currency = currency
        self.source = source
        self.mode = mode

    def fetch_currency_rate_from_api(self) -> float:
        """
        Fetches the currency rate from an API.

        Returns:
            float: The fetched currency rate.

        Raises:
            JSONDecodeError: If there is an error decoding the JSON response.
        """
        try:
            api_response = (requests.get
                            (f"http://api.nbp.pl/api/exchangerates/rates/A/{self.currency}/",
                             timeout=10))
            currency_rate = api_response.json()['rates'][0]['mid']
            return round(currency_rate, 2)
        except JSONDecodeError as e:
            raise ValueError("Error decoding JSON") from e
        except requests.exceptions.Timeout as e:
            raise TimeoutError("The request timed out") from e

    def fetch_currency_rate_from_json(self) -> float:
        """
        Fetches the currency rate from a local JSON file.

        Returns:
            float: The fetched currency rate.
        """
        data = file_reader.read_local_file("example_currency_rates.json")
        return round(data[self.currency][0]['rate'], 2)

    def convert_to_pln(self, *, currency_rate: float, price: float) -> ConvertedPricePLN:
        """
        Converts the given price to PLN using the specified currency rate.

        Args:
            currency_rate (float): The exchange rate for the currency.
            price (float): The price in the source currency.

        Returns:
            ConvertedPricePLN: The converted price details.
        """
        price_in_pln = price * currency_rate
        converted_price = ConvertedPricePLN(
            price_in_source_currency=price,
            currency=self.currency,
            currency_rate=currency_rate,
            currency_rate_fetch_date=str(datetime.date.today()),
            price_in_pln=round(price_in_pln, 2)
        )
        return converted_price
