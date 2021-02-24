import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CurrencyDollarRupee16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2.75a.75.75 0 00-1.5 0v.35c-1.15.33-2 1.4-2 2.65v.04c0 1.1.65 2.1 1.67 2.55L4 8.5v2.75c-.3-.23-.5-.6-.5-1v-.6a.75.75 0 00-1.5 0v.6c0 1.26.85 2.32 2 2.65v.36a.75.75 0 001.5 0v-.37a2.78 2.78 0 00.34-5.22L5.5 7.5V4.75c.3.23.5.6.5 1v.62a.75.75 0 101.5 0v-.62c0-1.26-.84-2.32-2-2.65v-.35zm-1.5 2V6.8c-.31-.24-.5-.62-.5-1.02v-.04c0-.4.2-.77.5-1zm1.5 4.44c.31.24.5.62.5 1.03 0 .41-.2.78-.5 1.01V9.2z" fill={primaryFill} /><path d="M8 3.25c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-.4c.09.16.17.33.23.5h.17a.75.75 0 010 1.5h-.04a3 3 0 01-2.88 2.5l3.5 4.28a.75.75 0 11-1.16.94l-4.5-5.5A.75.75 0 018.75 7h1.5c.65 0 1.2-.42 1.41-1H8.75a.75.75 0 110-1.5h2.62a1.5 1.5 0 00-1.12-.5h-1.5A.75.75 0 018 3.25z" fill={primaryFill} /></svg>;
};

export default CurrencyDollarRupee16Filled;