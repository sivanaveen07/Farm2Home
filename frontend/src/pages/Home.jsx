import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png.jpg";
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
                    Discover seasonal produce sourced directly from farmers and FPOs.
                    Better returns for growers, fresher food for your family, and a more
                    transparent food system for everyone.
                </p>

                <div className="hero-actions">
                    <Link className="hero-action hero-action-primary" to="/products">
                        Shop produce
                    </Link>
                    <Link className="hero-action hero-action-secondary" to="/farmers">
                        Sell on Farm2Home
                    </Link>
                </div>

                <div className="hero-trust">
                    <div>
                        <strong>12k+</strong>
                        <span>Families served</span>
                    </div>
                    <div>
                        <strong>98%</strong>
                        <span>Freshness rating</span>
                    </div>
                    <div>
                        <strong>450+</strong>
                        <span>Farmer partners</span>
                    </div>
                </div>

                <p className="hero-note">
                    Direct sourcing <span aria-hidden="true">·</span> Delivery support <span aria-hidden="true">·</span> Fairer trade
                </p>
            </div>

            <div className="hero-visual">
                <div className="hero-badge">Farm-picked today</div>
                <img
                    className="hero-image"
                    src={heroImage}
                    alt="Fresh produce from local farms"
                />
                <div className="hero-card">
                    <span className="card-label">This week’s basket</span>
                    <strong>Organic vegetables</strong>
                    <small>Freshly harvested · 4.8 km away</small>
                </div>
            </div>
        </section>
    );
}

export default Home;