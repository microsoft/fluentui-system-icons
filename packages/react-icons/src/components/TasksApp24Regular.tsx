import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TasksApp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 4.1A2.25 2.25 0 0017.74 2H6.1A2.25 2.25 0 004 4.26V19.9A2.25 2.25 0 006.26 22h7.57l-1.5-1.5H6.15a.75.75 0 01-.65-.75V4.15a.75.75 0 01.75-.65h11.6c.37.06.65.37.65.75v11.57l1.16-1.16c.1-.1.22-.2.34-.28V4.1z" fill={primaryFill} /><path d="M16.29 22a.7.7 0 01-.08 0 .75.75 0 01-.5-.22l-2.5-2.5a.75.75 0 011.07-1.06l1.97 1.97 4.47-4.47a.75.75 0 111.06 1.06l-5 5c-.13.13-.3.21-.5.22z" fill={primaryFill} /><path d="M13.84 16.5H11.25a.75.75 0 010-1.5h5a.75.75 0 110 1.5h-2.4z" fill={primaryFill} /><path d="M9 7.75a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10.5 7.75c0-.41.33-.75.75-.75h5a.75.75 0 110 1.5h-5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M11.25 11a.75.75 0 000 1.5h5a.75.75 0 100-1.5h-5z" fill={primaryFill} /><path d="M8 12.75a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M9 15.75a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
};

export default TasksApp24Regular;