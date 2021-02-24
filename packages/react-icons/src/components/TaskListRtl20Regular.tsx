import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TaskListRtl20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.35 6.4c.2.2.2.5 0 .7L12.6 8.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm0 5.7a.5.5 0 00-.7-.7l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75zM6 12.5c0-.28.22-.5.5-.5H9a.5.5 0 010 1H6.5a.5.5 0 01-.5-.5zM6.5 7a.5.5 0 000 1H9a.5.5 0 000-1H6.5zM3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11zM4.5 4a.5.5 0 00-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11z" fill={primaryFill} /></svg>;
};

export default TaskListRtl20Regular;