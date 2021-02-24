import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NotebookSection20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.5a.5.5 0 00-1 0V3H8a2 2 0 00-2 2v10c0 1.1.9 2 2 2h5v.5a.5.5 0 001 0v-15z" fill={primaryFill} /></svg>;
};

export default NotebookSection20Filled;