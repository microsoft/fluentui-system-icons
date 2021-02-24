import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingToolAccent16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2h-3v1.98h2.5a.5.5 0 00.5-.5V2zm-4 1.98V2H2v1.48c0 .27.23.5.5.5H10zM7.52 13.1c-.04-.36 0-.75.06-1.1h.84c.05.35.1.74.06 1.1-.03.27-.1.53-.2.7-.09.15-.17.2-.28.2-.1 0-.2-.05-.28-.2-.1-.17-.17-.43-.2-.7zM9.9 4.98h1.12l-2.4 4.75a.5.5 0 01-.89-.46l2.17-4.3z" fill={primaryFill} /></svg>;
};

export default InkingToolAccent16Filled;