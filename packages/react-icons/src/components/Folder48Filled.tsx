import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Folder48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.83 12.5h15.42c2 0 3.64 1.57 3.74 3.55l.01.2v19c0 2-1.57 3.64-3.55 3.74l-.2.01H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31z" fill={primaryFill} /></svg>;
};

export default Folder48Filled;