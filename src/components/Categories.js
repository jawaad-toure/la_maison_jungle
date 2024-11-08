import '../styles/Categories.css';

function Categories({ setSelectedCategory, plantCategories, selectedCategory }) {
	
    return (
		<div className='lmj-categories'>
            <label>Catégories</label>

			<select
				value={selectedCategory}
				onChange={(e) => setSelectedCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value="">Tous les catégories</option>
				{
                    plantCategories.map((plantCategory) => (
                        <option key={plantCategory} value={plantCategory}>
                            {plantCategory}
                        </option>
                    ))
                }
			</select>
			<button onClick={() => setSelectedCategory("")}>Réinitialiser</button>
		</div>
	);
}

export default Categories;