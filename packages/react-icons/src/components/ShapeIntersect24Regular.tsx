import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeIntersect24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h8c1.8 0 3.25 1.46 3.25 3.25V7.5h2.25c1.8 0 3.25 1.46 3.25 3.25v8c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 01-3.25-3.25V16.5H5.25A3.25 3.25 0 012 13.25v-8zm13 0c0-.97-.78-1.75-1.75-1.75h-8c-.97 0-1.75.78-1.75 1.75v8c0 .97.78 1.75 1.75 1.75H7.5v-4.25a3.25 3.25 0 013.25-3.25H15V5.25zm-6 9.31V15h1.44L15 10.44V9h-.44L9 14.56zM12.44 9h-1.69l-.2.01L9 10.55l-.01.2v1.69L12.44 9zm4.06 0v4.25c0 1.8-1.46 3.25-3.25 3.25H9v2.25c0 .97.78 1.75 1.75 1.75h8c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75H16.5zm-3.94 6h.69c.97 0 1.75-.78 1.75-1.75v-.69L12.56 15z" fill={primaryFill} /></svg>;
};

export default ShapeIntersect24Regular;