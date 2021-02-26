import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignTop28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5H2.75zM5 8.75A2.75 2.75 0 017.75 6h2.5A2.75 2.75 0 0113 8.75v13.5A2.75 2.75 0 0110.25 25h-2.5A2.75 2.75 0 015 22.25V8.75zm10 0A2.75 2.75 0 0117.75 6h2.5A2.75 2.75 0 0123 8.75v8a2.75 2.75 0 01-2.75 2.75h-2.5A2.75 2.75 0 0115 16.75v-8z" fill={primaryFill} /></svg>;
};

export default AlignTop28Filled;