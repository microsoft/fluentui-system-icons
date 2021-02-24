import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeShow12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.97 6.66a.5.5 0 01-.94-.32c-.01.03 0 0 0 0a1.66 1.66 0 01.06-.16l.18-.38A5.15 5.15 0 016 3a5.15 5.15 0 014.96 3.3l.02.1.02.1s.08.33-.34.47a.5.5 0 01-.63-.31l-.01-.02a2.14 2.14 0 00-.17-.38A4.15 4.15 0 006 4a4.15 4.15 0 00-4.02 2.64v.02z" fill={primaryFill} /><path d="M4 7a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /></svg>;
};

export default EyeShow12Filled;