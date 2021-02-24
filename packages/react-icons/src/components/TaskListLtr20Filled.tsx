import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TaskListLtr20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-11zm4.85 3.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 11.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm0 5c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zM11 12h2.5a.5.5 0 010 1H11a.5.5 0 010-1zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 010 1H11a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default TaskListLtr20Filled;