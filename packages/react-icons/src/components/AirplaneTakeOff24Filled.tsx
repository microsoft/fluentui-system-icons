import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AirplaneTakeOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.4 5.93L10.51 4.4a1.84 1.84 0 00-2.76 2.33l.38.68 3.46-.72c.06-.01.17-.06.3-.2.14-.18.3-.37.5-.57z" fill={primaryFill} /><path d="M3 20a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M21.55 6.83c-.95-1.08-2.62-2.5-4.86-2.33a4.7 4.7 0 00-2.43 1.06c-.67.52-1.22 1.12-1.6 1.57-.24.3-.54.49-.85.55l-4.67.97-.96-1.77A1.7 1.7 0 003 7.7v3.7a2.3 2.3 0 002.73 2.24l3.3-.63-.51 1.23a2 2 0 003.46 1.97l3.23-4.32 5.37-1.85a2.14 2.14 0 001.34-1.32 1.9 1.9 0 00-.37-1.88z" fill={primaryFill} /></svg>;
};

export default AirplaneTakeOff24Filled;