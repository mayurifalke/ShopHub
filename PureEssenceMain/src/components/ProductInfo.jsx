import React from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const ProductInfo = () => {
  const location = useLocation();
  const { itemId,itemname, itemImage,itemImage2,itemImage3,price} = location.state || {}; 

  const dispatch = useDispatch();
  const handleOnClickAdd = () => {
    dispatch(bagActions.addBag(itemId));
  };

  //to adds the products into carts/bag
  const bagItems = useSelector((store) => store.bag);
  const checkCondition = bagItems.indexOf(itemId) >= 0;

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Men
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Collections
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                {/* <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Basic Tee 6-Pack
                </a> */}
              </li>
            </ol>
          </nav>
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              src={itemImage}
              alt="Perfume"
              className="hidden size-full rounded-lg object-cover lg:block"
            />
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <img
                src={itemImage2}
                alt="Model wearing plain black basic tee."
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <img
                src={itemImage3}
                alt="Model wearing plain gray basic tee."
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
            </div>
            <img
              src={itemImage2}
              alt="Model wearing plain white basic tee."
              className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
            />
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {itemname}
              </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">RS. {price}</p>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {/* Active: "text-gray-900", Default: "text-gray-200" */}
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="size-5 shrink-0 text-gray-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>
              <form className="mt-10">
             
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h1 className="font-medium text-gray-900">Size</h1>
                  </div>
                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                        <input
                          type="radio"
                          name="size-choice"
                          defaultValue="XS"
                          className="sr-only"
                        />
                        <span>100ml</span>
                      
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        />
                      </label>
                    
                    </div>
                  </fieldset>
                </div>
                {checkCondition ? (
                        <button
                          type="button"
                          class="btn-add-bag btn btn-danger"
                         
                        >
                          {/* <MdDelete /> */}
                          Remove from Bag
                        </button>
                      ) : (
                        <button className="btn-add-bag" onClick={handleOnClickAdd}>
                          {/* <IoMdAddCircleOutline /> */}
                          Add to Bag
                        </button>
                      )}
                {/* {checkCondition ?(<button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleOnClickRemove}
                >
                  Remove to bag
                </button>) :(
                  <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleOnClickAdd}
                >
                 Add from bag
                </button>
                )} */}
              </form>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    The Basic Tee 6-Pack allows you to fully express your
                    vibrant personality with three grayscale options. Feeling
                    adventurous? Put on a heather gray tee. Want to be a
                    trendsetter? Try our exclusive colorway: "Black". Need to
                    add an extra pop of color to your outfit? Our white tee has
                    you covered.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Hand cut and sewn locally
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Dyed with our proprietary colors
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Ultra-soft 100% cotton
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    "Charcoal Gray" limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
