import "../styles/Banner.css";

function Banner({children}) {
    // const title = "La maison jungle";
    return (
        <div className="lmj-banner">
            {children}
        </div>
    );
}

export default Banner;