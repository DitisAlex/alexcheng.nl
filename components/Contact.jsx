import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1240px] m-auto px-2 py-16 w-full lg:h-screen"
    >
      <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
        Contact
      </p>
      <h2 className="py-4">Wanna Talk?</h2>
      <div className="grid lg:grid-cols gap-8">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
            <div>
              <Image className="rounded-xl hover:scale-110 ease-in duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
