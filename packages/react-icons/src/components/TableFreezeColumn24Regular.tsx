import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableFreezeColumn24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H8.5v-15H6.25zm7.75 15v-4h-4v4h4zm1.5 0h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4v4zm0-5.5h4v-4h-4v4zM14 10h-4v4h4v-4zm0-1.5v-4h-4v4h4zm1.5 0h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4z" fill={primaryFill} /></svg>;
};

export default TableFreezeColumn24Regular;