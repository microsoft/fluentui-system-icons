import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Glasses16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.17 3.13A.5.5 0 015.5 3h1a.5.5 0 010 1h-.81L3.44 6H5.5C6.33 6 7 6.67 7 7.5V8h2v-.5c0-.83.67-1.5 1.5-1.5h2.06l-2.25-2H9.5a.5.5 0 010-1h1a.5.5 0 01.33.13l3.62 3.21c.34.28.55.7.55 1.16v2a2.5 2.5 0 01-2.5 2.5h-1A2.5 2.5 0 019 9.5V9H7v.5A2.5 2.5 0 014.5 12h-1A2.5 2.5 0 011 9.5v-2c0-.47.21-.88.55-1.16l3.62-3.21z" fill={primaryFill} /></svg>;
};

export default Glasses16Filled;