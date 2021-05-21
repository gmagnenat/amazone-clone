import Product from './Product';
export default function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => (
        <Product key={id} id title price description category image />
      ))}
    </div>
  );
}
