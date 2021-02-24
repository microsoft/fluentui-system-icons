import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Delete48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 7.25c3.1 0 5.63 2.46 5.75 5.53V13H37a1.25 1.25 0 01.13 2.5H35.9l-1.7 22.57A4.25 4.25 0 0129.98 42H18.03a4.25 4.25 0 01-4.24-3.93L12.1 15.5H11c-.65 0-1.18-.5-1.24-1.12l-.01-.13c0-.65.5-1.18 1.12-1.24L11 13h7.25A5.75 5.75 0 0124 7.25zm9.4 8.25H14.6l1.69 22.38c.07.91.83 1.62 1.74 1.62h11.94c.91 0 1.67-.7 1.74-1.62l1.7-22.38zm-6.15 5.25c.65 0 1.18.5 1.24 1.12l.01.13v11a1.25 1.25 0 01-2.5.13V22c0-.69.56-1.25 1.25-1.25zm-6.5 0c.65 0 1.18.5 1.24 1.12L22 22v11a1.25 1.25 0 01-2.5.13V22c0-.69.56-1.25 1.25-1.25zm3.25-11a3.25 3.25 0 00-3.24 3.07l-.01.18h6.5c0-1.8-1.46-3.25-3.25-3.25z" fill={primaryFill} /></svg>;
};

export default Delete48Regular;