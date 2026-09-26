import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import "./Home.css";

function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-eyebrow">A shorter journey from farm to table</p>
                <h1>
                    Fresh from farms,
                    <span>directly to your home.</span>
                </h1>
                <p className="hero-description">
                    Shop produce sourced directly from farmers and FPOs. Better
                    returns for growers, fresh food and fair value for your table.
                </p>
                <div className="hero-actions">
                    <Link className="hero-action hero-action-primary" to="/products">
                        Shop produce
                    </Link>
                    <Link className="hero-action hero-action-secondary" to="/farmers">
                        Sell on Farm2Home
                    </Link>
                </div>
                <p className="hero-note">Direct sourcing <span aria-hidden="true">·</span> Delivery support <span aria-hidden="true">·</span> Fairer trade</p>
            </div>
            <img
                className="hero-image"
                src={heroImage}
                alt="Fresh produce from local farms"
            />
        </section>
    );
}

export default Home;