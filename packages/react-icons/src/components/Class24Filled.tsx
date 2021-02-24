import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Class24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v14.5A2.75 2.75 0 0117.25 22H6.75A2.75 2.75 0 014 19.25V4.75A2.75 2.75 0 016.75 2h.3v8.17c0 .75.78 1.01 1.31.74l.09-.06 2.1-1.2 2.13 1.23c.45.31 1.26.1 1.35-.59l.01-.12V2h3.21zm-4.7 0v7.08l-1.63-.94a.93.93 0 00-.8.03l-.1.06-1.48.85V2h4z" fill={primaryFill} /></svg>;
};

export default Class24Filled;