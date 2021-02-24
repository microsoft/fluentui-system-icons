import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Folder32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 10v12a4 4 0 004 4h16a4 4 0 004-4V12a4 4 0 00-4-4h-9.65l-2.23-1.78A1 1 0 0011.5 6H8a4 4 0 00-4 4zm2 0c0-1.1.9-2 2-2h3.15l1.74 1.39L11.1 11H6v-1zm9.19 0H24a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2v-9h5.5a1 1 0 00.67-.26L15.2 10z" fill={primaryFill} /></svg>;
};

export default Folder32Regular;