import { useState } from "react";

import "../styles/ShoppingList.css";

import {plantList} from "../data/plantList";

import PlantItem from "./PlantItem.js";
import Categories from "./Categories.js";


function ShoppingList({cart, updateCart}) {
    const plantCategories = [];
    const [selectedCategory, setSelectedCategory] = useState("");
    
    
    plantList.forEach(
        (plant) => {
            if (!plantCategories.includes(plant.category)) 
                plantCategories.push(plant.category);
        }
    );

    function addToCart(name, price) {
		const plantAdded = cart.find((plant) => plant.name === name);

		if (plantAdded) {
			const cartWhithoutPlantAdded = cart.filter(
				(plant) => plant.name !== name
			);

			updateCart([
				...cartWhithoutPlantAdded,
				{ name: name, price: price, amount: plantAdded.amount + 1 }
			]);
		} else {
			updateCart([...cart, { name: name, price: price, amount: 1 }]);
		}
	}
    
    return (
        <div className='lmj-shopping-list'>
            <Categories 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                plantCategories={plantCategories}
            />

            <ul className="lmj-plant-list">
                {
                    plantList.map((plant) => (
                        !selectedCategory || selectedCategory === plant.category ? (
                            <div key={plant.id} className="lmj-plant-card">
                                <PlantItem 
                                    id={plant.id} 
                                    cover={plant.cover} 
                                    name={plant.name} 
                                    water={plant.water} 
                                    light={plant.light}
                                    isSpecialOffer={plant.isSpecialOffer}
                                    price={plant.price}
                                />

                                <button 
                                    className="lmj-plant-list-btn" 
                                    onClick={() => addToCart(plant.name, plant.price)}
                                >
                                    Ajouter
                                </button>
                            </div>
                        ) : null
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList;