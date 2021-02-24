import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Table16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM6 13h4v-2H6v2zm-1-2H3v.5c0 .83.67 1.5 1.5 1.5H5v-2zm1-1h4V6H6v4zM5 6H3v4h2V6zm1-1h4V3H6v2zM5 3h-.5C3.67 3 3 3.67 3 4.5V5h2V3zm8 3h-2v4h2V6zm0 5h-2v2h.5c.83 0 1.5-.67 1.5-1.5V11zm0-6v-.5c0-.83-.67-1.5-1.5-1.5H11v2h2z" fill={primaryFill} /></svg>;
};

export default Table16Regular;