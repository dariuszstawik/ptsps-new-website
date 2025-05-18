"use client";

import { useState } from "react";
import BlogCard from "../global-components/blog-card";
import Button from "../global-components/button";

export default function NewsList({ newsPosts, isOnHomepage }) {
  //   const newsAmount = 2;

  const [maxAmount, setMaxAmount] = useState(2);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 2);
  };
  return (
    <>
      <ul className="grid grid-cols-1 gap-8 xl:grid-cols-2 mx-auto px-10 xl:px-28 list-none">
        {newsPosts &&
          newsPosts.slice(0, maxAmount).map((item, i) => {
            return (
              <li key={i} className="mx-auto">
                <BlogCard
                  title={item.fields.title}
                  slug={item.fields.slug}
                  img={item.fields.image ? item.fields.image : ""}
                  href={`/aktualnosci/${item.fields.slug}`}
                />{" "}
              </li>
            );
          })}
      </ul>
      {!isOnHomepage && (
        <div className="flex justify-center m-16">
          {maxAmount < newsPosts.length && (
            <Button onClick={increaseMaxAmount}>więcej</Button>
          )}
        </div>
      )}
    </>
  );
}
