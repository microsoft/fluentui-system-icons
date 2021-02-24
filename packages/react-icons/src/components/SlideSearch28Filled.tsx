import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideSearch28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4A3.25 3.25 0 002 7.25v6.56A6.48 6.48 0 019.97 13h10.28a.75.75 0 010 1.5h-8.63c.57.73.99 1.57 1.2 2.5h5.43a.75.75 0 010 1.5H13c0 1.16-.3 2.25-.84 3.19L14.47 24h8.28c1.8 0 3.25-1.45 3.25-3.25V7.25C26 5.45 24.55 4 22.75 4H5.25zM7 9.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017 9.75z" fill={primaryFill} /><path d="M10.88 21.82a5.5 5.5 0 10-1.06 1.06l2.9 2.9a.75.75 0 101.06-1.06l-2.9-2.9zm-.38-3.32a4 4 0 11-8 0 4 4 0 018 0z" fill={primaryFill} /></svg>;
};

export default SlideSearch28Filled;