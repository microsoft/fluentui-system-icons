import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 2a.75.75 0 000 1.5H9.5v.75c0 .39-.1.68-.23.86a.58.58 0 01-.51.24.75.75 0 000 1.5c.74 0 1.34-.33 1.72-.86.37-.5.52-1.13.52-1.74v-1.5a.75.75 0 00-.75-.75h-2.5z" fill={primaryFill} /><path d="M6.7 4.73a.75.75 0 00-1.4 0l-3.25 8.24a.75.75 0 101.4.56l.8-2.03h3.5l.8 2.02a.75.75 0 001.4-.54L6.7 4.73zM7.16 10H4.83L6 7.05 7.16 10z" fill={primaryFill} /><path d="M12.75 2c.41 0 .75.34.75.75V5h.25a.75.75 0 010 1.5h-.25v3.75a.75.75 0 01-1.5 0v-7.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default LocalLanguage16Filled;