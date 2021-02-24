import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25zM4.5 10v4h4v-4h-4zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4zm-1.5-4h-4v4h4v-4zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4zm8 .13l.45.43a2 2 0 010 2.88l-.45.43c.2.57.5 1.1.85 1.57l.6-.18a2 2 0 012.52 1.45l.17.72a5.18 5.18 0 001.72 0l.17-.72a2 2 0 012.52-1.45l.6.18c.36-.47.65-1 .85-1.57l-.45-.43a2 2 0 010-2.88l.45-.43c-.2-.58-.5-1.1-.85-1.57l-.6.18a2 2 0 01-2.52-1.45l-.17-.72a5.17 5.17 0 00-1.72 0l-.17.72a2 2 0 01-2.51 1.45l-.6-.18c-.37.47-.66 1-.86 1.57zm5 3.37c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default TableSettings24Regular;