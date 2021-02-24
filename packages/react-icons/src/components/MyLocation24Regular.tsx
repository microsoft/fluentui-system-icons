import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MyLocation24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c.38 0 .7.28.74.65l.01.1v1.79a7.5 7.5 0 016.71 6.71h1.79a.75.75 0 01.1 1.5H19.46a7.5 7.5 0 01-6.71 6.71v1.79a.75.75 0 01-1.5.1V19.46a7.5 7.5 0 01-6.71-6.71H2.75a.75.75 0 01-.1-1.5H4.54a7.5 7.5 0 016.71-6.71V2.75c0-.41.34-.75.75-.75zm0 4a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" fill={primaryFill} /></svg>;
};

export default MyLocation24Regular;