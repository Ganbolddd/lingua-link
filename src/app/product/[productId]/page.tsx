export default function ProductDetail({params}: {
  params: {productId: string};  
}) {
  return (
    <>
      <h1>This is product detail of Product {params.productId}</h1>
    </>
  );
}
