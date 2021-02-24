import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NotebookSubsection24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2a4.5 4.5 0 00-4.5 4.5v9.4c0 .98.63 1.81 1.5 2.12V6.5a3 3 0 013-3h5A2.25 2.25 0 0011.88 2H9zM7 6.75C7 5.51 8 4.5 9.25 4.5H15V2.75a.75.75 0 011.5 0v18.5a.75.75 0 01-1.5 0V20H9.25C8.01 20 7 19 7 17.75v-11z" fill={primaryFill} /></svg>;
};

export default NotebookSubsection24Filled;