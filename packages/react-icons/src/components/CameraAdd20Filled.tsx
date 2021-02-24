import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraAdd20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.09.32 1.34.83L13.81 4h1.7A2.5 2.5 0 0118 6.5v3.76a5.48 5.48 0 00-4.13-1.23 4 4 0 10-4.85 4.85A5.56 5.56 0 009.6 17H4.5A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h1.7l.58-1.17z" fill={primaryFill} /><path d="M10 7a3 3 0 012.9 2.24 5.51 5.51 0 00-3.66 3.66A3 3 0 0110 7z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 100 1H14v1.5a.5.5 0 101 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
};

export default CameraAdd20Filled;