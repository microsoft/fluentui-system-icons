import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorLine16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 11.41a1.75 1.75 0 01-.22-1.23A1.5 1.5 0 001 11.5v2c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H8.48l-.72.72c-.1.1-.2.2-.32.28h6.06c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-2a.5.5 0 010-.09z" fill={primaryFill} /><path d="M11.08 2a.92.92 0 01.65 1.57L6.17 9.12a.93.93 0 01-.4.24L4.2 9.8l.43-1.56c.04-.15.12-.29.24-.4l5.55-5.56a.91.91 0 01.65-.27zm0-1a1.91 1.91 0 00-1.35.56L4.17 7.12c-.24.24-.4.53-.5.85l-.65 2.4a.5.5 0 00.61.61l2.4-.65c.32-.1.62-.26.85-.5l5.56-5.56A1.92 1.92 0 0011.08 1z" fill={primaryFill} /></svg>;
};

export default ColorLine16Regular;