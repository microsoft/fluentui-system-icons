import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderZip16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 4l-1.11-.89A.5.5 0 005.75 3H4a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2H7.18zM4 4h1.58l.71.57-.77.93H3V5a1 1 0 011-1zm-1 7V6.5h2.75a.5.5 0 00.39-.18L7.24 5H9v1.5c0 .28.22.5.5.5h.5v1h-.5a.5.5 0 100 1h.5v1h-.5a.5.5 0 000 1h.5v1H4a1 1 0 01-1-1zm8 1v-2h.5a.5.5 0 100-1H11V7h.5a.5.5 0 00.5-.5V5a1 1 0 011 1v5a1 1 0 01-1 1h-1zm-1-7h1v1h-1V5z" fill={primaryFill} /></svg>;
};

export default FolderZip16Regular;