import { Link } from "react-router-dom";
import DecorativeImageGrid from "../../components/Decorative/DecorativeImageGrid";

/**
 * Using Tailwind component modified
 * https://tailwindui.com/components/ecommerce/components/promo-sections
 */

const HeroLanding = ({ signedIn }) => {
    return (
        <div className="relative overflow-hidden bg-white pt-16">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg space-y-12">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Sunset summer styles are finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Our new bold Collection is here to give you some
                            warmth in this cold cold winter. Start preparing for
                            the summer with our cool garments.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <DecorativeImageGrid />
                            {signedIn ? (
                                <Link to={"/shop"}>
                                    <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                                        Start Shopping
                                    </button>
                                </Link>
                            ) : (
                                <Link to={"/signin"}>
                                    <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                                        Sign in
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroLanding;
