import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSwitch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.78 1.22a.75.75 0 00-1.06 1.06l.72.72H6.25A3.25 3.25 0 003 6.25v2.19l-.72-.72a.75.75 0 00-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 00-1.06-1.06l-.72.72V6.25c0-.97.78-1.75 1.75-1.75h2.19l-.72.72a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /><path d="M14.5 8h-5V6.97L11.5 5c.54-.54.65-1.34.34-1.99h2.67v5z" fill={primaryFill} /><path d="M3 11.83v2.67h5v-5H6.97L5 11.49c-.54.54-1.34.65-1.99.34z" fill={primaryFill} /><path d="M14.5 14.5v-5h-5v5h5z" fill={primaryFill} /><path d="M16 14.5v-5h5v5h-5z" fill={primaryFill} /><path d="M16 8h5V6.25C21 4.45 19.54 3 17.75 3H16v5z" fill={primaryFill} /><path d="M14.5 21v-5h-5v5h5z" fill={primaryFill} /><path d="M8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5z" fill={primaryFill} /><path d="M16 16h5v1.75c0 1.8-1.46 3.25-3.25 3.25H16v-5z" fill={primaryFill} /></svg>;
};

export default TableSwitch24Filled;