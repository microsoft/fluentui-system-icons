import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Emoji20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm-2.85 9.43a4.01 4.01 0 005.52.17l.18-.17a.5.5 0 01.76.63l-.06.07-.02.02a5.01 5.01 0 01-7.08-.02.5.5 0 01.7-.7zM12.5 7.5a1 1 0 110 2 1 1 0 010-2zm-5 0a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default Emoji20Regular;