import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 12.63c0-2.3 2.1-3.88 4.28-3.88 2.2 0 4.29 1.57 4.29 3.88 0 1-.4 1.86-1.03 2.52A4.43 4.43 0 0122 18.62c0 2.68-2.37 4.63-5 4.63s-5-1.95-5-4.63c0-1.44.7-2.68 1.74-3.5a3.6 3.6 0 01-.99-2.5zm4.28-1.38c-1.16 0-1.78.78-1.78 1.38 0 .6.62 1.37 1.78 1.37 1.16 0 1.79-.78 1.79-1.38 0-.6-.63-1.37-1.79-1.37zM17 16.5c-1.5 0-2.5 1.07-2.5 2.13 0 1.05 1 2.12 2.5 2.12s2.5-1.07 2.5-2.13c0-1.05-1-2.12-2.5-2.12zm8.13-.13a1.25 1.25 0 00-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 001.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 001.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 00-1.76-1.76l-1.37 1.36-1.37-1.36zM11 22a1 1 0 11-2 0 1 1 0 012 0zM7.2 9.09c.49.19.8.65.8 1.16v11.5a1.25 1.25 0 11-2.5 0v-8.5c-.43.32-.95.68-1.6 1.07a1.25 1.25 0 01-1.3-2.14 11.1 11.1 0 002.02-1.47c.29-.27.48-.5.71-.75l.5-.56c.36-.38.9-.5 1.38-.31z" fill={primaryFill} /></svg>;
};

export default Multiplier18X32Filled;