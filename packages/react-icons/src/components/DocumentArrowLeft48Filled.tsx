import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentArrowLeft48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4v11.25A3.75 3.75 0 0027.75 19H40v21a3 3 0 01-3 3H23.25A13 13 0 008 23V7a3 3 0 013-3h13z" fill={primaryFill} /><path d="M26.5 4.46v10.79c0 .69.56 1.25 1.25 1.25h11.71L26.5 4.46z" fill={primaryFill} /><path d="M24 35a11 11 0 11-22 0 11 11 0 0122 0zm-12.3-5.7a1 1 0 00-1.4 0l-5 5a1 1 0 000 1.4l5 5a1 1 0 001.4-1.4L8.42 36H20a1 1 0 100-2H8.41l3.3-3.3a1 1 0 000-1.4z" fill={primaryFill} /></svg>;
};

export default DocumentArrowLeft48Filled;