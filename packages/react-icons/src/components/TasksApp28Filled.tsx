import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TasksApp28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 2A3.25 3.25 0 004 5.25v17.5C4 24.55 5.46 26 7.25 26h9.57l-2.16-2.16a2.25 2.25 0 113.18-3.18l1.41 1.4 4.4-4.4c.12-.1.23-.2.35-.28V5.25C24 3.45 22.54 2 20.75 2H7.25zm3.25 6.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-1.25 6.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12.75 8h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5zM12 14c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 0112 14zm.75 4.5h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M19.78 25.78l6-6a.75.75 0 10-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0z" fill={primaryFill} /></svg>;
};

export default TasksApp28Filled;