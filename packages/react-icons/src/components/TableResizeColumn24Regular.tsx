import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableResizeColumn24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.58 11.25H8.42l.9-1a.75.75 0 00-1.13-1l-2 2.25a.75.75 0 000 1l2 2.25a.75.75 0 101.12-1l-.89-1h7.16l-.89 1a.75.75 0 101.12 1l2-2.25.01-.01a.75.75 0 00-.01-1l-2-2.24a.75.75 0 00-1.12 1l.89 1z" fill={primaryFill} /><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm1.75 3.25c0-.97-.78-1.75-1.75-1.75h-.25v5.15l-.94-1.06a1.74 1.74 0 00-.56-.42V4.5H8v3.67c-.2.1-.4.24-.56.42L6.5 9.65V4.5h-.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h.25v-5.15l.94 1.06c.16.18.35.32.56.42v3.67h8v-3.67c.2-.1.4-.24.56-.42l.94-1.06v5.15h.25c.97 0 1.75-.78 1.75-1.75V6.25z" fill={primaryFill} /></svg>;
};

export default TableResizeColumn24Regular;