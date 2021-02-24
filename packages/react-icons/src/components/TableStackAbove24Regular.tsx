import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackAbove24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h16.5z" fill={primaryFill} /><path d="M20.25 8.5c.41 0 .75.34.75.75v8.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75v-8.5c0-.41.34-.75.75-.75h16.5zM14 10h-4v4h4v-4zm-5.5 0h-4v4h4v-4zm0 5.5h-4v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4zm5.5 0h-4v4h4v-4zm1.5 4h2.25c.97 0 1.75-.78 1.75-1.75V15.5h-4v4zm4-9.5h-4v4h4v-4z" fill={primaryFill} /></svg>;
};

export default TableStackAbove24Regular;