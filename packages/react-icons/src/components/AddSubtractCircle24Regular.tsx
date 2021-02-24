import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AddSubtractCircle24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 15.25c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm-3.5-8.5a.75.75 0 00-1.5 0V8H6.75a.75.75 0 000 1.5H8v1.25a.75.75 0 001.5 0V9.5h1.25a.75.75 0 000-1.5H9.5V6.75zM12 22a10 10 0 110-20 10 10 0 010 20zm0-1.5a8.5 8.5 0 006.52-13.96L6.54 18.52A8.47 8.47 0 0012 20.5zm-6.52-3.04L17.46 5.48A8.5 8.5 0 005.49 17.45z" fill={primaryFill} /></svg>;
};

export default AddSubtractCircle24Regular;