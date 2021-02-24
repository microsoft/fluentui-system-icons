import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowShield16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h3.74a5.26 5.26 0 01-.63-1H4.5A1.5 1.5 0 013 11.5V5h10v.9c.33.26.67.43 1 .52V4.5A2.5 2.5 0 0011.5 2h-7zM3.09 4c.2-.58.76-1 1.41-1h7c.65 0 1.2.42 1.42 1H3.09z" fill={primaryFill} /><path d="M14 7.44a3.52 3.52 0 01-1-.35 4.72 4.72 0 01-1.25-.98.33.33 0 00-.5 0 3.89 3.89 0 01-2.9 1.39c-.2 0-.35.17-.35.38v2.48c.04 1.03.29 1.91.75 2.64.24.37.53.7.88 1 .48.4 1.07.73 1.76.98.07.03.15.03.22 0a4.75 4.75 0 003.4-4.85V7.88l-.02-.08a.36.36 0 00-.34-.3c-.22 0-.44-.02-.65-.06z" fill={primaryFill} /></svg>;
};

export default WindowShield16Regular;