import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MathFormula24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.48 3.83A1.75 1.75 0 009.7 5.12L9.54 7.5h2.71a.75.75 0 010 1.5H9.44l-.6 9a3.25 3.25 0 01-5.39 2.24l-.2-.18a.75.75 0 011-1.12l.19.17c1.09.95 2.8.24 2.9-1.2L7.94 9H5.74a.75.75 0 010-1.5h2.28l.17-2.48a3.25 3.25 0 015.17-2.4l.38.28a.75.75 0 11-.9 1.2l-.37-.27z" fill={primaryFill} /><path d="M13.71 12.76a.75.75 0 00-1.15-.22l-.32.28a.75.75 0 11-.98-1.14l.32-.28a2.25 2.25 0 013.46.66l.98 1.86 2.7-2.7a.75.75 0 111.06 1.06l-3.03 3.03 1.54 2.93c.22.42.78.53 1.15.22l.32-.28a.75.75 0 01.98 1.14l-.32.28c-1.1.94-2.79.61-3.46-.67l-1.32-2.5-3.36 3.35a.75.75 0 11-1.06-1.06l3.69-3.69-1.2-2.27z" fill={primaryFill} /></svg>;
};

export default MathFormula24Regular;