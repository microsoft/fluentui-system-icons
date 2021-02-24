import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderArrowUp16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5V10a1 1 0 001 1h1.02c.03.34.1.68.19 1H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.32.11l1.1.89H12a2 2 0 012 2v1.26a5.5 5.5 0 00-1-.66V5a1 1 0 00-1-1H7.23L6.14 5.32a.5.5 0 01-.39.18H3zM5.58 3H4a1 1 0 00-1 1v.5h2.52l.77-.93L5.58 3z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35A.5.5 0 0010.5 8a.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L10 9.71v2.79a.5.5 0 001 0V9.7l1.15 1.15a.5.5 0 00.7-.7l-2-2z" fill={primaryFill} /></svg>;
};

export default FolderArrowUp16Regular;