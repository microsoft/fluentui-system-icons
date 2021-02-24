import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.73 19.8a.75.75 0 001.04-1.1l-6.25-5.95h14.73a.75.75 0 000-1.5H5.52l6.25-5.95a.75.75 0 00-1.04-1.1l-7.42 7.08a1 1 0 000 1.44l7.42 7.07z" fill={primaryFill} /></svg>;
};

export default ArrowLeft24Regular;