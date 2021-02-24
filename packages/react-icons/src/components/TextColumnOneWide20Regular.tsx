import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnOneWide20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M3.5 8a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M3 11.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 14a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /></svg>;
};

export default TextColumnOneWide20Regular;