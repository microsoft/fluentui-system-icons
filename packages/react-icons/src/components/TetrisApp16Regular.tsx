import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TetrisApp16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1H9v2a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h2V3zm6 0H9v2h2V3zM8 3H6v2h2V3zM3 6v2h2V6H3zm5 0H6v2h2V6zm2 2.07a1 1 0 011-1h2a1 1 0 011 1V13a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h5V8.07zM13 10V8.07h-2V10h2zm-2 3h2v-2h-2v2zm-3-2v2h2v-2H8zm-1 0H5v2h2v-2z" fill={primaryFill} /></svg>;
};

export default TetrisApp16Regular;