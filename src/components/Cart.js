import "../styles/Cart.css";

import { useState, useEffect } from "react";

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(false);
	const total = cart.reduce(
		(acc, plant) => acc + plant.amount * plant.price,
		0
	);

    useEffect(
        () => {
            document.title = `LMJ: ${total}€ d'achats`
        },
        [total]
    );

    return isOpen ? (
        <div className="lmj-cart">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>

            <h2>Panier</h2>
            
			<div className="lmj-cart-list">
				{
                    cart.map(({ name, price, amount }, index) => (
					<div key={`${name}-${index}`}>
						{name} {price}€ x {amount}
					</div>
					))
                }
			</div>

            <h3>Total : {total}€</h3>

            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className="lmj-cart-closed" >
            <button 
                className="lmj-cart-toggle-button" 
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le panier
            </button>
        </div>
    );
}

export default Cart;