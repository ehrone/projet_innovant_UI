from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from tensorflow.keras.preprocessing import image
import numpy as np
import tensorflow as tf
from io import BytesIO
from PIL import Image

app = FastAPI()

@app.post("/analyse", response_model=dict)
async def analyse(file: UploadFile = File(...)):
    try:
        if file.content_type not in ["image/jpeg", "image/png"]:
            return JSONResponse(status_code=400, content={"error": "Invalid file type. Only JPEG and PNG are allowed."})
        if file == None:
            return JSONResponse(status_code=400, content={"error": "No file was sent."})

        contents = await file.read()
        preprocessed_image = preprocess_image(contents)

        model = tf.keras.models.load_model("best_model.h5")
        print("Model loaded successfully!")

        predictions = model.predict(preprocessed_image)
        predicted_class = np.argmax(predictions, axis=1)

        class_name = {0: "dry", 1: "normal", 2: "oily"}
        return {"skin_type": class_name[predicted_class[0]]}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

def preprocess_image(image_content, target_size=(250, 250)):
    img = Image.open(BytesIO(image_content))
    img = img.convert("RGB")
    img = img.resize(target_size)
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0
    return img_array