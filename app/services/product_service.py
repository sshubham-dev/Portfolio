from db.database import products_collection

def get_all_products():
    result = products_collection.find()
    print("results: ", list(result))
    return result

def get_product_by_slug(slug: str):
    result = products_collection.find_one({"slug": slug})
    print("result: ", result)
    return result
    
def get_products_by_category(category: str):
    print(category)
    result = products_collection.find({"category": category})
    print("result: ", list(result))
    return list(result)