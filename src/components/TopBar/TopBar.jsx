import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

/**
 * Used modified header component from
 * https://tailwindui.com/components/marketing/elements/headers
 *
 * Interest Calculator renders the shopping cart over the pages
 */

const TopBar = ({ signedIn, handleCart }) => {
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Sunset Clothing</span>
                            <img
                                className="h-8 w-auto sm:h-12"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <Link to="/shop">
                        <button className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Shop
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About Us
                        </button>
                    </Link>
                    {signedIn ? (
                        <>
                            <button
                                onClick={() => {
                                    handleCart(true);
                                }}
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Interest Calculator
                            </button>
                            <Link to="/account">
                                <button className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    My Account
                                </button>
                            </Link>
                        </>
                    ) : (
                        <Link to="/signin">
                            <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-center font-medium text-white hover:bg-indigo-700">
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </Popover>
    );
};

export default TopBar;
