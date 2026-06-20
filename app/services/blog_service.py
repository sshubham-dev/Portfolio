from db.database import blogs_collection

def get_all_blogs():
    response = list(blogs_collection.find())
    print("response: ", response)
    return response

def get_blog_by_slug(slug: str):
    response = blogs_collection.find_one({"slug": slug})
    print("res: ", response)
    return response

def update_blog_status(slug: str, status: str):
    response = blogs_collection.update_one({"slug": slug}, {"status": status}, upsert=False)
    print("res", response)
    return response

def delete_blog(slug: str):
    response = blogs_collection.delete_one({"slug": slug})
    print("res", response)
    return response