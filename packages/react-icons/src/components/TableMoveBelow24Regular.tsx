import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableMoveBelow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 15.5a.75.75 0 01-.75-.75v-8.5C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v8.5c0 .41-.34.75-.75.75h-4.27A1.75 1.75 0 0014 13.52V10h-4v3.52a1.75 1.75 0 00-1.98 1.98H3.75zm6.25-7h4v-4h-4v4zm9.5 5.5v-4h-4v4h4zm-4-5.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4zm-7-4H6.25c-.97 0-1.75.78-1.75 1.75V8.5h4v-4zm-4 9.5h4v-4h-4v4z" fill={primaryFill} /><path d="M3.75 19.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M9.19 14.75a.75.75 0 011.06-.06l1 .89v-2.83a.75.75 0 011.5 0v2.83l1-.9a.75.75 0 011 1.13l-2.25 2a.75.75 0 01-1 0l-2.25-2a.75.75 0 01-.06-1.06z" fill={primaryFill} /></svg>;
};

export default TableMoveBelow24Regular;