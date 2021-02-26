import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterVertical28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.25 26a.75.75 0 01-.75-.75V23H10a2.75 2.75 0 01-2.75-2.75v-2.5A2.75 2.75 0 0110 15h3.5v-2H7.25a2.75 2.75 0 01-2.75-2.75v-2.5A2.75 2.75 0 017.25 5h6.25V2.75a.75.75 0 011.5 0V5h5.75a2.75 2.75 0 012.75 2.75v2.5A2.75 2.75 0 0120.75 13H15v2h3a2.75 2.75 0 012.75 2.75v2.5A2.75 2.75 0 0118 23h-3v2.25c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
};

export default AlignCenterVertical28Filled;