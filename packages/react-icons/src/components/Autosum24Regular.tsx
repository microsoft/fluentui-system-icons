import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Autosum24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.06 4.46A.75.75 0 015.75 4h12.5a.75.75 0 010 1.5H7.52l5.36 5.54c.27.28.28.71.03 1L7.38 18.5h10.87a.75.75 0 010 1.5H5.75a.75.75 0 01-.57-1.24l6.15-7.17L5.2 5.27a.75.75 0 01-.15-.81z" fill={primaryFill} /></svg>;
};

export default Autosum24Regular;