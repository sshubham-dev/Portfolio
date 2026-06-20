from fastapi import FastAPI, Request
from api.routes.pages import router as pages_router
from api.routes.ai import router as ai_router
from api.routes.contact import router as contact_router
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="../static"), name="static")
app.include_router(pages_router)
app.include_router(ai_router)
app.include_router(contact_router)

