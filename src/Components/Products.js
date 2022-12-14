import React from "react";

const Products = ({ products , addtoCaet}) => {
  const { strCategory, strDrinkThumb, strInstructions} = products;


  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 h-96} dark:text-gray-100">
        <img
          src={strDrinkThumb}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {strCategory}
            </h2>
            <p  className="dark:text-gray-100">
              {strInstructions}
            </p>
          </div>

          <button
          onClick={()=> addtoCaet(products)}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
