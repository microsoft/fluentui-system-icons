import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cast20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 14.5v-9zM3.5 5a.5.5 0 00-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-13z" fill={primaryFill} /><path d="M5.5 13.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M4 10.5c0-.28.22-.5.5-.5A3.5 3.5 0 018 13.5a.5.5 0 11-1 0A2.5 2.5 0 004.5 11a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4 8c0-.28.22-.5.5-.5a6 6 0 016 6 .5.5 0 01-1 0 5 5 0 00-5-5A.5.5 0 014 8z" fill={primaryFill} /></svg>;
};

export default Cast20Regular;