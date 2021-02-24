import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ScreenPerson20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v1.7c-.25-.43-.6-.8-1-1.07V6a1 1 0 00-1-1H4a1 1 0 00-1 1v7a1 1 0 001 1h6.08c-.05.2-.08.4-.08.62v.32a4 4 0 000 .06H4a2 2 0 01-2-2V6zm13 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.57 1.53c.27-.3.66-.53 1.12-.53h4.9c.46 0 .86.24 1.12.53.26.29.43.69.43 1.09v.32c0 1.63-1.63 3.06-4 3.06s-4-1.43-4-3.06v-.32c0-.4.17-.8.43-1.1z" fill={primaryFill} /></svg>;
};

export default ScreenPerson20Regular;