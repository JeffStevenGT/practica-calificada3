import React from "react";

export default function Service() {
  return (
    <section className="relative w-full h-[93%] bg-gradient-to-r from-white to-blue-50 py-8 px-6 sm:px-10 lg:px-40 text-center -z-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        Service
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-[15px]">
        We offer youth with chances for career development in their practice. We
        also support a wide range of services to ensure client satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 relative z-10 px-2 sm:px-6 lg:mx-20">
        {[
          {
            icon: "/img/2.services/icon1.png",
            title: "Send Texts Instantly",
            desc: "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
          },
          {
            icon: "/img/2.services/icon2.png",
            title: "Better Organized",
            desc: "Latest technology and experienced guidance, trained HR specialists to keep updated.",
          },
          {
            icon: "/img/2.services/icon3.png",
            title: "Analytical Statistics",
            desc: "Messages, real-time reminders, memos, and many more will keep your team in sync.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white/50 px-6 py-10 rounded-2xl shadow-sm hover:shadow-md transition text-left"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-6"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-sm sm:text-md text-gray-500 mb-6">
              {service.desc}
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      <img
        src="/img/2.services/illustration1.png"
        alt="Decorative Illustration"
        className="absolute top-[3rem] left-[2rem] w-[200px] sm:w-[250px] lg:w-[300px] z-0 pointer-events-none"
      />
    </section>
  );
}
