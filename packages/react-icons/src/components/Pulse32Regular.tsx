import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pulse32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.52 5a1 1 0 01.94.73l4.58 16.65 3.5-11.67a1 1 0 011.88-.1L24.67 16H28a1 1 0 110 2h-4a1 1 0 01-.92-.62l-1.43-3.41-3.7 12.32a1 1 0 01-1.91-.02L11.43 9.52 8.95 17.3A1 1 0 018 18H4a1 1 0 110-2h3.27l3.28-10.3a1 1 0 01.97-.7z" fill={primaryFill} /></svg>;
};

export default Pulse32Regular;