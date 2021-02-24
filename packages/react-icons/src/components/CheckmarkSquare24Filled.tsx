import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkSquare24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.26 3C4 3 3 4 3 5.25v13.5C3 19.99 4 21 5.26 21h13.5C20 21 21 20 21 18.75V5.25C21 4.01 20 3 18.76 3H5.26zm11.02 6.78l-5 5c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 4.47-4.47a.75.75 0 011.06 1.06z" fill={primaryFill} /></svg>;
};

export default CheckmarkSquare24Filled;