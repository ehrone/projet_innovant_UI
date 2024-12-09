import { NavBar } from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
  const navigate = useNavigate(); 

  const goToModel = () => {
    navigate("/testOurModel");
  };

  const goToRecommendation = () => {
    navigate("/recommandation");
  };


  return (
    <div className="content">
      <NavBar />
      <h3>Revolutionize Skincare with AI</h3>

      <div className="section">
        <h4>Empower your customers with personalized skincare recommendations</h4>
        <p>
          While choosing skincare, it’s important to know your skin type—and this is the hardest part.
          Most people need to consult a specialist to get this information, making the process tedious and
          time-consuming.  
        </p>
        <p>
          Our AI solution determines your skin type with ease. By doing so, it narrows down the product 
          selection and recommends tailored options for your customers.
        </p>
        <button onClick={goToModel}>Test our solution</button>
      </div>

      <div className="section">
        <h4>Enable your customers to find matching products easily</h4>
        <p>
          With this solution, your clients can browse a list of products tailored to their needs—
          even if they already know their skin type. Let them find the perfect match effortlessly.
        </p>
        <button onClick={goToRecommendation}>Test recommendation system</button>
      </div>
    </div>
  );
};
