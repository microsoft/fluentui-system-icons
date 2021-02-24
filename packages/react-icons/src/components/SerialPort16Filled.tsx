import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SerialPort16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.08 7.47A2 2 0 013.02 5H13a2 2 0 011.95 2.47l-.73 3A2 2 0 0112.27 12H3.75a2 2 0 01-1.95-1.53l-.72-3zM5 8a.5.5 0 100-1 .5.5 0 000 1zm1.5 1.5a.5.5 0 10-1 0 .5.5 0 001 0zM8 10a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zM7 8a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0zM11 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
};

export default SerialPort16Filled;