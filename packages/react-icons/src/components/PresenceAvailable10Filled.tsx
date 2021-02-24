import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceAvailable10Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10A5 5 0 105 0a5 5 0 000 10zm2.1-5.9L4.85 6.35a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.9-1.9a.5.5 0 01.7.71z" fill={primaryFill} /></svg>;
};

export default PresenceAvailable10Filled;