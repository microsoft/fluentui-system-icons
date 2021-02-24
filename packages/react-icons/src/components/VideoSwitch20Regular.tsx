import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoSwitch20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5A2.5 2.5 0 016.5 2h5A2.5 2.5 0 0114 4.5v.61l1.9-1.03a.75.75 0 011.1.66v4.52c0 .57-.6.93-1.1.66L14 8.89v.61a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 014 9.5v-5zm10 3.25l2 1.09V5.16l-2 1.1v1.49zM6.5 3C5.67 3 5 3.67 5 4.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /><path d="M3.67 11.89c-.32.12-.6.26-.85.4-.41.27-.82.66-.82 1.21 0 .55.4.94.82 1.2.44.28 1.05.51 1.75.7a22.04 22.04 0 005.72.6l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L10.29 15H10c-2.04 0-3.87-.22-5.17-.57a5.55 5.55 0 01-1.47-.57C3 13.64 3 13.5 3 13.5c0 0 .01-.14.36-.36.27-.17.68-.34 1.21-.5a3.01 3.01 0 01-.9-.75z" fill={primaryFill} /><path d="M13.92 12.3c.3-.24.54-.54.72-.88l.8.18c.7.19 1.3.42 1.74.7.41.26.82.65.82 1.2 0 .55-.4.94-.82 1.2a6.5 6.5 0 01-1.75.7l-.85.2a.49.49 0 01-.58-.5c0-.24.18-.44.42-.5.26-.05.52-.1.75-.17a5.55 5.55 0 001.47-.57c.35-.22.36-.35.36-.36 0 0-.01-.14-.36-.36-.32-.2-.81-.4-1.47-.57-.37-.1-.8-.2-1.25-.27z" fill={primaryFill} /></svg>;
};

export default VideoSwitch20Regular;