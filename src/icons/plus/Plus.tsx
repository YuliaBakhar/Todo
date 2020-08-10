import React, { FC, SVGAttributes } from "react";

const Plus: FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z" />
    </svg>
  );
};

export { Plus };
