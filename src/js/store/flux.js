const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: { name: [], link: [] },
			characters: [],
			planets: []
		},
		actions: {
			addFavorite: (name, sel, id, icon) => {
				if (getStore().favorites.name.includes(name)) {
				} else {
					setStore({
						favorites: {
							name: [...getStore().favorites.name, name],
							link: [...getStore().favorites.link, [sel, id, icon]]
						}
					});
				}
			},
			removeFavorite: fav => {
				const id = getStore().favorites.name.indexOf(fav);
				const newFav = getStore().favorites.name.filter(value => {
					return value !== fav;
				});
				const newLink = getStore().favorites.link.filter((value, index) => {
					return index !== id;
				});
				setStore({ favorites: { name: newFav, link: newLink } });
			},
			loadData: () => {
				fetch(`https://swapi.dev/api/people/`)
					.then(res1 => res1.json())
					.then(data1 => {
						setStore({ characters: data1.results });
					});
				fetch(`https://swapi.dev/api/planets/`)
					.then(res2 => res2.json())
					.then(data2 => {
						setStore({ planets: data2.results });
					});
			}
		}
	};
};

export default getState;