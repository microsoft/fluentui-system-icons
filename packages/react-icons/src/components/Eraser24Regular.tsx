import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Eraser24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.87 2.67l4.97 4.97c.88.88.88 2.3 0 3.18l-8.68 8.68h6.1c.37 0 .69.28.74.65v.1c0 .38-.28.7-.64.74l-.1.01H9.83a2.24 2.24 0 01-1.71-.65l-4.97-4.97a2.25 2.25 0 010-3.18l9.53-9.53c.88-.88 2.3-.88 3.18 0zm-10.16 9.1l-1.49 1.49c-.3.29-.3.76 0 1.06l4.97 4.96c.15.15.34.22.53.22h.07a.75.75 0 00.46-.22l1.49-1.48-6.03-6.03zm8.04-8.04L6.77 10.7l6.03 6.03 6.98-6.98c.3-.3.3-.77 0-1.06L14.8 3.73a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
};

export default Eraser24Regular;