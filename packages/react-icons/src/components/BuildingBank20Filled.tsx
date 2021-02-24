import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingBank20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.23 2.18a1.33 1.33 0 011.54 0l5.85 4.16A.92.92 0 0116.1 8H3.9a.92.92 0 01-.52-1.66l5.85-4.16zm.77 3.7a.83.83 0 100-1.67.83.83 0 000 1.67z" fill={primaryFill} /><path d="M4.5 9v4h2V9h-2z" fill={primaryFill} /><path d="M3 16.17c0-1.2.97-2.17 2.17-2.17h9.66c1.2 0 2.17.97 2.17 2.17v.33a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-.33z" fill={primaryFill} /><path d="M15.5 9v4h-2V9h2z" fill={primaryFill} /><path d="M12.5 9v4h-2V9h2z" fill={primaryFill} /><path d="M9.5 9v4h-2V9h2z" fill={primaryFill} /></svg>;
};

export default BuildingBank20Filled;