import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.43 14.64l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H7.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8.09-.07c.26-.2.61-.2.87-.01zM18.75 4C20.55 4 22 5.46 22 7.25v11.5c0 .63-.18 1.21-.49 1.7l-6.93-6.8-.13-.12c-.83-.7-2.06-.7-2.9 0l-.13.12-6.93 6.8c-.31-.49-.49-1.07-.49-1.7V12.5A6.5 6.5 0 0012.5 4h6.25zM6.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm10.25 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 1.5a.75.75 0 110 1.5.75.75 0 010-1.5zM6.5 3h-.09a.5.5 0 00-.4.4L6 3.5V6H3.4a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H6v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4L7 9.5V7h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4L9.5 6H7V3.4a.5.5 0 00-.41-.4H6.5z" fill={primaryFill} /></svg>;
};

export default ImageAdd24Filled;