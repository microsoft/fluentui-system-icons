import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoSwitch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.75A2.75 2.75 0 016.75 3h5.5A2.75 2.75 0 0115 5.75v6.5A2.75 2.75 0 0112.25 15h-5.5A2.75 2.75 0 014 12.25v-6.5z" fill={primaryFill} /><path d="M4.2 15c-.42.14-.79.3-1.1.47-.5.3-1.1.78-1.1 1.53s.6 1.24 1.1 1.53c.56.32 1.31.58 2.18.79 1.74.42 4.09.68 6.66.68l-.72.72a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72a28.2 28.2 0 01-6.3-.64c-.81-.2-1.4-.42-1.79-.63-.17-.1-.27-.18-.31-.23.04-.05.14-.12.31-.23.38-.21.98-.44 1.79-.63.22-.06.47-.11.72-.16a3.74 3.74 0 01-2.17-.99z" fill={primaryFill} /><path d="M14.02 15.56c1.7.09 3.19.3 4.34.58.81.2 1.4.42 1.79.63.17.1.27.18.31.23l-.01.01c-.1.1-.3.23-.6.37-.62.28-1.55.54-2.72.73a.75.75 0 10.24 1.48c1.24-.2 2.31-.49 3.1-.84.38-.18.74-.4 1.01-.65.27-.26.52-.63.52-1.1 0-.75-.6-1.24-1.1-1.53a8.56 8.56 0 00-2.18-.79c-.93-.22-2.03-.4-3.24-.52a3.77 3.77 0 01-1.46 1.4zm6.49 1.38z" fill={primaryFill} /><path d="M20 5.25a.75.75 0 00-1.22-.59L16 6.89v4.22l2.78 2.22a.75.75 0 001.22-.58v-7.5z" fill={primaryFill} /></svg>;
};

export default VideoSwitch24Filled;