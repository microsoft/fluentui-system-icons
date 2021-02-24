import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowDevTools24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h11.5C18.55 2 20 3.46 20 5.25v2.76a4.5 4.5 0 00-1.5.1V7h-15v9.75c0 .97.78 1.75 1.75 1.75h7.98l-.44.76c-.13.24-.22.49-.28.74H5.25A3.25 3.25 0 012 16.75V5.25zM5.25 3.5c-.97 0-1.75.78-1.75 1.75v.25h15v-.25c0-.97-.78-1.75-1.75-1.75H5.25z" fill={primaryFill} /><path d="M19.86 9a3.5 3.5 0 00-3.18 5.52l-3.02 5.24a1.46 1.46 0 102.53 1.46l3.03-5.25a3.5 3.5 0 002.97-5.76l-1.65 2.86a1.17 1.17 0 11-2.02-1.17l1.65-2.86-.31-.04z" fill={primaryFill} /><path d="M15.17 13.57a4.5 4.5 0 01-.02-2.1l-2.3-2.3a.5.5 0 10-.7.71l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.32-2.3z" fill={primaryFill} /><path d="M9.86 9.89a.5.5 0 10-.71-.71l-3 3a.5.5 0 000 .7l3 3a.5.5 0 00.7-.7l-2.64-2.65L9.86 9.9z" fill={primaryFill} /></svg>;
};

export default WindowDevTools24Regular;