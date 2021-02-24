import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeIntersect24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h8c1.8 0 3.25 1.46 3.25 3.25V7.5h2.25c1.8 0 3.25 1.46 3.25 3.25v8c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 01-3.25-3.25V16.5H5.25A3.25 3.25 0 012 13.25v-8zm13 0c0-.97-.78-1.75-1.75-1.75h-8c-.97 0-1.75.78-1.75 1.75v8c0 .97.78 1.75 1.75 1.75H7.5v-4.25a3.23 3.23 0 013.25-3.25H15V5.25zm1 9.73A3.38 3.38 0 0114.98 16c-.5.32-1.1.5-1.73.5H9v2.25c0 .97.78 1.75 1.75 1.75h8c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75H16.5v4.25c0 .64-.18 1.23-.5 1.73z" fill={primaryFill} /></svg>;
};

export default ShapeIntersect24Filled;