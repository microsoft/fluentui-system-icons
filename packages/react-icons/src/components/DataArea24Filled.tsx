import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataArea24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75a.75.75 0 011.5 0V19.5h15.75a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75V3.75z" fill={primaryFill} /><path d="M19.5 6.75a.75.75 0 00-1.2-.6l-5.6 4.2L8.88 8.1a.75.75 0 00-.72-.02L5.5 9.4v9.09h14V6.75z" fill={primaryFill} /></svg>;
};

export default DataArea24Filled;