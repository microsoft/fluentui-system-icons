import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataFunnel24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 7.5a2.75 2.75 0 100-5.5H4.75a2.75 2.75 0 000 5.5h14.5z" fill={primaryFill} /><path d="M17.25 14.5a2.75 2.75 0 100-5.5H6.75a2.75 2.75 0 000 5.5h10.5z" fill={primaryFill} /><path d="M17 18.75A2.75 2.75 0 0014.25 16h-4.5a2.75 2.75 0 000 5.5h4.5A2.75 2.75 0 0017 18.75z" fill={primaryFill} /></svg>;
};

export default DataFunnel24Filled;