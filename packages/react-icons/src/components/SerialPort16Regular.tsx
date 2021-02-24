import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SerialPort16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M6.5 9.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M8 10a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M10.5 9.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M7 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M9.5 7.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M11 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M3.02 5a2 2 0 00-1.94 2.47l.72 3A2 2 0 003.75 12h8.52a2 2 0 001.94-1.53l.73-3A2 2 0 0012.99 5H3.02zm-.97 2.23A1 1 0 013.02 6H13a1 1 0 01.97 1.24l-.72 3a1 1 0 01-.97.76H3.75a1 1 0 01-.98-.77l-.72-3z" fill={primaryFill} /></svg>;
};

export default SerialPort16Regular;