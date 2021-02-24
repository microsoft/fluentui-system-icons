import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudOffline24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 4.23l14.5 14.5a.75.75 0 11-1.06 1.05L13.93 16H6.7a3.69 3.69 0 01-.12-7.37L3.22 5.3a.75.75 0 111.06-1.06zM12 4c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 01.78 7.28l-1.42-1.41h.58c1.26 0 2.29-1 2.29-2.24a2.26 2.26 0 00-2.29-2.23h-.69c-.36 0-.68-.28-.68-.64a3.9 3.9 0 00-6.84-2.53l-1.1-1.1A5.08 5.08 0 0112 4zm.43 10.5l-4.6-4.6a.71.71 0 01-.39.13h-.7c-1.25 0-2.27 1-2.27 2.23a2.26 2.26 0 002.28 2.24h5.68z" fill={primaryFill} /></svg>;
};

export default CloudOffline24Regular;