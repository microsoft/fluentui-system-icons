import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l6.3 6.3-4.53.66a1.45 1.45 0 00-.8 2.47l4.35 4.24-1.03 6a1.45 1.45 0 002.1 1.52L14 21.64l5.38 2.83c1.07.56 2.3-.34 2.1-1.52l-.08-.49 3.32 3.32a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M10.85 7.66l9.67 9.68-.06-.39 4.35-4.24c.86-.84.39-2.3-.8-2.47l-6.02-.88-2.69-5.45a1.45 1.45 0 00-2.6 0l-1.85 3.75z" fill={primaryFill} /></svg>;
};

export default StarOff28Filled;