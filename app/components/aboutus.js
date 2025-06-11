import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#a9744f]/70 dark:bg-brand-dark text-brand-walnut dark:text-brand-sand">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">About Prime Woods & Ply</h2>
        <p className="mb-4 text-lg text-center">At Prime Woods & Ply, we are passionate about delivering the finest timber, plywood, and custom woodwork solutions. Our mission is to craft excellence in every project, big or small.</p>
        <ul className="mb-6 space-y-2">
          <li><span className="font-semibold">Mission:</span> To provide top-quality wood products and bespoke carpentry with integrity and craftsmanship.</li>
          <li><span className="font-semibold">Values:</span> Quality, Trust, Sustainability, and Customer Satisfaction.</li>
          <li><span className="font-semibold">Excellence:</span> Decades of experience in woodworking, ensuring every detail is perfect.</li>
        </ul>
        <p className="text-center text-sm">Discover the difference that true craftsmanship and premium materials can make for your next project.</p>
      </div>
    </section>
  );
}
