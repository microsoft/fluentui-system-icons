import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SerialPort20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M8.5 9a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M7 11.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M9.5 11a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M11 11.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M13.5 11a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M10 9.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M12.5 9a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /><path d="M14 9.5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M4.77 6a2.5 2.5 0 00-2.44 3.07l.7 3A2.5 2.5 0 005.47 14h9.06a2.5 2.5 0 002.43-1.93l.7-3A2.5 2.5 0 0015.23 6H4.77zM3.3 8.84A1.5 1.5 0 014.77 7h10.46c.97 0 1.68.9 1.46 1.84l-.7 3A1.5 1.5 0 0114.53 13H5.47c-.7 0-1.3-.48-1.46-1.16l-.7-3z" fill={primaryFill} /></svg>;
};

export default SerialPort20Regular;