import React, { useState } from "react";

function FeaturedMenuCardsForRestPage(props) {
  const [like, setLike] = useState(false);

  return (
    <div className="">
      <a
        href="/"
        className="m-1 flex flex-col items-center bg-white shadow md:flex-row md:max-w-xl lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 bg-white-800"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.restImg}
          alt=""
        />
        <div className="flex flex-col justify-between leading-normal">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-black-900 text-justify">
            {props.restName}
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-justify">
            {props.restDish}
          </p>
        </div>
      </a>
    </div>
  );
}

export default FeaturedMenuCardsForRestPage;
