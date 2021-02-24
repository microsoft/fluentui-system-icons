import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TetrisApp32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 009 4.5v4.02a.5.5 0 01-.5.48h-4A2.5 2.5 0 002 11.5v4A2.5 2.5 0 004.5 18h11a2.5 2.5 0 002.5-2.5v-4c0-.28.22-.5.5-.5h4A2.5 2.5 0 0025 8.5v-4A2.5 2.5 0 0022.5 2h-11zm11 7H18V4h4.5c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5zM16 9h-5V4.5c0-.28.22-.5.5-.5H16v5zm-7 2v5H4.5a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5H9zm2 0h5.05c-.03.16-.05.33-.05.5v4a.5.5 0 01-.5.5H11v-5zm12.5 3a2.5 2.5 0 00-2.5 2.5v4a.5.5 0 01-.5.5h-11A2.5 2.5 0 007 23.5v4A2.5 2.5 0 009.5 30h18a2.5 2.5 0 002.5-2.5v-11a2.5 2.5 0 00-2.5-2.5h-4zM21 23v5h-5v-5h5zm7 0v4.5a.5.5 0 01-.5.5H23v-5h5zm-5-2v-4.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V21h-5zm-9 2v5H9.5a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5H14z" fill={primaryFill} /></svg>;
};

export default TetrisApp32Regular;