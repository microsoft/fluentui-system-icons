import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMaximize28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 3h8c.38 0 .7.28.74.65l.01.1v8a.75.75 0 01-1.5.1V5.56L5.56 23.5h6.19c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-8a.75.75 0 01-.74-.65l-.01-.1v-8a.75.75 0 011.5-.1v6.29L22.44 4.5h-6.19a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h8-8z" fill={primaryFill} /></svg>;
};

export default ArrowMaximize28Regular;