import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}


function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];
	const scaleType = careType === 'light' ? <img src={Water} alt="Water icon" /> : <img src={Sun} alt="Sun icon" />;

    return (
        <div onClick={() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`
            )
        }>
            {
                range.map(
                    (rangeElem) => scaleValue >= rangeElem ? (
                        <span key={rangeElem.toString()}>{scaleType}</span>
                    ) : null
                )
            }
        </div>
    );
}
    
export default CareScale;