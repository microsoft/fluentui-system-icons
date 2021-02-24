import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TaskListAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v6.77c-.46-.3-.97-.53-1.5-.7V5.24a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h6.06c.18.53.42 1.04.71 1.5H5.25C4.01 21 3 20 3 18.75V5.25z" fill={primaryFill} /><path d="M10.78 7.72c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M10.78 13.22c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 100-1H18v-2.5a.5.5 0 10-1 0V17h-2.5a.5.5 0 000 1H17v2.5a.5.5 0 101 0z" fill={primaryFill} /><path d="M13.25 8.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" fill={primaryFill} /></svg>;
};

export default TaskListAdd24Regular;