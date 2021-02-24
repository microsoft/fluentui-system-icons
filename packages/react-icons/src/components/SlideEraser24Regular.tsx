import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideEraser24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.75A2.75 2.75 0 014.75 4h14.49a2.75 2.75 0 012.74 2.75v5.78l-.8-.8a2.5 2.5 0 00-.7-.5V6.76c0-.7-.55-1.25-1.24-1.25H4.74c-.68 0-1.24.56-1.24 1.25v10.5c0 .69.56 1.25 1.25 1.25H12c.01.53.2 1.06.56 1.5H4.75A2.75 2.75 0 012 17.24V6.75zm18.48 5.69a1.5 1.5 0 00-2.12 0l-3.11 3.1 4.2 4.21 3.11-3.1a1.5 1.5 0 000-2.13l-2.08-2.08zm-7.04 4.92l1.1-1.1 4.2 4.2-1.1 1.1a1.5 1.5 0 01-2.11 0l-2.09-2.08a1.5 1.5 0 010-2.13z" fill={primaryFill} /></svg>;
};

export default SlideEraser24Regular;