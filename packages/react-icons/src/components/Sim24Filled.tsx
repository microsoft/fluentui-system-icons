import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Sim24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.25C4 3.45 5.46 2 7.25 2h5.46c.87 0 1.7.34 2.3.95L19.05 7c.6.6.95 1.43.95 2.3v9.46c0 1.8-1.46 3.25-3.25 3.25h-9.5A3.25 3.25 0 014 18.75V5.25zM7.75 14H12v-3.25H9.25c-.83 0-1.5.67-1.5 1.5V14zm0 1.5v1.25c0 .83.67 1.5 1.5 1.5H12V15.5H7.75zm5.75 2.75h1.25c.83 0 1.5-.67 1.5-1.5v-4.5c0-.83-.67-1.5-1.5-1.5H13.5v7.5z" fill={primaryFill} /></svg>;
};

export default Sim24Filled;