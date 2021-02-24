import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableDeleteColumn20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.5a.5.5 0 00-1 0v4.88c.13.1.24.22.36.34l.14.15.14-.15c.12-.12.23-.24.36-.34V2.5zm-1 15v-4.89c.13-.1.24-.23.36-.35l.14-.14.14.14c.12.12.23.24.36.35v4.89a.5.5 0 01-1 0zM2 3.5c0-.28.22-.5.5-.5H4a2 2 0 012 2v2H2V3.5zm0 13V13h4v2a2 2 0 01-2 2H2.5a.5.5 0 01-.5-.5zM6 8v4H2V8h4zm12-4.5a.5.5 0 00-.5-.5H16a2 2 0 00-2 2v2h4V3.5zM14 13v2c0 1.1.9 2 2 2h1.5a.5.5 0 00.5-.5V13h-4zm-2.15-4.85a.5.5 0 00-.7 0L10 9.29 8.85 8.15a.5.5 0 10-.7.7L9.29 10l-1.14 1.15a.5.5 0 00.7.7L10 10.71l1.15 1.14a.5.5 0 00.7-.7L10.71 10l1.14-1.15a.5.5 0 000-.7zM18 12V8h-4v4h4z" fill={primaryFill} /></svg>;
};

export default TableDeleteColumn20Filled;