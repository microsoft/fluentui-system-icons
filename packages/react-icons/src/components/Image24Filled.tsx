import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Image24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.47 13.72l.09-.07c.26-.2.61-.2.87-.01l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H6.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8.09-.07-.09.07zM17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 .63-.18 1.21-.49 1.7l-6.93-6.8-.13-.12c-.83-.7-2.06-.7-2.9 0l-.13.12-6.93 6.8c-.31-.49-.49-1.07-.49-1.7V6.25C3 4.45 4.46 3 6.25 3h11.5zm-2 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 1.5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default Image24Filled;