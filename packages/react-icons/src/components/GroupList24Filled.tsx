import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GroupList24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 12h3a1 1 0 01.12 2H4v5h2a1 1 0 011 .88V20a1 1 0 01-.88 1H3a1 1 0 01-1-.88V13a1 1 0 01.88-1H3zm18 5a1 1 0 01.12 2H9a1 1 0 01-.12-2H21zm0-3a1 1 0 01.12 2H9a1 1 0 01-.12-2H21zM6 2a1 1 0 01.12 2H4v5h2a1 1 0 011 .88V10a1 1 0 01-.88.99H3a1 1 0 01-1-.88V3a1 1 0 01.88-1H6zm15 5a1 1 0 01.12 2H9a1 1 0 01-.12-2H21zm0-3a1 1 0 01.12 2H9a1 1 0 01-.12-2H21z" fill={primaryFill} /></svg>;
};

export default GroupList24Filled;