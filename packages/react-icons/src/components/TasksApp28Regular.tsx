import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TasksApp28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.25C4 3.45 5.46 2 7.25 2h13.5C22.55 2 24 3.46 24 5.25v12.13c-.12.08-.23.17-.34.28l-1.16 1.16V5.25c0-.97-.78-1.75-1.75-1.75H7.25c-.97 0-1.75.78-1.75 1.75v17.5c0 .97.78 1.75 1.75 1.75h8.07l1.5 1.5H7.25A3.25 3.25 0 014 22.75V5.25z" fill={primaryFill} /><path d="M10.5 8.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M9.25 15.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M9.25 20.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M12.75 8a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M12 14c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 0112 14z" fill={primaryFill} /><path d="M12.75 18.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M25.78 19.78l-6 6a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 111.06 1.06z" fill={primaryFill} /></svg>;
};

export default TasksApp28Regular;