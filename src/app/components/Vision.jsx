import Image from "next/image";

const Vision = () => {
    const visionData = [
        {
            image: "/rec.svg",
            mainTitle: "SMART CITIES",
            subTitile: "What is the branding, and what we need it?",
            content:
                "Transforming urban areas into sustainable and connected hubs of innovation.",
        },
        {
            image: "/rec2.svg",
            mainTitle: "SMART CITIES",
            subTitile: "What is the branding, and what we need it?",
            content:
                "Transforming urban areas into sustainable and connected hubs of innovation.",
        },
        {
            image: "/Rectangle.png",
            mainTitle: "SMART CITIES",
            subTitile: "What is the branding, and what we need it?",
            content:
                "Transforming urban areas into sustainable and connected hubs of innovation.",
        },
        {
            image: "/rec3.svg",
            mainTitle: "SMART CITIES",
            subTitile: "What is the branding, and what we need it?",
            content:
                "Transforming urban areas into sustainable and connected hubs of innovation.",
        },
        {
            image: "/rec4.svg",
            mainTitle: "SMART CITIES",
            subTitile: "What is the branding, and what we need it?",
            content:
                "Transforming urban areas into sustainable and connected hubs of innovation.",
        },
        {
            image: "/rec5.svg",
            mainTitle: "SMART CITIES",
            subTitile: "What is the branding, and what we need it?",
            content:
                "Transforming urban areas into sustainable and connected hubs of innovation.",
        },
    ];
    return (
        <div className="bg-[#111204] pb-20 min-h-screen w-full flex flex-col items-center pt-10">
            <h1 className="text-[#009F30]">BLOGS</h1>
            <h2 className="text-white mt-3 text-4xl font-bold">AI-Powered Design</h2>
            <p className="text-white text-center mt-3 text-md font-light">
                Explore the potential advancements and developments that
                <br /> can be expected in the coming years.
            </p>
            <div class="grid place-items-center min-h-screen mx-auto">
                <div className="grid grid-cols-6 md:grid-cols-12 px-4 md:px-10 mt-10 mx-auto">
                    {visionData.map((Item) => (
                        <div
                              data-aos="fade-up"
                            key={Item.subTitile}
                            className="col-span-12 md:col-span-6 border-[#13250A] border-2 rounded-3xl flex m-3 pr-2 bg-[#151706]"
                        >
                            <Image src={Item.image} width={190} height={190} alt="" />
                            <div className="ml-10">
                                <p className="text-[#009F30] font-semibold mt-3">
                                    {Item.mainTitle}
                                </p>
                                <h2 className="text-white mt-3 text-xl font-bold">
                                    {Item.subTitile}
                                </h2>
                                <p className="text-gray-300 font-light mt-2">{Item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="h-8 mt-5 font-semibold text-sm w-auto px-8 cursor-pointer hover:opacity-80 transition-all rounded-full bg-[#009F30] text-white">
                Load More
            </button>
        </div>
    );
};

export default Vision;
