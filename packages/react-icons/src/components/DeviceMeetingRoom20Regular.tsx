import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DeviceMeetingRoom20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.1 3a2.5 2.5 0 00-2.44 1.95l-1.6 7A2.5 2.5 0 004.52 15h10.98a2.5 2.5 0 002.44-3.05l-1.59-7A2.5 2.5 0 0013.9 3H6.1zM4.63 5.17A1.5 1.5 0 016.1 4h7.8c.7 0 1.31.48 1.47 1.17l1.59 7A1.5 1.5 0 0115.49 14H4.51a1.5 1.5 0 01-1.47-1.83l1.6-7z" fill={primaryFill} /><path d="M5.5 16a.5.5 0 000 1h9a.5.5 0 000-1h-9z" fill={primaryFill} /></svg>;
};

export default DeviceMeetingRoom20Regular;