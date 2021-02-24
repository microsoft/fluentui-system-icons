import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WifiWarning20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a1 1 0 00-1 1v8a1 1 0 102 0V4a1 1 0 00-1-1z" fill={primaryFill} /><path d="M12 12v-.82a4.04 4.04 0 011.74 1.93.5.5 0 01-.92.4 3.14 3.14 0 00-.85-1.14A2 2 0 0012 12z" fill={primaryFill} /><path d="M13.89 10.06A5.43 5.43 0 0012 8.83V7.77a6.42 6.42 0 013.79 3.24.5.5 0 11-.89.46c-.27-.52-.61-1.01-1.01-1.4z" fill={primaryFill} /><path d="M16.13 8.09A8.57 8.57 0 0012 5.79V4.77a9.57 9.57 0 015.97 3.98.5.5 0 11-.83.57c-.3-.44-.65-.86-1.01-1.23z" fill={primaryFill} /><path d="M3.24 7.38A9.57 9.57 0 018 4.78v1.03a8.57 8.57 0 00-5.06 3.5.5.5 0 01-.82-.57 10 10 0 011.12-1.36z" fill={primaryFill} /><path d="M5.48 9.36A6.42 6.42 0 018 7.8v1.06a5.43 5.43 0 00-2.83 2.6.5.5 0 01-.89-.46c.3-.6.7-1.15 1.2-1.64z" fill={primaryFill} /><path d="M7.18 11.85c.25-.25.53-.46.82-.63V12a2 2 0 00.04.42 3.1 3.1 0 00-.78 1.08.5.5 0 11-.92-.4c.2-.47.49-.9.84-1.25z" fill={primaryFill} /><path d="M10.96 13.79a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z" fill={primaryFill} /></svg>;
};

export default WifiWarning20Regular;