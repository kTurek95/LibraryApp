import json
from task.config import JSON_DATABASE_NAME


class JsonFileDatabaseConnector:
    """
    Connector for handling a JSON file as a simple database.
    """
    def __init__(self, file_path=None) -> None:
        """
       Initializes the JsonFileDatabaseConnector.

       Args:
           file_path (str, optional): The path to the JSON file. Defaults to None,
                                      which uses the JSON_DATABASE_NAME from the config.
       """
        self.file_path = file_path or JSON_DATABASE_NAME
        self._data = self._read_data()

    def _read_data(self) -> dict:
        """
        Reads data from the JSON file.

        Returns:
            dict: The data read from the JSON file, or an empty dictionary if the file does not exist.

        Raises:
            ValueError: If the file exists but is not a valid JSON file.
        """
        try:
            with open(self.file_path, "r") as file:
                return json.load(file)
        except FileNotFoundError:
            return {}
        except json.JSONDecodeError:
            raise ValueError(f"The file {self.file_path} is not a valid JSON file.")

    def _write_data(self) -> None:
        """
        Writes data to the JSON file.
        """
        with open(self.file_path, "w") as file:
            json.dump(self._data, file, indent=4)

    def save(self, entity: dict) -> int:
        """
        Saves a new entity to the database.

        Args:
            entity (dict): The entity to be saved.

        Returns:
            int: The ID of the saved entity.
        """
        entity_id = max(map(int, self._data.keys()), default=0) + 1
        new_entity = {'id': entity_id}
        new_entity.update(entity)
        self._data[str(entity_id)] = new_entity
        self._write_data()
        return entity_id

    def get_all(self) -> list[dict]:
        """
        Retrieves all entities from the database.

        Returns:
            list[dict]: A list of all entities in the database.
        """
        return list(self._data.values())

    def get_by_id(self, entity_id: int) -> dict:
        """
        Retrieves an entity by its ID.

        Args:
            entity_id (int): The ID of the entity to retrieve.

        Returns:
            dict: The entity with the specified ID, or None if the entity does not exist.
        """
        return self._data.get(str(entity_id))
