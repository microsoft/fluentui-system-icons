import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceOffline12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.03 3.97c.3.3.3.77 0 1.06L7.06 6l.97.97a.75.75 0 01-1.06 1.06L6 7.06l-.97.97a.75.75 0 01-1.06-1.06L4.94 6l-.97-.97a.75.75 0 011.06-1.06l.97.97.97-.97c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M0 6a6 6 0 1112 0A6 6 0 010 6zm6-4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /></svg>;
};

export default PresenceOffline12Regular;