import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeTrackingOn24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 2a.75.75 0 01.1 1.5h-3.6c-.65 0-1.18.5-1.25 1.12v3.63a.75.75 0 01-1.5.1v-3.6a2.75 2.75 0 012.58-2.74L4.75 2h3.5z" fill={primaryFill} /><path d="M3.49 15.65a.75.75 0 00-1.49 0V19.43A2.75 2.75 0 004.58 22h3.77a.75.75 0 000-1.5H4.62a1.25 1.25 0 01-1.12-1.12v-3.63l-.01-.1z" fill={primaryFill} /><path d="M21.99 15.65a.75.75 0 00-1.5.1v3.63c-.06.63-.6 1.12-1.24 1.12h-3.6a.75.75 0 00.1 1.5h3.66A2.75 2.75 0 0022 19.25v-3.5l-.01-.1z" fill={primaryFill} /><path d="M19.41 2H15.65a.75.75 0 000 1.5h3.72c.6.07 1.06.53 1.12 1.12v3.63l.01.1a.75.75 0 001.49 0V4.58A2.75 2.75 0 0019.41 2z" fill={primaryFill} /><path d="M6.2 11.76l.01-.02.04-.1.21-.39a6.07 6.07 0 015.54-3 6.24 6.24 0 015.54 3 4.78 4.78 0 01.25.5v.01c.16.38.59.59.97.44a.75.75 0 00.44-.96v-.03a3.2 3.2 0 00-.1-.2A7.57 7.57 0 0012 6.75a7.73 7.73 0 00-6.84 3.75 6.26 6.26 0 00-.35.71v.02c-.01 0-.17.75.43.97.38.15.81-.05.96-.43z" fill={primaryFill} /><path d="M12 10a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-2 3.5a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /></svg>;
};

export default EyeTrackingOn24Regular;