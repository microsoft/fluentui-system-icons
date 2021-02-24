import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InfoShield20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 9a8 8 0 10-6.28 7.81 7.05 7.05 0 01-.72-2.93v-2.79c0-.75.59-1.42 1.4-1.42.9 0 1.76-.37 2.6-1.24a1.39 1.39 0 012 0 5.06 5.06 0 001 .8V9zM8.5 7.91a.5.5 0 011 0V12.6a.5.5 0 01-1 0V7.9zm-.25-2.16a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M17 10.35a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0013 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 00-.4-.33 4.24 4.24 0 01-1.6-.32z" fill={primaryFill} /></svg>;
};

export default InfoShield20Filled;