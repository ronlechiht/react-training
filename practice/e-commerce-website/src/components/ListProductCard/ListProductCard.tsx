import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../types/Procduct';
import './ListProductCard.css';

export default function ListProductCard({ products }: { products: Product[] }) {
  return (
    <ul className="list-product-card">
      {products.map((product) => (
        <li key={product.productId}>
          <ProductCard {...product}></ProductCard>
        </li>
      ))}
    </ul>
  );
}
