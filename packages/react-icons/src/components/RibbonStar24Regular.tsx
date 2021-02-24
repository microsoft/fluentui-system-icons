import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RibbonStar24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.23 5.64l.91 1.86 2.05.29c.2.03.29.29.14.44l-1.48 1.44.35 2.03c.03.21-.19.37-.37.27L12 11.01l-1.83.96a.25.25 0 01-.37-.27l.35-2.03-1.48-1.44a.26.26 0 01.14-.44l2.05-.3.91-1.85c.1-.19.37-.19.46 0z" fill={primaryFill} /><path d="M19 9a7 7 0 10-12 4.9V21.35c.08.55.71.84 1.18.51L12 19.18l3.82 2.68.09.06a.75.75 0 001.09-.67V13.9c1.24-1.26 2-3 2-4.9zm-3.5 6.06v4.75l-3.07-2.16-.1-.06a.75.75 0 00-.76.06L8.5 19.8v-4.74a6.97 6.97 0 007 0zM6.5 9a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" fill={primaryFill} /></svg>;
};

export default RibbonStar24Regular;