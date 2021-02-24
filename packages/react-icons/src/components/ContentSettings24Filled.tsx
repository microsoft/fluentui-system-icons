import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3h.18A3.25 3.25 0 0121 6.08V12.02a6.46 6.46 0 00-2-.85V8H5v9.75c0 .65.5 1.18 1.12 1.24l.13.01h4.92c.17.72.46 1.4.85 2H6.25A3.25 3.25 0 013 17.93V6.25a3.25 3.25 0 013.06-3.24L6.25 3h11.5z" fill={primaryFill} /><path d="M10.25 9.5c.38 0 .7.28.74.65v7.1c0 .38-.27.7-.64.74l-.1.01h-3.5a.75.75 0 01-.74-.65l-.01-.1v-7c0-.38.28-.7.65-.74l.1-.01h3.5zM9.5 11h-2v5.5h2V11z" fill={primaryFill} /><path d="M17.25 9.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /><path d="M12.5 15.63l.45.43a2 2 0 010 2.88l-.45.43c.2.57.49 1.1.85 1.57l.6-.18a2 2 0 012.52 1.45l.17.72a5.18 5.18 0 001.72 0l.17-.72a2 2 0 012.51-1.45l.6.18c.37-.47.66-1 .86-1.57l-.45-.43a2 2 0 010-2.88l.45-.43c-.2-.58-.5-1.1-.85-1.57l-.6.18a2 2 0 01-2.52-1.45l-.17-.72a5.17 5.17 0 00-1.72 0l-.17.72a2 2 0 01-2.52 1.45l-.6-.18c-.36.47-.65 1-.85 1.57zm5 3.37c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default ContentSettings24Filled;