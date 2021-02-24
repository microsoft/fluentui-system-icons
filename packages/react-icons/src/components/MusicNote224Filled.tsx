import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MusicNote224Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 2.75a.75.75 0 00-.97-.72l-10 3a.75.75 0 00-.53.72v9.88a3.5 3.5 0 101.5 2.62v-7.94l8.5-2.55v5.87a3.5 3.5 0 101.5 2.62V2.75z" fill={primaryFill} /></svg>;
};

export default MusicNote224Filled;