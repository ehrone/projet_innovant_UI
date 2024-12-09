import { NavBar } from "../Components/NavBar";

export const TestOurModel = (props) => {
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
          <button >Take a Photo</button>
        </div>
        
      </div>
    </div>
  );
};
