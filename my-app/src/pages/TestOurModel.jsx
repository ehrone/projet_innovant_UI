import React, { useState, useRef } from "react";
import { NavBar } from "../Components/NavBar";

export const TestOurModel = (props) => {
  const [photo, setPhoto] = useState(null); // the captured photo
  const [isCapturing, setIsCapturing] = useState(false); // the capturing state
  const [errorMessage, setErrorMessage] = useState(""); // Error message for camera
  const videoRef = useRef(null); // the video element
  const canvasRef = useRef(null); //  canvas element

  const handleStartCamera = async () => {
    setErrorMessage(""); // Reset error message
    setPhoto(null); // Reset photo
    setIsCapturing(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      setIsCapturing(false);
      if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
        setErrorMessage("No camera detected. Please connect a camera and try again.");
      } else if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        setErrorMessage("Camera access was denied. Please allow camera access in your browser settings.");
      } else {
        setErrorMessage("An unexpected error occurred while trying to access the camera.");
      }
    }
  };

  const handleCapturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png");
      setPhoto(imageData);

      // Stop the video stream
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      setIsCapturing(false);
    }
  };

  return (
    <div className="content">
      <NavBar />
      <div className="testModelContent">
        <div className="section">
          <h2 className="testModelTitle">Test Our Model</h2>
          <p className="testModelDescription">
            To get personalized skincare recommendations, we need to analyze your skin.
            Simply take a clear photo of your face, and our model will process it to 
            provide tailored skincare suggestions based on your unique features.
          </p>
        </div>
        <div className="section">
          <h3>How to Take the Perfect Photo</h3>
          <ul>
            <li>Ensure your face is well-lit and free of shadows.</li>
            <li>Make sure there are no obstructions like hair covering your face.</li>
            <li>Position your camera at eye level for the best perspective.</li>
            <li>Avoid using filters to get an accurate analysis.</li>
          </ul>
          {!photo ? (
            <>
              <button onClick={handleStartCamera} disabled={isCapturing}>
                {isCapturing ? "Starting Camera..." : "Start Camera"}
              </button>
              {isCapturing && (
                <div>
                  <video ref={videoRef} style={{ maxWidth: "100%", marginTop: "10px" }} />
                  <canvas ref={canvasRef} style={{ display: "none" }} />
                  <button onClick={handleCapturePhoto} style={{ marginTop: "10px" }}>
                    Capture Photo
                  </button>
                </div>
              )}
            </>
          ) : (
            <div>
              <h4>Preview:</h4>
              <img src={photo} alt="Captured" style={{ maxWidth: "100%" }} />
              <button onClick={handleStartCamera} style={{ marginTop: "10px" }}>
                Retake Photo
              </button>
            </div>
          )}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};
