import { createContext, useReducer, ReactNode, useEffect, useState } from 'react';
import { CartState } from '../types/CartState';
import { CartAction } from '../types/CartAction';
import { CartProduct } from '../types/CartProduct';
import { Product } from '../types/Procduct';
import { CART_API, PRODUCTS_API } from '../constants';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, items: action.payload, countItems: action.payload.length };

    case 'ADD_ITEM':
      const addedItems = [...state.items];
      addedItems.push(action.payload);
      const countAddedItems = addedItems.length;

      return { items: addedItems, countItems: countAddedItems };

    case 'UPDATE_ITEM':
      const updatedItems = [...state.items];
      updatedItems[
        updatedItems.findIndex((item) => item.id === action.payload.id)
      ].productQuantity = action.payload.productQuantity;
      return { ...state, items: updatedItems };

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter((item) => item.id !== action.payload);
      const countFilteredItems = filteredItems.length;
      return { items: filteredItems, countItems: countFilteredItems };

    default:
      return state;
  }
};

interface CartContextProps {
  state: CartState;
  addItem: (item: CartProduct) => void;
  updateItem: (item: CartProduct) => void;
  removeItem: (id: string) => void;
  products: Product[];
}

const initialCartState: CartState = {
  items: [],
  countItems: 0
};

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const [products, setProducts] = useState<Product[]>([]);

  const addItem = (item: CartProduct) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const updateItem = (item: CartProduct) => {
    dispatch({ type: 'UPDATE_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(PRODUCTS_API);
      const data = await response.json();
      setProducts(data);
    };

    const fetchCartItems = async () => {
      const response = await fetch(CART_API);
      const data = await response.json();
      dispatch({ type: 'SET_CART', payload: data });
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ state, addItem, updateItem, removeItem, products }}>
      {children}
    </CartContext.Provider>
  );
};
