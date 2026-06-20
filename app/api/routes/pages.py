from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
from services.product_service import get_all_products, get_product_by_slug, get_products_by_category
from services.blog_service import get_all_blogs, get_blog_by_slug

router = APIRouter()
templates = Jinja2Templates(directory="../templates")

@router.get("/")
async def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="home.html",
        context={
            "name": "Shubham Kumar",
            "title": "Shubham Kumar's Portfolio",
            "current_page": "home",
        }
    )

@router.get("/about")
async def about(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="about.html",
        context={
            "title": "About Shubham Kumar",
            "skills": [ "Python", "FastAPI", "JavaScript", "Node.js", "MongoDB",],
            "current_page": "about"
        }
    )

@router.get("/products")
async def products(request: Request):
    all_products = get_all_products()
    if not all_products:
        return templates.TemplateResponse(
            request=request,
            name="404.html",
            context={
                "title": "Found a bug in the matrix",

            }
        )
    return templates.TemplateResponse(
        request=request,
        name="products.html",
        context={
            "title": "Real World Products by Shubham Kumar",
            "products": get_all_products(),
            "current_page": "products"
        }
    )

@router.get("/product/{slug}")
async def product_detail(request: Request, slug: str):
    
    product = get_product_by_slug(slug)
    if not product:
        return templates.TemplateResponse(
            request= request,
            name="404.html",
            context={
                "title": "Found a bug in the matrix",
            }
        )
    return templates.TemplateResponse(
        request= request,
        name="product_detail.html",
        context={
            "title": slug,
            "product": product,
            "current_page": "products"
        }
    )


@router.get('/product/category/{category}')
async def products_by_category(request: Request, category: str):
    product = get_products_by_category(category)
    if not product:
        return templates.TemplateResponse(
            request= request,
            name="404.html",
            context={
                "title": "Found a bug in the matrix",
            }
        )
    return templates.TemplateResponse(
        request=request,
        name="products.html",
        context={
            "title": category,
            "product": product,
            "current_page":"products"
        }
    )


@router.get("/blogs")
async def blogs(request: Request):
    all_blogs = get_all_blogs()
    if not all_blogs:
            return templates.TemplateResponse(
                request=request,
                name="404.html",
                context={
                    "title": "Found a bug in the matrix",
                }
            )
    return templates.TemplateResponse(
        request=request,
        name="blog.html",
        context={
            "title": "Experience of Shubham Kumar",
            "current_page": "blogs",
            "blogs": all_blogs
        }
    )


@router.get("/blog/{slug}")
async def blog(request: Request, slug: str):
    blog_by_slug = get_blog_by_slug(slug)
    if not blog_by_slug:
        return templates.TemplateResponse(
            request=request,
            name="404.html",
            context={
                "title": "Found a bug in the matrix",
            }
        )
    return templates.TemplateResponse(
        request=request,
        name="blog_detail.html",
        context={
            "title": slug,
            "current_page":"blogs",
            "blog": blog_by_slug
        }
    )


@router.get("/contact")
async def contact(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="contact.html",
        context={
            "title": "Contact Shubham Kumar",
            "current_page": "contact"
        }
    )


@router.get("/hire-me")
async def hire_me(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="contact.html",
        context={
            "title": "Hire Shubham Kumar",
            "current_page": "hire-me"
        }
    )


@router.get("/search")
async def search(q: str = None):
    return {"query":q}


@router.get("/health")
async def get_health(request: Request):
    return {
        "status": "Healthy"
    }