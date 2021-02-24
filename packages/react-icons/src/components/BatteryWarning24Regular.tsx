import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatteryWarning24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.24 11.2c.24.13.43.32.56.56l4 7A1.5 1.5 0 0111.5 21H3.5a1.5 1.5 0 01-1.3-2.25l4-7a1.5 1.5 0 012.05-.55zM7.5 18a.5.5 0 100 1 .5.5 0 000-1zM17 6a3 3 0 013 3v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a3 3 0 01-3 3h-3.47l-.86-1.5H17c.78 0 1.42-.6 1.5-1.36V9c0-.78-.6-1.42-1.36-1.5H5c-.78 0-1.42.6-1.5 1.36v5.59l-1.14 1.98A2.99 2.99 0 012 15V9a3 3 0 013-3h12zm-9.5 7a.5.5 0 00-.5.41V16.59a.5.5 0 00.99 0V13.41a.5.5 0 00-.5-.41z" fill={primaryFill} /></svg>;
};

export default BatteryWarning24Regular;