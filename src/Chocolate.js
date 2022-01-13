import { Link } from "react-router-dom";
import "./Chocolate.css";

const Chocolate = () => {
    return (
        <div className="Chocolate">
            <h1>Kinder Buono</h1>
            <p>This is everyone's favorite one!</p>

            <img
                src="https://images.heb.com/is/image/HEBGrocery/002981003"
                alt="Chocolate"
            />
            <Link exact to="/">
                Go Back
            </Link>
        </div>
    );
};

export default Chocolate;
