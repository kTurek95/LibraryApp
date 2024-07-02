import logging
from sqlalchemy import create_engine, Column, Integer, String, Float, Date
from sqlalchemy.orm import declarative_base, sessionmaker
from datetime import datetime

logger = logging.getLogger(__name__)

Base = declarative_base()


class CurrencyRate(Base):
    """
    SQLAlchemy model for the currency_rates table.

    Attributes:
        id (int): Primary key.
        currency (str): The currency code.
        rate (float): The exchange rate.
        price_in_pln (float): The price in PLN.
        date (datetime.date): The date of the rate.
    """
    __tablename__ = 'currency_rates'

    id = Column(Integer, primary_key=True)
    currency = Column(String, nullable=False)
    rate = Column(Float, nullable=False)
    price_in_pln = Column(Float, nullable=False)
    date = Column(Date, nullable=False)


class SqliteDatabaseConnector:
    """
    Connector for handling SQLite database operations using SQLAlchemy.

    This class provides methods to interact with the SQLite database,
    including saving and retrieving currency rate entries.
    """
    def __init__(self, db_name='database.sqlite3'):
        """
        Initializes the SqliteDatabaseConnector.

        Args:
            db_name (str, optional): The name of the SQLite database file. Defaults to 'database.sqlite3'.
        """
        self.engine = create_engine(f'sqlite:///{db_name}')
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)
        self.session = self.Session()

    def save(self, entity: dict) -> int:
        """
        Saves a new currency rate entry to the database.

        Args:
            entity (dict): The entity to be saved, with keys 'currency', 'rate', 'price_in_pln', and 'date'.

        Returns:
            int: The ID of the saved entity.
        """
        new_entry = CurrencyRate(
            currency=entity['currency'],
            rate=entity['rate'],
            price_in_pln=entity['price_in_pln'],
            date=datetime.strptime(entity['date'], '%Y-%m-%d')
        )
        self.session.add(new_entry)
        self.session.commit()
        return new_entry.id

    def get_all(self) -> list[dict]:
        """
        Retrieves all currency rate entries from the database.

        Returns:
            list[dict]: A list of all currency rate entries.
        """
        results = self.session.query(CurrencyRate).all()
        return [self._row_to_dict(row) for row in results]

    def get_by_id(self, entity_id: int) -> dict:
        """
        Retrieves a currency rate entry by its ID.

        Args:
            entity_id (int): The ID of the entity to retrieve.

        Returns:
            dict: The currency rate entry with the specified ID, or None if the entity does not exist.
        """
        result = self.session.get(CurrencyRate, entity_id)
        if result:
            return self._row_to_dict(result)
        return None

    @staticmethod
    def _row_to_dict(row):
        """
        Converts a CurrencyRate row to a dictionary.

        Args:
            row (CurrencyRate): The row to convert.

        Returns:
            dict: The row data as a dictionary.
        """
        return {
            'id': row.id,
            'currency': row.currency,
            'rate': row.rate,
            'price_in_pln': row.price_in_pln,
            'date': row.date.strftime('%Y-%m-%d')
        }
