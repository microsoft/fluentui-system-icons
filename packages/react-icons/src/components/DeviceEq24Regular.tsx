import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DeviceEq24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3c.38 0 .7.28.74.65l.01.1v16.5a.75.75 0 01-1.5.1V3.75c0-.41.34-.75.75-.75zM8.26 6c.37 0 .69.28.74.65v10.6a.75.75 0 01-1.49.1V6.75c0-.41.33-.75.75-.75zm7.49 0c.37 0 .69.28.74.65v10.6a.75.75 0 01-1.49.1V6.75c0-.41.33-.75.75-.75zm-11 3c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm14.5 0c.38 0 .7.28.75.65v4.6a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default DeviceEq24Regular;