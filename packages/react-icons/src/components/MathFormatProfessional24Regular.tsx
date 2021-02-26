import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MathFormatProfessional24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.66 4.83a.75.75 0 00-1.09-.24l-.38.27a.75.75 0 11-.88-1.22l.39-.28a2.25 2.25 0 013.27.74l.67 1.2 2.08-2.08a.75.75 0 011.06 1.06L18.4 6.66l.89 1.59c.22.4.76.5 1.12.21l.37-.3a.75.75 0 11.94 1.17l-.36.3c-1.09.88-2.7.57-3.38-.65l-.68-1.22-2.02 2.02a.75.75 0 01-1.06-1.06l2.32-2.32-.88-1.57zm-7.31 9.06a26 26 0 01-4.68.36c-.34 1.25-.24 2.16.07 2.79.34.7 1 1.18 1.87 1.4 1.8.45 4.37-.26 6.08-2.21a.75.75 0 011.12.99c-2.04 2.33-5.17 3.27-7.56 2.67a4.2 4.2 0 01-2.86-2.2c-.57-1.18-.59-2.68.02-4.44A9.59 9.59 0 015.73 8.5a7.91 7.91 0 013.12-1.37c1.55-.32 2.9.12 3.65 1.1.75.99.74 2.34-.1 3.48-.92 1.27-2.44 1.88-4.05 2.2zm.8-5.3c-.57.11-1.53.37-2.53 1.1a7.6 7.6 0 00-2.39 3.05 22.4 22.4 0 003.83-.32c1.48-.29 2.54-.8 3.13-1.6.5-.67.42-1.3.12-1.7-.32-.4-1.03-.77-2.16-.54z" fill={primaryFill} /></svg>;
};

export default MathFormatProfessional24Regular;