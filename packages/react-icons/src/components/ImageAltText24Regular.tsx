import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ImageAltText24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h7a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm2.5 1a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 3a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /><path d="M4 12h1.5v6.75c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 013.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V7.25c0-.97-.78-1.75-1.75-1.75H13V4h5.75C20.55 4 22 5.46 22 7.25v11.5c0 1.8-1.46 3.25-3.25 3.25H7.25A3.25 3.25 0 014 18.75V12zm15.33 8.4l-5.8-5.69a.75.75 0 00-.97-.07l-.08.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1z" fill={primaryFill} /><path d="M16.25 7.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
};

export default ImageAltText24Regular;