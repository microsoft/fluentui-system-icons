import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderAdd48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.25 12.5c2 0 3.64 1.57 3.74 3.55l.01.2v7.8A12 12 0 0025.6 39l-17.85.01c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1h15.42zM36 23a10 10 0 110 20 10 10 0 010-20zm0 4a1 1 0 00-1 .88V32h-4a1 1 0 00-1 .88V33a1 1 0 00.88 1H35v4a1 1 0 00.88 1H36a1 1 0 001-.88V34h4a1 1 0 001-.88V33a1 1 0 00-.88-1H37v-4a1 1 0 00-.88-1H36zM17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31z" fill={primaryFill} /></svg>;
};

export default FolderAdd48Filled;