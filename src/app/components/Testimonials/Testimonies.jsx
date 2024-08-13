"use client";

import { React, useState } from "react";

import reviews from "../../data/reviews.json";

const Testimonies = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  {
    /** Reviews to view */
  }
  const [view, setView] = useState(5);

  // This method will increase the total number of reviews that will be show on the screen.
  const viewMore = () => {
    // The goal is to increment the view by 5, but when it will exceed the total number of reviews, we will increment it using the exact number.
    if(view+5 > reviews.length) setView(view + (reviews.length - view));
    else setView(view+5);

    console.log(view);
  }

  return (
    <>
      {reviews.map((review, index) =>
        index < view ? (
          <article
            className="w-full lg:w-9/12 xl:w-8/12 p-4 xl:p-8 flex flex-col justify-center bg-info shadow border border-brown border-opacity-60 rounded-lg select-none"
            key={index}
          >
            <p className="text-[calc(0.85rem+1dvw)] font-medium uppercase font-serif text-justify mb-4 xl:mb-7">
              {review.review}
            </p>
            <div
              aria-label="Review Stars"
              className="flex items-center gap-x-1.5"
            >
              {[...Array(5)].map((star, index) => (
                <span
                  aria-label="stars"
                  key={index}
                  className={`${
                    index < review.rating ? "text-warning" : "text-gray-400"
                  } text-xl lg:text-2xl xl:text-3xl`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <hr className="border-gray-500 my-4 xl:my-6" />
            <p className="text-sm text-neutral-600 font-serif lg:text-lg">
              {review.name} |{" "}
              <time dateTime={`${review.year}-${review.month}-${review.day}`}>
                {`${months[review.month - 1]} ${review.day}, ${review.year}`}
              </time>
            </p>
          </article>
        ) : null
      )}
      {/** This dispaly more reviews and reduce the reviews when it reaches the maximum number of reviews */}
      <button 
      className="outline outline-2 outline-tertiary text-tertiary hover:outline-sky-500 hover:text-sky-500 py-2.5 my-5 lg:my-8 text-center w-48 lg:w-72 transition-colors ease-linear duration-200"
      onClick={()=> {view === reviews.length ? setView(5) : viewMore()}}
      >
        {view === reviews.length ? "View Less" : "View More"}
      </button>
    </>
  );
};

export default Testimonies;
