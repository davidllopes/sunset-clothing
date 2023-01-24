/**
 *
 */
const About = () => {
    return (
        <div className="bg-slate-50">
            <div className="container mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-2xl lg:px-8 space-y-2.5">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
                    About us
                </h2>
                <p className="text-center leading-relaxed">
                    We're a sustainable fashion brand that creates high-quality,
                    stylish clothing using environmentally-friendly materials
                    and ethical manufacturing processes.
                </p>
            </div>
            <div className="container mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8 space-y-2.5 flex items-center">
                <div className="grid grid-cols-2 gap-44 lg:gap-20 items-center">
                    <div className="space-y-2.5">
                        <div className="overflow-hidden rounded-lg lg:opacity-100">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div>
                            <p>
                                The company prides itself on its commitment to
                                reducing waste and minimizing its carbon
                                footprint, and works closely with local artisans
                                and small factories to produce unique,
                                limited-edition collections.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <div className="overflow-hidden rounded-lg lg:opacity-100">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div>
                            <p>
                                From flowy dresses to rugged outerwear, Sunset
                                Clothing's designs are inspired by nature and
                                the outdoors, and appeal to fashion-conscious
                                consumers who care about the environment and
                                social responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8 space-y-2.5">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Eco-friendly
                </h2>
                <p>
                    The company's products are made from a variety of
                    sustainable materials, such as organic cotton, recycled
                    polyester, and Tencel, a fabric made from wood pulp that is
                    both soft and durable. They also use low-impact dyes and
                    avoid harmful chemicals in the production process.
                </p>
                <p>
                    Sunset Clothing's collections are designed to be versatile
                    and timeless, with a focus on clean lines and natural
                    colors. The company also offers a range of accessories, such
                    as bags and wallets.
                </p>
            </div>
        </div>
    );
};

export default About;
