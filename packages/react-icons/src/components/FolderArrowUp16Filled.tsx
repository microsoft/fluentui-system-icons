import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderArrowUp16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 3L5.56 4.5H2V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.32.11l1.1.89z" fill={primaryFill} /><path d="M2 10V5.5h3.75a.5.5 0 00.34-.13L8.65 3H12a2 2 0 012 2v1.26A5.5 5.5 0 005.2 12H4a2 2 0 01-2-2z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35A.5.5 0 0010.5 8a.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L10 9.71v2.79a.5.5 0 001 0V9.7l1.15 1.15a.5.5 0 00.7-.7l-2-2z" fill={primaryFill} /></svg>;
};

export default FolderArrowUp16Filled;