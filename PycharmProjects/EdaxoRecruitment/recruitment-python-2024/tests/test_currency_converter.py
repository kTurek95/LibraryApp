from unittest.mock import patch, Mock
import datetime
import pytest
from task.currency_converter import PriceCurrencyConverterToPLN


@pytest.fixture
def setup_converter():
    """
    Pytest fixture to set up a PriceCurrencyConverterToPLN instance for testing.

    Returns:
        PriceCurrencyConverterToPLN:
        An instance of PriceCurrencyConverterToPLN with currency set to 'USD',
        source set to 'api', and mode set to 'dev'.
    """
    return PriceCurrencyConverterToPLN(currency="USD", source="api", mode="dev")


@patch('requests.get')
def test_fetch_currency_rate_from_api(mock_get, setup_converter):
    """
    Tests fetching the currency rate from the API.

    Args:
        mock_get (Mock): Mock object for requests.get.
        setup_converter (PriceCurrencyConverterToPLN): The converter instance fixture.

    Asserts:
        - The fetched currency rate is 4.0.
    """
    mock_response = Mock()
    mock_response.json.return_value = {
        "rates": [
            {"mid": 4.0}
        ]
    }
    mock_get.return_value = mock_response

    rate = setup_converter.fetch_currency_rate_from_api()
    assert rate == 4.0


@patch('task.connectors.local.file_reader.read_local_file')
def test_fetch_currency_rate_from_json(mock_read_local_file, setup_converter):
    """
    Tests fetching the currency rate from a JSON file.

    Args:
        mock_read_local_file (Mock): Mock object for file_reader.read_local_file.
        setup_converter (PriceCurrencyConverterToPLN): The converter instance fixture.

    Asserts:
        - The fetched currency rate is 3.5.
    """
    mock_response = {
        "USD": [
            {"rate": 3.5}
        ]
    }
    mock_read_local_file.return_value = mock_response
    setup_converter.source = "json"
    rate = setup_converter.fetch_currency_rate_from_json()
    assert rate == 3.5


def test_convert_to_pln(setup_converter):
    """
    Tests converting a given amount to PLN using the specified currency rate.

    Args:
        setup_converter (PriceCurrencyConverterToPLN): The converter instance fixture.

    Asserts:
        - The converted price in the source currency is 100.0.
        - The currency code is 'USD'.
        - The currency rate is 4.0.
        - The converted price in PLN is 400.0.
        - The currency rate fetch date is today's date.
    """
    converted = setup_converter.convert_to_pln(currency_rate=4.0, price=100.0)
    assert converted.price_in_source_currency == 100.0
    assert converted.currency == "USD"
    assert converted.currency_rate == 4.0
    assert converted.price_in_pln == 400.0
    assert converted.currency_rate_fetch_date == str(datetime.date.today())
