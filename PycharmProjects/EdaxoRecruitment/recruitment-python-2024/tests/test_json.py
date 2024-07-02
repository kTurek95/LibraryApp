"""
Module containing tests for the json module
"""

import json
import pytest
from task.connectors.database.json import JsonFileDatabaseConnector
from tests.test_sqlite import create_entity


@pytest.fixture(name="temp_json_file")
def temp_json_file_fixture(tmp_path):
    """
    Pytest fixture to create a temporary JSON file for testing.

    Args:
        tmp_path (pathlib.Path): A temporary path provided by pytest for test files.

    Returns:
        pathlib.Path: Path to the temporary JSON file.
    """
    temp_file = tmp_path / "temp_database.json"
    temp_file.write_text(json.dumps({}))
    return temp_file


@pytest.fixture(name="json_connector")
def json_connector_fixture(temp_json_file):
    """
    Pytest fixture to create a JsonFileDatabaseConnector instance for testing.

    Args:
        temp_json_file (pathlib.Path): Path to the temporary JSON file.

    Returns:
        JsonFileDatabaseConnector:
         An instance of JsonFileDatabaseConnector connected to the temporary JSON file.
    """
    class TestJsonFileDatabaseConnector(JsonFileDatabaseConnector):
        """
        TestJsonFileDatabaseConnector is a subclass of JsonFileDatabaseConnector
        designed for testing purposes. It handles reading from and writing to a JSON file
        used as a database.
        """
        def __init__(self, file_path):
            super().__init__()
            self.file_path = file_path
            self._data = self._read_data()

        def _read_data(self) -> dict:
            try:
                with open(self.file_path, "r", encoding='UTF-8') as file:
                    return json.load(file)
            except FileNotFoundError:
                return {}
            except json.JSONDecodeError as e:
                raise ValueError(f"The file {self.file_path} is not a valid JSON file.") from e

        def _write_data(self) -> None:
            with open(self.file_path, "w", encoding='UTF-8') as file:
                json.dump(self._data, file, indent=4)

    return TestJsonFileDatabaseConnector(file_path=str(temp_json_file))


def test_save_and_get_all(json_connector):
    """
    Tests saving a new entity and retrieving all entities from the JSON database.

    Args:
        json_connector (JsonFileDatabaseConnector): The JSON database connector fixture.

    Asserts:
        - The number of entities retrieved is 1.
        - The retrieved entity has the expected ID, currency, and rate.
    """
    new_entity = create_entity()
    entity_id = json_connector.save(new_entity)
    all_entities = json_connector.get_all()

    assert len(all_entities) == 1
    assert all_entities[0]['id'] == entity_id
    assert all_entities[0]['currency'] == "usd"
    assert all_entities[0]['rate'] == 3.85


def test_get_by_id(json_connector):
    """
    Tests retrieving an entity by its ID from the JSON database.

    Args:
        json_connector (JsonFileDatabaseConnector): The JSON database connector fixture.

    Asserts:
        - The retrieved entity is not None.
        - The retrieved entity has the expected ID, currency, and rate.
    """
    new_entity = create_entity()
    entity_id = json_connector.save(new_entity)
    entity = json_connector.get_by_id(entity_id)

    assert entity is not None
    assert entity['id'] == entity_id
    assert entity['currency'] == "usd"
    assert entity['rate'] == 3.85


def test_get_by_id_not_found(json_connector):
    """
    Tests retrieving an entity by an ID that does not exist in the JSON database.

    Args:
        json_connector (JsonFileDatabaseConnector): The JSON database connector fixture.

    Asserts:
        - The retrieved entity is None.
    """
    entity = json_connector.get_by_id(999)
    assert entity is None
