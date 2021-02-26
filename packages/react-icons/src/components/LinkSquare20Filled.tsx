import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkSquare20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25H6V13H4.75A2.75 2.75 0 012 10.25v-5.5A2.75 2.75 0 014.75 2h5.5A2.75 2.75 0 0113 4.75v5.5A2.75 2.75 0 0110.25 13H9.5v-1.5h.75c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5zM7 9.75A2.75 2.75 0 019.75 7h1v1.5h-1c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25h-1.5V7h1.5A2.75 2.75 0 0118 9.75v5.5A2.75 2.75 0 0115.25 18h-5.5A2.75 2.75 0 017 15.25v-5.5z" fill={primaryFill} /></svg>;
};

export default LinkSquare20Filled;