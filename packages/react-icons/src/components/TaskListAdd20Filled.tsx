import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TaskListAdd20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1A5.5 5.5 0 009.6 17H5.5A2.5 2.5 0 013 14.5v-9zm5.85 1.35a.5.5 0 10-.7-.7L6.5 7.79l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3a.5.5 0 00-.7 0L6.5 12.79l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2a.5.5 0 000-.7zM10.5 7a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default TaskListAdd20Filled;