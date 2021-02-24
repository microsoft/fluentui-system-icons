import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowShield16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75A2.75 2.75 0 014.75 2h6.5A2.75 2.75 0 0114 4.75v1.67c-.5-.14-1-.44-1.5-.97V5h-9v6.25c0 .69.56 1.25 1.25 1.25h2.64a5.39 5.39 0 00.85 1.5H4.75A2.75 2.75 0 012 11.25v-6.5z" fill={primaryFill} /><path d="M12.5 6.78a3.68 3.68 0 002.15.72c.17 0 .31.13.34.3l.01.08v2.25a4.75 4.75 0 01-3.39 4.85.33.33 0 01-.22 0A5.67 5.67 0 019.63 14c-.5-.42-.88-.92-1.15-1.5A5.45 5.45 0 018 10.36V7.87c0-.2.16-.37.35-.37 1.07 0 2.03-.46 2.9-1.39a.33.33 0 01.5 0c.24.26.5.48.75.67z" fill={primaryFill} /></svg>;
};

export default WindowShield16Filled;