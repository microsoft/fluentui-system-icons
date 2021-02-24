import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSwitch24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.78 1.22a.75.75 0 00-1.06 1.06l.72.72H6.25A3.25 3.25 0 003 6.25v2.19l-.72-.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l2-2a.75.75 0 000-1.06.75.75 0 00-1.06 0l-.72.72V6.25c0-.97.78-1.75 1.75-1.75h2.19l-.72.72a.75.75 0 00.78 1.24c.1-.04.2-.1.28-.18l2-2c.3-.3.3-.77 0-1.06l-2-2z" fill={primaryFill} /><path d="M11.83 3c.23.47.23 1.03 0 1.5H14v4h-4V6.47L9.49 7c-.28.28-.63.44-.99.5V8.5H7.48c-.05.36-.21.7-.5.99l-.5.51H8.5v4h-4v-2.17c-.47.23-1.03.23-1.5 0v5.92C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3h-5.92zM10 14v-4h4v4h-4zm5.5 0v-4h4v4h-4zM14 15.5v4h-4v-4h4zm1.5 4v-4h4v2.25c0 .97-.78 1.75-1.75 1.75H15.5zm0-11v-4h2.25c.97 0 1.75.78 1.75 1.75V8.5h-4zm-11 7h4v4H6.25c-.97 0-1.75-.78-1.75-1.75V15.5z" fill={primaryFill} /></svg>;
};

export default TableSwitch24Regular;