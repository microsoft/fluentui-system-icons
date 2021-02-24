import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FilterSync24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM14.5 4a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 000-1h-1a2.5 2.5 0 014.03.04.5.5 0 00.8-.59 3.5 3.5 0 00-5.33-.4V4.5a.5.5 0 00-.5-.5zM20 9.95v.55a.5.5 0 001 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 000 1h1a2.5 2.5 0 01-3.91.11.5.5 0 10-.77.65 3.5 3.5 0 005.18.19zM8 11h4.02c.52.8 1.2 1.49 2.01 2H8a1 1 0 01-.12-2H8zM5 6h6.17a6.52 6.52 0 00-.15 2H5a1 1 0 01-.12-2H5zm4.88 10H14a1 1 0 01.12 2H10a1 1 0 01-.12-2z" fill={primaryFill} /></svg>;
};

export default FilterSync24Filled;