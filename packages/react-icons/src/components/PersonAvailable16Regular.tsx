import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonAvailable16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 9c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C1 9.67 1.67 9 2.5 9h7zm0 1h-7a.5.5 0 00-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 00-.5-.5zM6 2.5A2.75 2.75 0 116 8a2.75 2.75 0 010-5.5zm0 1A1.75 1.75 0 106 7a1.75 1.75 0 000-3.5zm8.83-2.38a.5.5 0 01.1.63l-.05.08-3 3.5a.5.5 0 01-.66.08l-.07-.06-1.5-1.5a.5.5 0 01.63-.76l.07.06 1.12 1.11 2.65-3.09a.5.5 0 01.7-.05z" fill={primaryFill} /></svg>;
};

export default PersonAvailable16Regular;