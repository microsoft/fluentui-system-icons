import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderSwap16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 4L5.56 5.5H2V5c0-1.1.9-2 2-2h1.75a.5.5 0 01.32.11l1.1.89z" fill={primaryFill} /><path d="M2 11V6.5h3.75a.5.5 0 00.34-.13L8.65 4H12a2 2 0 012 2v2.88l-.44-.44a1.5 1.5 0 00-2.56 1 1.5 1.5 0 00-2.56-1l-2 2a1.5 1.5 0 000 2.13l.44.43H4a2 2 0 01-2-2z" fill={primaryFill} /><path d="M8.71 12l1.15 1.15a.5.5 0 01-.71.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L8.72 11h4.58l-1.14-1.14a.5.5 0 11.7-.7l2 1.99a.5.5 0 010 .7l-2 2a.5.5 0 11-.7-.7L13.29 12H8.71z" fill={primaryFill} /></svg>;
};

export default FolderSwap16Filled;