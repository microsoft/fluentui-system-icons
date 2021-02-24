import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDown24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.16 10.07C4.46 9.27 5.03 8 6.1 8h11.8c1.07 0 1.65 1.26.94 2.07l-5.52 6.31c-.7.8-1.94.8-2.64 0l-5.52-6.3zm1.5-.57l5.15 5.9c.1.11.28.11.38 0l5.16-5.9H6.65z" fill={primaryFill} /></svg>;
};

export default CaretDown24Regular;