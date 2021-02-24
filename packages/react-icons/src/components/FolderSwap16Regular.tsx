import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderSwap16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11V6.5h2.75a.5.5 0 00.39-.18L7.24 5H12a1 1 0 011 1v2.09c.2.07.4.19.56.35l.44.44V6a2 2 0 00-2-2H7.18l-1.11-.89A.5.5 0 005.75 3H4a2 2 0 00-2 2v6c0 1.1.9 2 2 2h2.88l-.44-.43a1.5 1.5 0 01-.36-.57H4a1 1 0 01-1-1zm1-7h1.58l.71.57-.77.93H3V5a1 1 0 011-1z" fill={primaryFill} /><path d="M9.86 9.86a.5.5 0 00-.71-.7l-2 1.99a.5.5 0 000 .7l2 2a.5.5 0 10.7-.7L8.72 12h4.58l-1.14 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L13.29 11H8.71l1.15-1.14z" fill={primaryFill} /></svg>;
};

export default FolderSwap16Regular;