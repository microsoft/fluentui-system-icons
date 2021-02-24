import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShieldDismissShield20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0c.34-.14.68-.27 1-.42a5.82 5.82 0 01-.66-1.16 7.05 7.05 0 01-.52-2.5V11.05l-1.97 1.97a.75.75 0 01-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 011.06-1.06L10 8.94l1.97-1.97a.75.75 0 111.06 1.06l-1.64 1.64h.01c.9 0 1.76-.37 2.6-1.24a1.39 1.39 0 012 0 5.06 5.06 0 001 .8V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42z" fill={primaryFill} /><path d="M17 10.35a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0013 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 00-.4-.33 4.24 4.24 0 01-1.6-.32z" fill={primaryFill} /></svg>;
};

export default ShieldDismissShield20Filled;