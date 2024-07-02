"""
Module containing the tests for the main module
"""

from unittest.mock import patch, Mock
import datetime
import pytest
from click.testing import CliRunner
from task.currency_converter import PriceCurrencyConverterToPLN
from task.__main__ import create_new_entity, get_currency_rate_from_chosen_source, money_converter

today = datetime.date.today()
today_date = today.strftime("%Y-%m-%d")


CURRENCY_JSON = "EUR"
SOURCE_JSON = "json"
MODE_JSON = "dev"
AMOUNT_JSON = "100.0"
MOCK_CURRENCY_RATE_JSON = 4.15
MOCK_PRICE_IN_PLN_JSON = 415.0
MOCK_DATE_JSON = today_date
MOCK_ENTITY_JSON = {
    'currency': CURRENCY_JSON,
    'rate': MOCK_CURRENCY_RATE_JSON,
    'price_in_pln': MOCK_PRICE_IN_PLN_JSON,
    'date': MOCK_DATE_JSON
}


CURRENCY_API = "EUR"
SOURCE_API = "api"
MODE_API = "prod"
AMOUNT_API = "100.0"
MOCK_CURRENCY_RATE_API = 4.3
MOCK_PRICE_IN_PLN_API = 430.0
MOCK_DATE_API = today_date
MOCK_ENTITY_API = {
    'currency': CURRENCY_API,
    'rate': MOCK_CURRENCY_RATE_API,
    'price_in_pln': MOCK_PRICE_IN_PLN_API,
    'date': MOCK_DATE_API
}


@pytest.fixture(name="mock_price_currency_converter_json")
def mock_price_currency_converter_json_fixture():
    """
    Fixture for creating a mock PriceCurrencyConverterToPLN instance
    configured for JSON source data.

    Returns:
        Mock: A mock PriceCurrencyConverterToPLN instance.
    """
    mock_converter = Mock(spec=PriceCurrencyConverterToPLN)
    mock_converter.currency = CURRENCY_JSON
    mock_converter.source = SOURCE_JSON
    mock_converter.mode = MODE_JSON
    mock_converter.currency_rate = MOCK_CURRENCY_RATE_JSON
    mock_converter.price_in_pln = MOCK_PRICE_IN_PLN_JSON
    mock_converter.currency_rate_fetch_date = MOCK_DATE_JSON
    mock_converter.fetch_currency_rate_from_json.return_value = MOCK_CURRENCY_RATE_JSON
    mock_converter.convert_to_pln.return_value = MOCK_PRICE_IN_PLN_JSON
    return mock_converter


@pytest.fixture(name="mock_price_currency_converter_api")
def mock_price_currency_converter_api_fixture():
    """
    Fixture for creating a mock PriceCurrencyConverterToPLN instance
    configured for API source data.

    Returns:
        Mock: A mock PriceCurrencyConverterToPLN instance.
    """
    mock_converter = Mock(spec=PriceCurrencyConverterToPLN)
    mock_converter.currency = CURRENCY_JSON
    mock_converter.source = SOURCE_API
    mock_converter.mode = MODE_API
    mock_converter.currency_rate = MOCK_CURRENCY_RATE_API
    mock_converter.price_in_pln = MOCK_PRICE_IN_PLN_API
    mock_converter.currency_rate_fetch_date = MOCK_DATE_API
    mock_converter.fetch_currency_rate_from_api.return_value = MOCK_CURRENCY_RATE_API
    mock_converter.convert_to_pln.return_value = MOCK_PRICE_IN_PLN_API
    return mock_converter


def test_create_new_entity_json(mock_price_currency_converter_json):
    """
    Test for the create_new_entity function using JSON source data.

    Args:
        mock_price_currency_converter_json (Mock): The mock PriceCurrencyConverterToPLN instance.

    Asserts:
        dict: The entity created matches the expected mock entity for JSON source.
    """
    entity = create_new_entity(mock_price_currency_converter_json)
    assert entity == MOCK_ENTITY_JSON


def test_create_new_entity_api(mock_price_currency_converter_api):
    """
    Test for the create_new_entity function using API source data.

    Args:
        mock_price_currency_converter_api (Mock): The mock PriceCurrencyConverterToPLN instance.

    Asserts:
        dict: The entity created matches the expected mock entity for API source.
    """
    entity = create_new_entity(mock_price_currency_converter_api)
    assert entity == MOCK_ENTITY_API


def test_get_currency_rate_from_chosen_source_json(mock_price_currency_converter_json):
    """
    Test for the get_currency_rate_from_chosen_source function using JSON source data.

    Args:
        mock_price_currency_converter_json (Mock): The mock PriceCurrencyConverterToPLN instance.

    Asserts:
        float: The price in PLN matches the expected value for JSON source.
    """
    result = (get_currency_rate_from_chosen_source
              (mock_price_currency_converter_json, float(AMOUNT_JSON)))
    assert result == MOCK_PRICE_IN_PLN_JSON
    mock_price_currency_converter_json.fetch_currency_rate_from_json.assert_called_once()
    (mock_price_currency_converter_json.convert_to_pln.assert_called_once_with
     (currency_rate=MOCK_CURRENCY_RATE_JSON, price=float(AMOUNT_JSON)))


def test_get_currency_rate_from_chosen_source_api(mock_price_currency_converter_api):
    """
    Test for the get_currency_rate_from_chosen_source function using API source data.

    Args:
        mock_price_currency_converter_api (Mock): The mock PriceCurrencyConverterToPLN instance.

    Asserts:
        float: The price in PLN matches the expected value for API source.
    """
    result = (get_currency_rate_from_chosen_source
              (mock_price_currency_converter_api, float(AMOUNT_API)))
    assert result == MOCK_PRICE_IN_PLN_API
    mock_price_currency_converter_api.fetch_currency_rate_from_api.assert_called_once()
    (mock_price_currency_converter_api.convert_to_pln.assert_called_once_with
     (currency_rate=MOCK_CURRENCY_RATE_API, price=float(AMOUNT_API)))


@patch('task.connectors.database.json.JsonFileDatabaseConnector.save')
def test_money_converter_dev(mock_save, mock_price_currency_converter_json):
    """
    Test for the money_converter function in dev mode using JSON source data.

    Args:
        mock_save (Mock): The mock save method of JsonFileDatabaseConnector.
        mock_price_currency_converter_json (Mock): The mock PriceCurrencyConverterToPLN instance.

    Asserts:
        int: The exit code of the CLI runner is 0.
        Mock: The save method is called once with the expected mock entity for JSON source.
    """
    runner = CliRunner()
    with patch('task.currency_converter.PriceCurrencyConverterToPLN',
               return_value=mock_price_currency_converter_json):
        result = runner.invoke(money_converter, ['dev', 'EUR', '100.0', 'json'])
        assert result.exit_code == 0
        mock_save.assert_called_once_with(MOCK_ENTITY_JSON)


@patch('task.connectors.database.sqlite.SqliteDatabaseConnector.save')
def test_money_converter_prod(mock_save, mock_price_currency_converter_api):
    """
    Test for the money_converter function in prod mode using API source data.

    Args:
        mock_save (Mock): The mock save method of SqliteDatabaseConnector.
        mock_price_currency_converter_api (Mock): The mock PriceCurrencyConverterToPLN instance.

    Asserts:
        int: The exit code of the CLI runner is 0.
        Mock: The save method is called once with the expected mock entity for API source.
    """
    runner = CliRunner()
    with patch('task.currency_converter.PriceCurrencyConverterToPLN',
               return_value=mock_price_currency_converter_api):
        result = runner.invoke(money_converter, ['prod', 'EUR', '100.0', 'api'])
        assert result.exit_code == 0
        mock_save.assert_called_once_with(MOCK_ENTITY_API)
