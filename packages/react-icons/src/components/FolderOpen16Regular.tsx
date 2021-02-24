import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderOpen16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6a2 2 0 00-2-2H6.17l-1.1-.9a.5.5 0 00-.32-.1H3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h9.25a1.5 1.5 0 001.44-1.08l1.17-4A1.5 1.5 0 0013.42 6H13zM3 4h1.58l1.1.89c.1.07.2.1.32.1h5a1 1 0 011 1V6H4.25a1.5 1.5 0 00-1.44 1.08L2 9.86V5a1 1 0 011-1zm.77 3.36A.5.5 0 014.25 7h9.17a.5.5 0 01.48.64l-1.17 4a.5.5 0 01-.48.36H3.08a.5.5 0 01-.48-.64l1.17-4z" fill={primaryFill} /></svg>;
};

export default FolderOpen16Regular;