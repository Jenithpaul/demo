import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-brand-beige dark:bg-brand-dark text-brand-walnut dark:text-brand-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-black dark:bg-brand-darkbrown rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEGjEiaid8rE5KoWCecXywHaE7%26pid%3DApi&f=1&ipt=ca78510a07f62203e4a2a43537400b95b7bafe3c7000544b722fc470bc9a7b77&ipo=images" alt="Plywood Sheets" className="h-16 mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-2">Plywood Sheets</h3>
            <p className="text-sm text-center">Premium quality plywood for all construction and furniture needs.</p>
          </div>
          <div className="bg-black dark:bg-brand-darkbrown rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bv9ZH-aS5tc9t5QAkYaCHwHaEK%26pid%3DApi&f=1&ipt=a6d78a1a9ca4fa9256aa9d93fc962406aa70067b9bd34b12f7c4416c58e3da6b&ipo=images" alt="Custom Carpentry" className="h-16 mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-2">Custom Carpentry</h3>
            <p className="text-sm text-center">Tailored carpentry solutions for homes, offices, and retail spaces.</p>
          </div>
          <div className="bg-black dark:bg-brand-darkbrown rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.V71SL-BSq1omczz-5LTT-gHaE9%26r%3D0%26pid%3DApi&f=1&ipt=26fe4887fab268e4ac18df1e5c1c8dc83e14b2222516146fd30b0af7a3a5b6b2&ipo=images" alt="Interior Wood Panels" className="h-16 mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-2">Interior Wood Panels</h3>
            <p className="text-sm text-center">Elegant wood panels to enhance your interiors with warmth and style.</p>
          </div>
          <div className="bg-black dark:bg-brand-darkbrown rounded-lg shadow p-6 flex flex-col items-center">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C69GyPOR8dN0TPsgz2vAugHaE8%26pid%3DApi&f=1&ipt=d2a7b289bcf0034ba72e447c70a8bd0cc07fb1b631e31579b550072c886fec73&ipo=images" alt="Wholesale Timber Supply" className="h-16 mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-2">Wholesale Timber Supply</h3>
            <p className="text-sm text-center">Bulk timber supply for contractors, builders, and large projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
