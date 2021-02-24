import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Midi24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 4c.38 0 .7.28.74.65l.01.1v14.5c0 .38-.28.7-.65.75H2.75a.75.75 0 01-.74-.65l-.01-.1V4.75c0-.38.28-.7.65-.74h18.6zM6 12.5H3.5v6h17v-6H18v3.75a.75.75 0 01-1.5.1V12.5h-2v3.75a.75.75 0 01-1.5.1V12.5h-2v3.75a.75.75 0 01-1.5.1V12.5h-2v3.75a.75.75 0 01-1.5.1V12.5zm14.5-7h-17V11h17V5.5zm-11.25 2a.75.75 0 110 1.5.75.75 0 010-1.5zm8 0a.75.75 0 01.1 1.5h-2.6a.75.75 0 01-.1-1.5h2.6zm-11 0a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default Midi24Regular;