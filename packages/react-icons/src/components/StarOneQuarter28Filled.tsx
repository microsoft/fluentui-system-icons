import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOneQuarter28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.3 3.9a1.45 1.45 0 00-2.6 0l-2.69 5.46-6.02.88a1.45 1.45 0 00-.8 2.47l4.35 4.24-1.02 6c-.11.63.19 1.18.66 1.47.4.26.94.32 1.44.05L14 21.64l5.38 2.83c1.07.56 2.31-.34 2.1-1.52l-1.02-6 4.35-4.24c.86-.84.39-2.3-.8-2.47l-6.02-.88-2.69-5.45zM11 21.54V10.49c.14-.12.26-.27.34-.44L14 4.66l2.66 5.39c.21.43.62.72 1.1.8l5.93.86-4.3 4.19c-.34.33-.5.81-.41 1.28l1.01 5.92-5.31-2.8a1.45 1.45 0 00-1.35 0L11 21.53z" fill={primaryFill} /></svg>;
};

export default StarOneQuarter28Filled;