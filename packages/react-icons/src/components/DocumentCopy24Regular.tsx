import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentCopy24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.63V17.25c0 1.8 1.46 3.25 3.25 3.25h8.62c-.31.88-1.15 1.5-2.13 1.5H8.75A4.75 4.75 0 014 17.25V6.75c0-.98.63-1.81 1.5-2.12zM13.13 2c.6 0 1.17.24 1.59.66l4.62 4.62c.42.42.66 1 .66 1.6v8.37c0 1.25-1.01 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.51 2 8.75 2h4.38zM13 3.5H8.75a.75.75 0 00-.75.75v13c0 .42.34.75.75.75h9c.41 0 .75-.33.75-.75V9h-3.25c-1.2 0-2.17-.92-2.24-2.1L13 6.76V3.5zm1.5 1.06v2.2c0 .37.28.69.65.74h2.29L14.5 4.56z" fill={primaryFill} /></svg>;
};

export default DocumentCopy24Regular;