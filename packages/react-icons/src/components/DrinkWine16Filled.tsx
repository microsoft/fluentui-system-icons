import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrinkWine16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 1a.5.5 0 00-.5.5v5a4 4 0 003.5 3.97.5.5 0 000 .03V14H6a.5.5 0 000 1h4a.5.5 0 000-1H8.5v-3.5a.5.5 0 000-.03A4 4 0 0012 6.5v-5a.5.5 0 00-.5-.5h-7zM5 4V2h6v2H5zm5.73 2.3a2.75 2.75 0 01-2.17 2.4.5.5 0 01-.2-.99A1.75 1.75 0 009.73 6.2a.5.5 0 011 .11z" fill={primaryFill} /></svg>;
};

export default DrinkWine16Filled;