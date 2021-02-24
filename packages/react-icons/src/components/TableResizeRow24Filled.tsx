import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableResizeRow24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 17.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75v-.25h6.65l1.19 1.06c.66.59 1.66.59 2.32 0l1.2-1.06H21v.25z" fill={primaryFill} /><path d="M8.44 14.09c.47-.53 1.18-.7 1.81-.52v-3.14A1.75 1.75 0 018.17 8H3v8h5.17c-.3-.62-.2-1.37.27-1.91z" fill={primaryFill} /><path d="M13.75 10.43v3.14A1.75 1.75 0 0115.83 16H21V8h-5.17a1.75 1.75 0 01-2.08 2.43z" fill={primaryFill} /><path d="M14.35 6.5H21v-.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v.25h6.65l1.19-1.06a1.75 1.75 0 012.32 0l1.2 1.06z" fill={primaryFill} /><path d="M12.75 15.58V8.42l1 .9a.75.75 0 001-1.13l-2.25-2a.75.75 0 00-1 0l-2.25 2a.75.75 0 101 1.12l1-.89v7.16l-1-.89a.75.75 0 10-1 1.12l2.25 2 .01.01a.75.75 0 001-.01l2.24-2a.75.75 0 00-1-1.12l-1 .89z" fill={primaryFill} /></svg>;
};

export default TableResizeRow24Filled;