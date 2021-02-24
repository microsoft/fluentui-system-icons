import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableResizeColumn24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25h-.25v-6.65l1.06-1.19c.59-.66.59-1.66 0-2.32l-1.06-1.2V3h.25z" fill={primaryFill} /><path d="M14.09 15.56a1.75 1.75 0 01-.52-1.81h-3.14A1.75 1.75 0 018 15.83V21h8v-5.17c-.62.3-1.37.2-1.91-.27z" fill={primaryFill} /><path d="M14.09 8.44c.54-.48 1.3-.56 1.91-.27V3H8v5.17a1.75 1.75 0 012.43 2.08h3.14a1.75 1.75 0 01.52-1.8z" fill={primaryFill} /><path d="M6.5 9.65V3h-.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h.25v-6.65l-1.06-1.19a1.75 1.75 0 010-2.32l1.06-1.2z" fill={primaryFill} /><path d="M15.58 11.25H8.42l.9-1a.75.75 0 00-1.13-1l-2 2.25a.75.75 0 000 1l2 2.25a.75.75 0 101.12-1l-.89-1h7.16l-.89 1a.75.75 0 101.12 1l2-2.25.01-.01a.75.75 0 00-.01-1l-2-2.24a.75.75 0 00-1.12 1l.89 1z" fill={primaryFill} /></svg>;
};

export default TableResizeColumn24Filled;