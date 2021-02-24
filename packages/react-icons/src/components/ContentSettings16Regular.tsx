import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V7a5 5 0 00-1-.58V5H3v6.5c0 .83.67 1.5 1.5 1.5h1.92A5 5 0 007 14H4.5A2.5 2.5 0 012 11.5v-7zM3.08 4h9.83c-.2-.58-.76-1-1.41-1h-7c-.65 0-1.2.42-1.42 1z" fill={primaryFill} /><path d="M8 6.5V7c-.38.28-.71.62-1 1V7H5v4h1c0 .34.03.68.1 1H4.5a.5.5 0 01-.5-.5v-5c0-.28.23-.5.5-.5h3c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M10.32 15.1l.02.08a3.98 3.98 0 001.32 0l.02-.08a2 2 0 012.51-1.45c.28-.36.5-.77.66-1.21a2 2 0 010-2.88 4.27 4.27 0 00-.66-1.2 2 2 0 01-2.5-1.46l-.03-.08a3.98 3.98 0 00-1.32 0l-.02.08A2 2 0 017.8 8.35c-.28.36-.5.77-.66 1.21a2 2 0 010 2.88c.16.44.38.85.66 1.2a2 2 0 012.5 1.46zm1.8-4.1c0 .64-.5 1.15-1.12 1.15-.62 0-1.12-.51-1.12-1.15 0-.64.5-1.15 1.12-1.15.62 0 1.12.51 1.12 1.15z" fill={primaryFill} /></svg>;
};

export default ContentSettings16Regular;