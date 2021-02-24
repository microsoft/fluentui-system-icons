import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageAltText24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h7a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm2.5 1a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 3a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /><path d="M16.75 8.5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /><path d="M13 9a3 3 0 01-3 3H4v6.75c0 .63.18 1.21.49 1.7l6.93-6.8.14-.13c.83-.7 2.05-.7 2.89.01l.13.12 6.93 6.8c.31-.49.49-1.07.49-1.7V7.25C22 5.45 20.54 4 18.75 4H13v5zm3.75-2a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" fill={primaryFill} /><path d="M12.47 14.72l.09-.07c.26-.2.61-.2.87-.01l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H7.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8z" fill={primaryFill} /></svg>;
};

export default ImageAltText24Filled;