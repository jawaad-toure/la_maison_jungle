import '../styles/Footer.css';
import { useState } from 'react';

function Footer() {
	const [inputValue, setInputValue] = useState('');

	function handleInput(e) {
		setInputValue(e.target.value);
	}

	// function handleBlur() {
	// 	if (!inputValue.includes('@'))
	// 		alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥");
	// }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail </div>
			<input
				className='lmj-footer-elem'
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
			/>
			<button type='button' >Envoyer</button>
		</footer>
	);
}

export default Footer;