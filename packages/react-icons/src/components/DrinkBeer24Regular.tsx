import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrinkBeer24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 10A.75.75 0 007 10v7a.75.75 0 001.5 0v-7z" fill={primaryFill} /><path d="M11.5 10a.75.75 0 00-1.5 0v7a.75.75 0 001.5 0v-7z" fill={primaryFill} /><path d="M14.5 10a.75.75 0 00-1.5 0v7a.75.75 0 001.5 0v-7z" fill={primaryFill} /><path d="M4 5.25C4 3.45 5.46 2 7.25 2h7c1.8 0 3.25 1.46 3.25 3.25V6h1.25C20.55 6 22 7.46 22 9.25v5.5c0 1.8-1.46 3.25-3.25 3.25H17.5v1.75c0 1.24-1 2.25-2.25 2.25h-9C5.01 22 4 21 4 19.75V5.25zM16 7.5H5.5v12.25c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75V7.5zm1.5 9h1.25c.97 0 1.75-.78 1.75-1.75v-5.5c0-.97-.78-1.75-1.75-1.75H17.5v9zM16 5.25c0-.97-.78-1.75-1.75-1.75h-7c-.97 0-1.75.78-1.75 1.75V6H16v-.75z" fill={primaryFill} /></svg>;
};

export default DrinkBeer24Regular;