import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonSupport20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.53 4a4 4 0 11-.14 3.72A1.5 1.5 0 015.5 8H5v.26c0 .19.07.36.2.5A.75.75 0 115.67 10 1.74 1.74 0 014 8.26V4.5c0-.28.23-.5.5-.5h2.03zM7 6.13a3 3 0 100-.24v.24zm-1-.26v-.85H5v2h.5a.5.5 0 00.5-.5v-.37a4.08 4.08 0 010-.28z" fill={primaryFill} /><path d="M3 13a2 2 0 012-2h10a2 2 0 012 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0110 18a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm2-1a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0010 17c1.74 0 3.26-.36 4.33-1.05A3.36 3.36 0 0016 13a1 1 0 00-1-1H5z" fill={primaryFill} /></svg>;
};

export default PersonSupport20Regular;