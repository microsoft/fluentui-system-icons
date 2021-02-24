import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FStop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 6.53A3.25 3.25 0 0117.46 4l.6.2a.75.75 0 10.49-1.4l-.6-.21a4.75 4.75 0 00-6.23 3.69L11 10.5H6.75a.75.75 0 000 1.5h3.99l-.78 4.58a3.25 3.25 0 01-4.77 2.3l-.08-.04a.75.75 0 00-.72 1.32l.07.04a4.75 4.75 0 006.98-3.36l.82-4.84h3.99a.75.75 0 000-1.5h-3.73l.68-3.97z" fill={primaryFill} /></svg>;
};

export default FStop24Regular;