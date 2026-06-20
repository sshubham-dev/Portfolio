from pydantic import BaseModel

class Product(BaseModel):
    title: str
    slug: str
    description: str
    category: str
    image_url: str
    tech: list[str]