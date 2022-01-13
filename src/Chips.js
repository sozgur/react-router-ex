import { Link } from "react-router-dom";
import "./Chips.css";

const Chips = () => {
    return (
        <div className="Chips">
            <h1>Vineger Chips</h1>
            <p>Yummmy one!</p>
            <img
                src="https://m.media-amazon.com/images/I/7103FmV8ORL._SL1454_.jpg"
                alt="Chips"
            />
            <Link exact to="/">
                Go Back
            </Link>
        </div>
    );
};

export default Chips;
