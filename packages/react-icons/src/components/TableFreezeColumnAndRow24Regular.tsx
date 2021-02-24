import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableFreezeColumnAndRow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM19.5 8.5H9.25a.75.75 0 00-.75.75V19.5H6.25c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75V8.5zM14 10v4h-4v-4h4zm1.5 4v-4h4v4h-4zM14 15.5v4h-4v-4h4zm1.5 4v-4h4v2.25c0 .97-.78 1.75-1.75 1.75H15.5z" fill={primaryFill} /></svg>;
};

export default TableFreezeColumnAndRow24Regular;