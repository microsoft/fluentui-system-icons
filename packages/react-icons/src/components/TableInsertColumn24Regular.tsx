import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableInsertColumn24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3.75v16.5a.75.75 0 01-1.5 0V3.75a.75.75 0 011.5 0z" fill={primaryFill} /><path d="M14.25 3c1.24 0 2.25 1 2.25 2.25v13.5c0 1.24-1 2.25-2.25 2.25h-4.5c-1.24 0-2.25-1-2.25-2.25V5.25C7.5 4.01 8.5 3 9.75 3h4.5zM15 5.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V8.5h6V5.25zM9 14h6v-4H9v4zm0 1.5v3.25c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75V15.5H9z" fill={primaryFill} /><path d="M21 20.25V3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0z" fill={primaryFill} /></svg>;
};

export default TableInsertColumn24Regular;