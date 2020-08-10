import React, { FC, SVGAttributes } from "react";

const Date: FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M72 21v7h-4v-7h-4v7h-4v-7h-4v7h-4v-7h-4v7h-4v-7h-4v7h-4v-7h-4v7h-4v-7h-8v3h-4v58h60v-4h4V21h-8zm2 59H18V37h2v41h54v2zm4-4H22V33h56v43z" />
      <path d="M37 17h2v10h-2zM45 17h2v10h-2zM53 17h2v10h-2zM61 17h2v10h-2zM69 17h2v10h-2zM28 41h4v4h-4zM36 41h4v4h-4zM44 41h4v4h-4zM52 41h4v4h-4zM60 41h4v4h-4zM68 41h4v4h-4zM28 49h4v4h-4zM36 49h4v4h-4zM44 49h4v4h-4zM52 49h4v4h-4zM60 49h4v4h-4zM68 49h4v4h-4zM28 57h4v4h-4zM36 57h4v4h-4zM44 57h4v4h-4zM52 57h4v4h-4zM60 57h4v4h-4zM68 57h4v4h-4zM28 65h4v4h-4zM36 65h4v4h-4zM44 65h4v4h-4zM52 65h4v4h-4zM60 65h4v4h-4zM68 65h4v4h-4z" />
      <path d="M37.998 47.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5zm0-8c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zM53.998 63.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5zm0-8c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zM29 17h2v10h-2z" />
    </svg>
  );
};

export { Date };
