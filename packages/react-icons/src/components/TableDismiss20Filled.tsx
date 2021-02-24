import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableDismiss20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 7h4V5.5A2.5 2.5 0 0014.5 3H13v4z" fill={primaryFill} /><path d="M7 12V8H3v4h4z" fill={primaryFill} /><path d="M9.6 12A5.52 5.52 0 0112 9.6V8H8v4h1.6z" fill={primaryFill} /><path d="M14.5 9c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2z" fill={primaryFill} /><path d="M9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5z" fill={primaryFill} /><path d="M7 13H3v1.5A2.5 2.5 0 005.5 17H7v-4z" fill={primaryFill} /><path d="M12 7V3H8v4h4z" fill={primaryFill} /><path d="M7 3v4H3V5.5A2.5 2.5 0 015.5 3H7z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.8 0l1.15-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15z" fill={primaryFill} /></svg>;
};

export default TableDismiss20Filled;