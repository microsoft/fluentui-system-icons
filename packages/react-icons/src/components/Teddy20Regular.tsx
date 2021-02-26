import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Teddy20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.5a3.5 3.5 0 001.4 2.8c-.26.69-.4 1.43-.4 2.2 0 3.63 3.17 6.5 7 6.5s7-2.87 7-6.5c0-.77-.14-1.51-.4-2.2a3.5 3.5 0 10-5.31-4.19 7.54 7.54 0 00-2.58 0A3.5 3.5 0 002 6.5zM5.5 4c.97 0 1.8.55 2.22 1.35a6.92 6.92 0 00-3.87 3.03A2.5 2.5 0 015.5 4zm6.78 1.35a2.5 2.5 0 113.87 3.03 6.92 6.92 0 00-3.87-3.03zM10 6c3.35 0 6 2.5 6 5.5a5.2 5.2 0 01-1.2 3.3 5.5 5.5 0 00-9.6 0A5.2 5.2 0 014 11.5C4 8.5 6.65 6 10 6zm4.06 9.55A6.27 6.27 0 0110 17c-1.57 0-3-.55-4.06-1.45a4.51 4.51 0 012.73-2.35 1.5 1.5 0 002.66 0c1.2.37 2.19 1.23 2.73 2.35z" fill={primaryFill} /></svg>;
};

export default Teddy20Regular;