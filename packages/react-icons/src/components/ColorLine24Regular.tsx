import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorLine24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.38 14A2.5 2.5 0 002 16.5v3A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-3a2.5 2.5 0 00-2.5-2.5h-5.95l-1.32 1.31-.2.19h7.47a1 1 0 011 1v3a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3c0-.37.2-.7.5-.87a2 2 0 01.1-.74l.28-.89z" fill={primaryFill} /><path d="M18.65 2.94a3.22 3.22 0 010 4.56l-7.13 7.1c-.26.27-.58.46-.94.57l-4.3 1.29a1 1 0 01-1.23-1.27l1.36-4.22c.1-.35.3-.65.55-.9l7.13-7.13a3.22 3.22 0 014.56 0zM15.15 4l-7.13 7.12a.75.75 0 00-.18.3l-1.07 3.33 3.38-1.02c.12-.03.23-.1.31-.19l7.13-7.1A1.72 1.72 0 1015.15 4z" fill={primaryFill} /></svg>;
};

export default ColorLine24Regular;