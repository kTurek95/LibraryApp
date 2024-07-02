"""
Module containing unit tests for the sqlite module
"""

import pytest
from task.connectors.database.sqlite import SqliteDatabaseConnector


def create_entity() -> dict:
    """
    Creates a new entity dictionary for testing purposes.

    Returns:
        dict: A dictionary representing a new entity.
    """
    new_entity = {
        "currency": "usd",
        "rate": 3.85,
        "price_in_pln": 50.0,
        "date": "2024-01-01"
    }

    return new_entity


@pytest.fixture(name="sqlite_connector")
def sqlite_connector_fixture(tmp_path):
    """
    Pytest fixture to create a SqliteDatabaseConnector instance for testing.

    Args:
        tmp_path (pathlib.Path): A temporary path provided by pytest for test files.

    Returns:
        SqliteDatabaseConnector:
        An instance of SqliteDatabaseConnector connected to a temporary database.
    """
    db_path = tmp_path / "test_database.sqlite3"
    connector = SqliteDatabaseConnector(db_name=str(db_path))
    return connector


def test_save_and_get_all(sqlite_connector):
    """
    Tests saving a new entity and retrieving all entities from the database.

    Args:
        sqlite_connector (SqliteDatabaseConnector): The database connector fixture.

    Asserts:
        - The number of entities retrieved is 1.
        - The retrieved entity has the expected ID, currency, and rate.
    """
    new_entity = create_entity()
    entity_id = sqlite_connector.save(new_entity)
    all_entities = sqlite_connector.get_all()

    assert len(all_entities) == 1
    assert all_entities[0]['id'] == entity_id
    assert all_entities[0]['currency'] == "usd"
    assert all_entities[0]['rate'] == 3.85


def test_get_by_id(sqlite_connector):
    """
    Tests retrieving an entity by its ID from the database.

    Args:
        sqlite_connector (SqliteDatabaseConnector): The database connector fixture.

    Asserts:
        - The retrieved entity is not None.
        - The retrieved entity has the expected ID, currency, and rate.
    """
    new_entity = create_entity()
    entity_id = sqlite_connector.save(new_entity)
    entity = sqlite_connector.get_by_id(entity_id)

    assert entity is not None
    assert entity['id'] == entity_id
    assert entity['currency'] == "usd"
    assert entity['rate'] == 3.85


def test_get_by_id_not_found(sqlite_connector):
    """
    Tests retrieving an entity by an ID that does not exist in the database.

    Args:
        sqlite_connector (SqliteDatabaseConnector): The database connector fixture.

    Asserts:
        - The retrieved entity is None.
    """
    entity = sqlite_connector.get_by_id(999)
    assert entity is None
