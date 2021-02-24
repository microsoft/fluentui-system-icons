import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TvUsb16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v4c0 1.1.9 2 2 2h4.03a2 2 0 01-.03-.33V8c0-.65.42-1.2 1-1.41V5.5c0-.83.67-1.5 1.5-1.5h3c.08 0 .16 0 .24.02A2 2 0 0012 3H4zm.5 9h4l.75 1H4.5a.5.5 0 010-1zm6 1l-1.3-1.73a1 1 0 01-.2-.6V8c0-.28.22-.5.5-.5h.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2h.5c.28 0 .5.22.5.5v2.67a1 1 0 01-.2.6L13.5 13v1.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V13zm.5-7v1.5h2V6h-2z" fill={primaryFill} /></svg>;
};

export default TvUsb16Filled;