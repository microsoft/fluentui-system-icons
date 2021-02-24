import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cellular5G24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.9 3.62l-.01-.02a1.03 1.03 0 00-.06-.08l-.13-.16a2.13 2.13 0 00-.52-.4 3.03 3.03 0 00-2.07-.25c-1.09.2-1.63.97-1.87 1.6A3.6 3.6 0 008 5.45v1.29a2.5 2.5 0 002.5 2.5h.25a2.5 2.5 0 002.5-2.5v-.5a.75.75 0 00-.75-.75h-1.25a.75.75 0 000 1.5h.47a1 1 0 01-.97.75h-.25a1 1 0 01-1-1V5.5a1.09 1.09 0 01.02-.18c.01-.13.05-.3.12-.47.13-.34.34-.6.75-.67.6-.1.91.01 1.06.1a.64.64 0 01.17.13.75.75 0 001.28-.79zM4 2.75c-.38 0-.7.29-.75.67L3 5.67a.75.75 0 00.88.82L4.9 6.3a.73.73 0 11.13 1.45H4.8a.75.75 0 01-.62-.33l-.06-.09a.75.75 0 00-1.24.84l.05.08c.42.62 1.12 1 1.87 1h.22a2.23 2.23 0 10-.4-4.42h-.01l.06-.58H6.5a.75.75 0 000-1.5H4zM21 7a1 1 0 00-2 0v13a1 1 0 002 0V7zm-4 3a1 1 0 00-2 0v10a1 1 0 002 0V10zm-4 3a1 1 0 10-2 0v7a1 1 0 102 0v-7zm-4 3a1 1 0 00-1-1 1 1 0 00-1 1v4a1 1 0 001 1 1 1 0 001-1v-4zm-4 2.98A1 1 0 004 18a1 1 0 00-1 .98v1.04A1 1 0 004 21a1 1 0 001-.98v-1.04z" fill={primaryFill} /></svg>;
};

export default Cellular5G24Filled;