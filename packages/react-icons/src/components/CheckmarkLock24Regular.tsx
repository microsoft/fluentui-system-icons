import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkLock24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.81 11.94 3.01 3.01 0 00-1.32-1.55l.01-.39a8.5 8.5 0 10-6.51 8.27v1.23l.01.3A10 10 0 1112 2z" fill={primaryFill} /><path d="M10.75 13.44l4.47-4.47a.75.75 0 011.13.98l-.07.08-5 5a.75.75 0 01-.98.07l-.08-.07-2.5-2.5a.75.75 0 01.98-1.13l.08.07 1.97 1.97z" fill={primaryFill} /><path d="M19.75 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M17 16h-.51c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h5c.82 0 1.5-.67 1.5-1.5v-4c0-.83-.68-1.5-1.5-1.5H21v-1a2 2 0 10-4 0v1zm1-1a1 1 0 112 0v1h-2v-1zm-2.01 2.5c0-.28.22-.5.5-.5h5c.27 0 .5.22.5.5v4a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-4z" fill={primaryFill} /></svg>;
};

export default CheckmarkLock24Regular;