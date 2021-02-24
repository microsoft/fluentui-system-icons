import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RatingMature24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zm5.83 2.02a.75.75 0 00-1.33.48v6.5a.75.75 0 101.5 0v-4.43l2.42 2.91a.75.75 0 001.16 0l2.42-2.9v4.42a.75.75 0 101.5 0v-6.5a.75.75 0 00-1.33-.48L12 12.07l-3.17-3.8z" fill={primaryFill} /></svg>;
};

export default RatingMature24Filled;