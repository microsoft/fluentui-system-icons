import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RealEstate24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a1 1 0 112 0h16a1 1 0 110 2H5v15.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V4z" fill={primaryFill} /><path d="M6 7.75c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75v8.5A2.75 2.75 0 0118.25 19h-9.5A2.75 2.75 0 016 16.25v-8.5zm4 4.71v3.04c0 .28.22.5.5.5h1.75c.14 0 .25-.11.25-.25V14.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1.25c0 .14.11.25.25.25h1.75a.5.5 0 00.5-.5v-3.04a1 1 0 00-.35-.76l-2.82-2.42a.5.5 0 00-.66 0l-2.82 2.42a1 1 0 00-.35.76z" fill={primaryFill} /></svg>;
};

export default RealEstate24Filled;