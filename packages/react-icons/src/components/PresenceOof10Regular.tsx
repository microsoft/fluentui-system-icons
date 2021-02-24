import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceOof10Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.35 3.85a.5.5 0 10-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7L4.7 5.5h1.8a.5.5 0 100-1H4.7l.65-.65z" fill={primaryFill} /><path d="M5 0a5 5 0 100 10A5 5 0 005 0zM1 5a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
};

export default PresenceOof10Regular;