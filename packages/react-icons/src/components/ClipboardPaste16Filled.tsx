import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardPaste16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2h.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59A1.5 1.5 0 0112 3.5V5h-1V3.5a.5.5 0 00-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H3.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2.61v1H3.5A1.5 1.5 0 012 13.5v-10A1.5 1.5 0 013.5 2zm2 0a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M8.5 6C7.67 6 7 6.67 7 7.5v6c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-4z" fill={primaryFill} /></svg>;
};

export default ClipboardPaste16Filled;