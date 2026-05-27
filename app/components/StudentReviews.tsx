"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  course: string;
  review: string;
  rating: string;
};

export default function StudentReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRk11wQpSQXv7Ni4Ccz-Q5vfKXtazFcauVj1XA6oReF8YyX7OqCQMc2owyKXpinac2HErBsiNtKQlEY/pub?output=csv"
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split("\n").slice(1);

        const data = rows
          .map((row) => {
            const cols = row.split(",");
            return {
              name: cols[0] || "",
              course: cols[1] || "",
              review: cols[2] || "",
              rating: cols[3] || "",
            };
          })
          .filter((item) => item.name);

        setReviews(data);
      });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Student Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-white"
            >
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>

              <p className="text-blue-300 mb-2">{item.course}</p>

              <p className="text-gray-200 mb-4">{item.review}</p>

              <p>⭐ {item.rating}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeaJk-4mobbXaKdKXtbrRgKIcH5s1WdmXt1v2ZANhq2uEGdnA/viewform"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Add Your Review
          </a>
        </div>
      </div>
    </section>
  );
}