import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPersonOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22c.3-.3.77-.3 1.06 0l18.5 18.5a.75.75 0 01-1.06 1.06L18.94 20H4.25C3.01 20 2 19 2 17.75V6.25c0-.86.49-1.61 1.2-1.99l-.98-.98a.75.75 0 010-1.06zm13.27 14.34l-1.05-1.06H8.75a.25.25 0 00-.24.2l-.01.05v2.75h7v-1.94zM11.94 13A3 3 0 019 10.06L4.44 5.5h-.19a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75H7v-2.75c0-.92.7-1.67 1.6-1.74l.15-.01h4.19l-1-1z" fill={primaryFill} /><path d="M11.71 8.53l-1.16-1.16a3 3 0 014.08 4.08l-1.16-1.16a1.5 1.5 0 00-1.76-1.76z" fill={primaryFill} /><path d="M20.5 17.31V6.25a.75.75 0 00-.75-.75H8.68L7.18 4h12.57C20.99 4 22 5 22 6.25v11.5c0 .32-.07.61-.18.89L20.5 17.3z" fill={primaryFill} /></svg>;
};

export default VideoPersonOff24Regular;