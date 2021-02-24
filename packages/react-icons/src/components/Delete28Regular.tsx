import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Delete28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.25c2 0 3.64 1.57 3.74 3.55l.01.2h5.5a.75.75 0 01.1 1.5H22.2l-1.22 15.05A3.75 3.75 0 0117.23 26h-6.46a3.75 3.75 0 01-3.74-3.45L5.8 7.5H4.75a.75.75 0 01-.74-.65L4 6.75c0-.38.28-.7.65-.74l.1-.01h5.5A3.75 3.75 0 0114 2.25zm6.69 5.25H7.3l1.21 14.93a2.25 2.25 0 002.25 2.07h6.46c1.18 0 2.15-.9 2.25-2.07l1.2-14.93zm-8.94 3.75c.38 0 .7.28.74.65l.01.1v8a.75.75 0 01-1.5.1V12c0-.41.34-.75.75-.75zm4.5 0c.38 0 .7.28.74.65l.01.1v8a.75.75 0 01-1.5.1V12c0-.41.34-.75.75-.75zM14 3.75c-1.2 0-2.17.93-2.24 2.1l-.01.15h4.5v-.15A2.25 2.25 0 0014 3.75z" fill={primaryFill} /></svg>;
};

export default Delete28Regular;