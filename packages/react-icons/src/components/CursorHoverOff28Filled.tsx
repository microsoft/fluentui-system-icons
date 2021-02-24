import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHoverOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.81 1.81A2.75 2.75 0 002 7.75v11.5A2.75 2.75 0 004.75 22h6v-9.5c0-.2.04-.4.1-.59l.9.9v12.44a.75.75 0 001.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.45.64 3.57 3.57a.75.75 0 001.06-1.06l-3.74-3.74-.01-.01-9-9-9.75-9.75z" fill={primaryFill} /><path d="M8.18 5l16.56 16.56A2.75 2.75 0 0026 19.25V7.75A2.75 2.75 0 0023.25 5H8.18z" fill={primaryFill} /></svg>;
};

export default CursorHoverOff28Filled;