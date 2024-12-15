from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os
from pathlib import Path
from uuid import uuid4

UPLOAD_DIR = Path("uploads")
MASK_DIR = Path("masks")

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
MASK_DIR.mkdir(parents=True, exist_ok=True)

app = FastAPI()

# Serve React static files
app.mount("/", StaticFiles(directory="build", html=True), name="static")

# Endpoint to upload an image
@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    filename = f"{uuid4()}.png"
    file_path = UPLOAD_DIR / filename
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())
    return {"filename": filename}

# Endpoint to upload the mask
@app.post("/upload-mask/")
async def upload_mask(file: UploadFile = File(...), filename: str = ""):
    if not filename:
        return {"error": "Filename is required"}
    mask_path = MASK_DIR / filename
    with open(mask_path, "wb") as buffer:
        buffer.write(await file.read())
    return {"mask_filename": filename}

# Endpoint to get the original image
@app.get("/image/{filename}")
async def get_image(filename: str):
    file_path = UPLOAD_DIR / filename
    if file_path.exists():
        return FileResponse(file_path)
    return {"error": "Image not found"}

# Endpoint to get the mask
@app.get("/mask/{filename}")
async def get_mask(filename: str):
    mask_path = MASK_DIR / filename
    if mask_path.exists():
        return FileResponse(mask_path)
    return {"error": "Mask not found"}
