import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Table20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 17h1.5a2.5 2.5 0 002.5-2.5V13h-4v4z" fill={primaryFill} /><path d="M13 12V8h4v4h-4z" fill={primaryFill} /><path d="M12 12H8V8h4v4z" fill={primaryFill} /><path d="M8 13h4v4H8v-4z" fill={primaryFill} /><path d="M7 12V8H3v4h4z" fill={primaryFill} /><path d="M3 13h4v4H5.5A2.5 2.5 0 013 14.5V13z" fill={primaryFill} /><path d="M13 7h4V5.5A2.5 2.5 0 0014.5 3H13v4z" fill={primaryFill} /><path d="M12 3v4H8V3h4z" fill={primaryFill} /><path d="M7 3v4H3V5.5A2.5 2.5 0 015.5 3H7z" fill={primaryFill} /></svg>;
};

export default Table20Filled;