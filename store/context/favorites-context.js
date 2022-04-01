import { createContext, useState } from "react";

export const FavoritesContext = createContext({
   ids: [],
   addFavorite: (id) => {},
   removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
   const [favoriteMealIds, setFavoriteMealIds] = useState([]);

   const addFavorite = (id) => {
      setFavoriteMealIds((state) => [...state, id]);
   };

   const removeFavorite = (id) => {
      setFavoriteMealIds((state) => state.filter((itemId) => itemId !== id));
   };

   const value = {
      ids: favoriteMealIds,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
   };

   return (
      <FavoritesContext.Provider value={value}>
         {children}
      </FavoritesContext.Provider>
   );
};

export default FavoritesContextProvider;
