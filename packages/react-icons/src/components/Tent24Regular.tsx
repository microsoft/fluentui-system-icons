import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tent24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.22 2.22a.75.75 0 011.04-.02l1.76 1.64c1.28 1.2 2.7 2.22 4.23 3.06.43.23.73.66.8 1.15l1.35 9.45h.85a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5h.85L4.96 8c.06-.45.33-.85.72-1.08 1.4-.84 2.69-1.85 3.84-3l1.7-1.7zM5.12 17.5h2.13a23.31 23.31 0 003.5-7.16l.53-1.8a.75.75 0 011.44 0l.52 1.8c.75 2.57 1.94 5 3.51 7.16h2.14l-1.33-9.24A22.31 22.31 0 0113 4.94l-1.22-1.15-1.19 1.19a21.43 21.43 0 01-4.14 3.24L5.11 17.5zm9.8 0A24.81 24.81 0 0112 11.4a24.81 24.81 0 01-2.93 6.1h5.86z" fill={primaryFill} /></svg>;
};

export default Tent24Regular;