import FavoritesTmpl from '../../templates/card-favorites.hbs';

const favoritesContainer = document.querySelector('.favorites-hbs');

console.log();

const user = {
	foto: 'foto',
	name: 'монстера',
	price: '30',
};

const favoritesTmpl = FavoritesTmpl();

console.log();

favoritesContainer.innerHTML = FavoritesTmpl(user);