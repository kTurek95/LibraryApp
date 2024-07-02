"""
This module provides functionality for currency conversion
when executed as a script.

Usage:
    python -m task <mode> <currency> <amount> <source>
"""

import logging
from logging import getLogger
import click
from .currency_converter import PriceCurrencyConverterToPLN, ConvertedPricePLN
from .connectors.database.json import JsonFileDatabaseConnector
from .connectors.database.sqlite import SqliteDatabaseConnector

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

logger = getLogger(__name__)


def create_new_entity(chosen_source_func) -> dict:
    """
    Creates a new entity dictionary from the chosen source function.

    Args:
        chosen_source_func: An instance with attributes 'currency', 'currency_rate', 'price_in_pln',
                            and 'currency_rate_fetch_date'.

    Returns:
        dict: A dictionary representing the new entity with keys
         'currency', 'rate', 'price_in_pln', and 'date'.
    """
    new_entity = {
        'currency': chosen_source_func.currency,
        'rate': chosen_source_func.currency_rate,
        'price_in_pln': chosen_source_func.price_in_pln,
        'date': chosen_source_func.currency_rate_fetch_date
    }
    return new_entity


def get_currency_rate_from_chosen_source(
        price_currency_instance: PriceCurrencyConverterToPLN, amount: float) -> ConvertedPricePLN:
    """
    Fetches the currency rate from the chosen source and converts the amount to PLN.

    Args:
        price_currency_instance (PriceCurrencyConverterToPLN):
         An instance of PriceCurrencyConverterToPLN.
        amount (float): The amount to be converted.

    Returns:
        ConvertedPricePLN: The result of the conversion to PLN.

    Raises:
        ValueError: If the source is unsupported.
    """
    if price_currency_instance.source == 'json':
        currency_rate_from_json = price_currency_instance.fetch_currency_rate_from_json()
        json_result = (price_currency_instance.convert_to_pln
                       (currency_rate=currency_rate_from_json, price=amount))
        return json_result
    if price_currency_instance.source == 'api':
        currency_rate_from_api = price_currency_instance.fetch_currency_rate_from_api()
        api_result = (price_currency_instance.convert_to_pln
                      (currency_rate=currency_rate_from_api, price=amount))
        return api_result
    raise ValueError("Unsupported source")


@click.command(help="Converter app")
@click.argument('mode', type=click.Choice(['dev', 'prod']))
@click.argument('currency', type=str)
@click.argument('amount', type=float)
@click.argument("source", type=click.Choice(['json', 'api']))
def money_converter(mode: str, currency: str, amount: float, source: str):
    """
    A command-line converter application that fetches and converts currency rates.

    Args:
        mode (str): The mode in which to run the converter, either 'dev' or 'prod'.
        currency (str): The currency code.
        amount (float): The amount to be converted.
        source (str): The source of the currency rate, either 'json' or 'api'.

    Raises:
        ValueError: If an unsupported source is provided.
    """
    converter_instance = PriceCurrencyConverterToPLN(currency, source, mode)
    entity = create_new_entity(get_currency_rate_from_chosen_source(converter_instance, amount))

    if converter_instance.mode == 'dev':
        db_connector = JsonFileDatabaseConnector()
        db_connector.save(entity)
    elif converter_instance.mode == 'prod':
        db_connector = SqliteDatabaseConnector()
        db_connector.save(entity)

    logger.debug("Money conversion completed successfully")


if __name__ == '__main__':
    try:
        # pylint: disable=no-value-for-parameter
        money_converter()
    except ValueError as e:
        logger.error("ValueError: %s", e)
    except KeyError as e:
        logger.error("Issue with Key: %s", e)
    except TypeError as e:
        logger.error("Issue with Type: %s", e)
