import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PictureInPicture24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M8 10.5C8 9.67 8.67 9 9.5 9h8c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 018 15.5v-5zm1.5 0v4.4l2.08-2.26c.5-.54 1.34-.54 1.84 0l2.63 2.85v.01h1.45v-5h-8zm3 3.36l-1.52 1.64h3.04l-1.52-1.64z" fill={primaryFill} /><path d="M5.75 4A3.75 3.75 0 002 7.75v8.5A3.75 3.75 0 005.75 20h12.5A3.75 3.75 0 0022 16.25v-8.5A3.75 3.75 0 0018.25 4H5.75zM3.5 7.75c0-1.24 1-2.25 2.25-2.25h12.5c1.24 0 2.25 1 2.25 2.25v8.5c0 1.24-1 2.25-2.25 2.25H5.75c-1.24 0-2.25-1-2.25-2.25v-8.5z" fill={primaryFill} /></svg>;
};

export default PictureInPicture24Regular;