import React from "react";

export default function Works() {
  const featuresCards = [
    {
      img: "/img/4.features/icon1.png",
      title: "Encryted Mail",
      parrafo: "A process of encrypting email communitions",
    },
    {
      img: "/img/4.features/icon2.png",
      title: "Display Sharing",
      parrafo: "With other participants, you may share your screen",
    },
    {
      img: "/img/4.features/icon3.png",
      title: "Private Notebook",
      parrafo: "Private Notebook is an application that is protected",
    },
    {
      img: "/img/4.features/icon4.png",
      title: "App App Assistance",
      parrafo: "App Assistant is quickly and effectively ran the system",
    },
    {
      img: "/img/4.features/icon5.png",
      title: "Multiple Printing",
      parrafo: "Our canvas prints are crafted on top-notch canvas.",
    },
    {
      img: "/img/4.features/icon6.png",
      title: "Free Sketch",
      parrafo: "Our canvas prints are crafted on top-notch canvas.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-white to-blue-50 py-8 px-6 sm:px-10 lg:px-40 text-center -z-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-3">Features</h1>
      <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto">
        We provide a number of excellent features that will undoubtedly improve
        the user experience. <br className="hidden sm:block" />
        We also provide a better support system.
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {featuresCards.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-xl text-center flex flex-col items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="cursor-pointer w-20 h-auto object-cover mb-5 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-md font-semibold text-black">{item.title}</h3>
            <p className="flex-wrap text-xs text-gray-500">{item.parrafo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
