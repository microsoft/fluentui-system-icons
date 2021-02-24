import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPersonCall24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.01 12.24l.5-1.18c.24-.56.8-.86 1.36-.75l.12.04.63.2c.62.2 1.1.73 1.26 1.4.36 1.6-.08 3.55-1.33 5.84-1.24 2.29-2.6 3.67-4.1 4.13-.57.18-1.2.05-1.66-.34l-.12-.12-.48-.48a1.36 1.36 0 01-.22-1.59l.07-.11.72-1.06A1.2 1.2 0 0116 17.7l.12.04 1.34.44a5.08 5.08 0 001.92-3.11l.04-.27-1.1-1.05c-.37-.35-.5-.89-.36-1.37l.05-.14.5-1.18-.5 1.18zM19.75 4C20.99 4 22 5 22 6.25v3.98a2.82 2.82 0 00-.88-.56l-.2-.08-.43-.13V6.25a.75.75 0 00-.74-.75H4.25a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75H7v-2.75c0-.92.7-1.67 1.6-1.74l.15-.01h6.5c.91 0 1.67.7 1.74 1.6V16.98l-.55-.18-.17-.05a2.15 2.15 0 00-.78-.05v-.94a.25.25 0 00-.19-.24l-.06-.01H8.75a.25.25 0 00-.24.2l-.01.05v2.75h4.85l-.14.21-.1.16c-.2.35-.3.74-.3 1.13H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5zM12 7a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default VideoPersonCall24Regular;