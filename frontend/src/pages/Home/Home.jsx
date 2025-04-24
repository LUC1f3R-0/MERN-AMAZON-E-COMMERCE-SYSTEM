import React from 'react';
import assets from '../../assets/assets';

const Home = () => {
    return (
        <>
            <section>
                <div className="bg-[#0F1111] flex items-center justify-between px-4 py-2 text-white top-0 left-0 w-full z-99">

                    <div className="flex items-center">
                        <img src={assets.amazon_logo} alt="Amazon Logo" className="h-6 mr-2" />
                    </div>

                    <div className="flex flex-grow max-w-3xl mx-4">
                        <input type="text" placeholder="Search" className="bg-white w-full p-2 rounded-l-md focus:outline-none text-black" />
                        <button className="bg-[#febd69] p-2 rounded-r-md">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="text-sm text-white leading-tight">
                            <span>Returns</span>
                            <br />
                            <span className="font-bold">& Orders</span>
                        </div>
                        <div className="flex items-center">
                            <img src={assets.cart_icon} alt="Cart" className="h-6 mr-1" />
                            <span className="text-sm font-bold">Cart</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-wrap justify-center items-center sm:justify-start sm:items-start'>

                    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border m-2 border-gray-100 bg-white shadow-md">
                        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                            <img
                                className="object-cover"
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="product image"
                            />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                39% OFF
                            </span>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-3xl font-bold text-slate-900">$449</span>
                                    <span className="text-sm text-slate-900 line-through ml-2">$699</span>
                                </p>

                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <span className="mr-2 ml-3 rounded bg-[#000] px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                </div>
                            </div>
                            <button href="#" className="mt-3 w-full rounded-md bg-[#fff700] hover:bg-[#e6d800] px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-yellow-300 cursor-pointer" >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
