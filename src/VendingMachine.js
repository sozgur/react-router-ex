import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
    return (
        <>
            <h1>Hello This is Vending Machine</h1>
            <div className="VendingMachine">
                <img
                    style={{}}
                    src="https://mlnnx0p1ut8l.i.optimole.com/_C_aIyU-YHNEpTgh/w:900/h:1200/q:auto/https://uselectit.com/wp-content/uploads/evoke6.png"
                    alt="Vending Machine"
                />

                <div className="VendingMachine-list">
                    <Link exact to="/chocolate">
                        Chocolate
                    </Link>
                    <Link exact to="/chips">
                        Chips
                    </Link>
                    <Link exact to="/orange-juice">
                        Orange Juice
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VendingMachine;
