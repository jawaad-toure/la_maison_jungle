import "../styles/PlantItem.css";

import CareScale from "./CareScale.js";

function PlantItem({name, cover, id, light, water, isSpecialOffer, price}) {
   
    return (
		<li key={id} className="lmj-plant-item">
            <span className='lmj-plant-item-price'>{price}€</span>
            {isSpecialOffer && <div className="lmj-plant-item-sales">Soldes</div>}
			<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
			</div>
		</li>
    );
}

export default PlantItem;

