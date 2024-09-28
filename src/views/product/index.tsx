import { useBoundStore } from "../../store/useBoundStore.ts";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const { products, fetchProducts, addToCart } = useBoundStore(
    (state) => state,
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-[1080px] ml-auto mr-auto">
      {products.map((product) => {
        return (
          <div className="flex flex-col items-center justify-center border rounded w-full max-w-2xl my-2 p-2">
            <p className="font-bold">{product.name}</p>
            <p className="text-yellow-500 text-xl font-bold">
              R$ {product.price}
            </p>
            <img className="w-36 mt-8" src={product.image} alt="" />
            <button
              onClick={() =>
                addToCart({
                  productId: product.id,
                  productName: product.name,
                  productImage: product.image,
                  productPrice: product.price,
                })
              }
              className="bg-yellow-500 font-bold py-2 px-4 rounded mt-2 cursor-pointer"
            >
              Adicionar ao carrinho
            </button>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default Product;
