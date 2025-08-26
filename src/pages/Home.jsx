import React from "react";

export default function Home() {
  return (
    <section className="h-auto lg:h-[88vh] flex flex-col justify-between bg-gradient-to-r from-white to-blue-50">
      <div className="flex flex-col lg:flex-row flex-1 items-center lg:items-start">
        <div className="w-full lg:w-1/2 px-6 pt-10 sm:px-10 lg:pl-[272px] lg:pt-[120px] space-y-2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-[40px] font-bold leading-tight bg-gradient-to-r from-[#A18CD1] to-[#6C63FF] bg-clip-text text-transparent">
            Bootstrap 5 theme
          </h1>
          <h2 className="text-gray-600 text-xl sm:text-2xl lg:text-3xl">
            Crafted by ThemeWagon
          </h2>
          <p className="text-gray-600 text-xs sm:text-[13px] lg:text-xs">
            ThemeWagon offers an wide array of category-oriented
            <br className="hidden md:block" />
            Free and Premium Bootstrap HTML Templates and Themes.
          </p>
          <button className="w-fit bg-gradient-to-r from-[#A18CD1] to-[#6C63FF] text-white p-2 md:px-4 md:py-2 rounded-xl shadow-md hover:opacity-90 transition mt-4 mx-auto lg:mx-0">
            Check Demo
          </button>
        </div>

        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-0 mt-8 lg:mt-0">
          <img
            src="/img/1.home/illustration1.png"
            alt="Illustration"
            className="w-full h-auto object-cover md:object-contain"
          />
        </div>
      </div>

      <section className="w-full mt-10 lg:mt-7 flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-10 py-4 lg:h-[25%] shadow-[0_4px_6px_-5px_rgba(0,0,0,0.2)]">
        {["google", "netflix", "microsoft", "mailbuster", "themewagon"].map(
          (brand) => (
            <img
              key={brand}
              src={`/img/1.home/${brand}.png`}
              alt={brand}
              className="h-5 sm:h-6 md:h-7 lg:h-8 hover:scale-105 transition-transform duration-300"
            />
          )
        )}
      </section>
    </section>
  );
}
