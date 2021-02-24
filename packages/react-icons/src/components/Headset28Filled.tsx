import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Headset28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a9 9 0 019 8.73v5.52A2.75 2.75 0 0120.42 19h-3.17a.75.75 0 01-.74-.64V12.25c0-.38.28-.7.64-.74l.1-.01h4c.09 0 .17 0 .25.02V11a7.5 7.5 0 00-15-.24v.74h4.25c.38 0 .69.28.74.65v6.1c0 .38-.28.7-.64.75h-3.1c-.45 0-.87-.1-1.25-.3v1.55c0 1.2.93 2.17 2.1 2.24l.15.01h2.3a3 3 0 11.12 1.5H8.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V11a9 9 0 019-9zm0 19.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default Headset28Filled;