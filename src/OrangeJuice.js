import { Link } from "react-router-dom";
import "./OrangeJuice.css";

const OrangeJuice = () => {
    return (
        <div className="OrangeJuice">
            <h1>Orange Juice</h1>
            <p>This is very delicios juice!</p>

            <img
                src="https://d3lbhvavid9616.cloudfront.net/assets/products/53797/1587141668099.jpg"
                alt="Orange juice"
            />

            <Link exact to="/">
                Go Back
            </Link>
        </div>
    );
};

export default OrangeJuice;
