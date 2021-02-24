import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShiftsActivity20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.48a.5.5 0 01-.46.54 7 7 0 107.45 7.44.5.5 0 111 .07 8 8 0 11-8.52-8.51.5.5 0 01.53.46z" fill={primaryFill} /><path d="M11 2.55a.5.5 0 01.6-.4c.56.12 1.1.3 1.6.52a.5.5 0 11-.4.91c-.44-.2-.91-.34-1.4-.44a.5.5 0 01-.4-.59z" fill={primaryFill} /><path d="M17.34 6.8a.5.5 0 10-.92.4c.2.45.34.91.44 1.4a.5.5 0 00.98-.2 7.95 7.95 0 00-.5-1.6z" fill={primaryFill} /><path d="M14.41 3.92a.5.5 0 01.7-.07c.4.33.75.69 1.08 1.08a.5.5 0 11-.78.63c-.28-.34-.6-.66-.93-.94a.5.5 0 01-.07-.7z" fill={primaryFill} /><path d="M10 5.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h3a.5.5 0 000-1H10V5.5z" fill={primaryFill} /></svg>;
};

export default ShiftsActivity20Regular;