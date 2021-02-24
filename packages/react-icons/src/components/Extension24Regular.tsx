import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Extension24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2a3 3 0 013 2.82V5h2.25c.87 0 1.59.63 1.73 1.46l.01.15.01.14v3.75h-2a1.5 1.5 0 00-1.48 1.24l-.01.13V12c0 .74.53 1.37 1.23 1.48l.13.02H20v3.75c0 .92-.7 1.67-1.6 1.75H16v.17a3 3 0 01-2.64 2.8l-.18.02H13a3 3 0 01-3-2.81V19H7.75c-.87 0-1.59-.63-1.73-1.46l-.01-.14-.01-.15V15h-.16a3 3 0 01-2.8-2.64l-.02-.18V12a3 3 0 012.82-3H6V6.75c0-.87.63-1.59 1.46-1.73l.15-.01.14-.01H10v-.17a3 3 0 012.64-2.8l.18-.02H13zm0 1.5c-.78 0-1.42.6-1.5 1.36V6.5H7.75a.25.25 0 00-.24.2l-.01.05v3.75H6a1.5 1.5 0 00-.14 3H7.5v3.75c0 .12.08.22.2.25h3.8V19a1.5 1.5 0 003 .14V17.5h3.75c.12 0 .22-.08.24-.19l.01-.06V15h-.7a3 3 0 01-2.8-2.85v-.35A3 3 0 0117.84 9h.67V6.75c0-.1-.05-.18-.13-.22l-.06-.02-.06-.01H14.5V5c0-.82-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
};

export default Extension24Regular;