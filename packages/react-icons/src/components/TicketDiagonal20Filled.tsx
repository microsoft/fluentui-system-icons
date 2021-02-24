import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TicketDiagonal20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.74 2.53a1.75 1.75 0 00-2.48 0l-7.73 7.73c-.68.69-.68 1.8 0 2.48l.78.77c.4.4.98.34 1.34.14a1.25 1.25 0 011.7 1.7c-.2.36-.27.94.14 1.34l.77.78c.69.68 1.8.68 2.48 0l7.73-7.73c.68-.69.68-1.8 0-2.48l-.78-.77c-.4-.4-.98-.34-1.34-.14a1.25 1.25 0 01-1.7-1.7c.2-.36.27-.94-.14-1.34l-.77-.78z" fill={primaryFill} /></svg>;
};

export default TicketDiagonal20Filled;