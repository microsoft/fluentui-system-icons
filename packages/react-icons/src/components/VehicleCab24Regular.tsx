import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCab24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 13a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M17 14a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M9.48 14.75c0-.41.34-.75.75-.75h3.49a.75.75 0 010 1.5h-3.49a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9.27 2a.75.75 0 00-.75.74V4.5h-.67c-1.43 0-2.69.93-3.1 2.3l-.07.2h-.93a.75.75 0 000 1.5h.53l-.2.83c-.65.4-1.08 1.1-1.08 1.92v8.5c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75V18.5h8v1.25c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-8.5c0-.82-.43-1.53-1.08-1.92l-.2-.83h.53a.75.75 0 000-1.5h-.94l-.06-.18a3.25 3.25 0 00-3.11-2.32h-.64V2.74a.75.75 0 00-.75-.75H9.27zM14 4.5h-3.98v-1H14v1zM7.85 6h8.29c.77 0 1.45.5 1.68 1.25l.2.7L18.3 9H5.7l.25-1.05.22-.71C6.4 6.5 7.08 6 7.85 6zM4.5 17v-5.75c0-.41.34-.75.75-.75h13.5c.41 0 .75.34.75.75V17h-15zm0 2.75V18.5h2v1.25c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25zm15-1.25v1.25c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V18.5h2z" fill={primaryFill} /></svg>;
};

export default VehicleCab24Regular;