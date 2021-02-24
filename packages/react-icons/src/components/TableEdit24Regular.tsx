import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.45 3 6.25 3h11.5C19.55 3 21 4.45 21 6.25v4.76a3.3 3.3 0 00-1.5.22V10h-4v4h.85L14 16.35v-.85h-4v4h1.54l-.02.08-.36 1.42H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25zM4.5 10v4h4v-4h-4zm5.5 0v4h4v-4h-4zm5.5-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4zm-1.5-4h-4v4h4v-4zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4zm15.26-3.3a2.27 2.27 0 00-.66.47l-5.9 5.9a2.68 2.68 0 00-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-2.57-3.7z" fill={primaryFill} /></svg>;
};

export default TableEdit24Regular;