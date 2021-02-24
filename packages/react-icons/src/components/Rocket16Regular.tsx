import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rocket16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.36 5.35a1.62 1.62 0 112.3 2.3 1.62 1.62 0 01-2.3-2.3zm1.59.7a.62.62 0 00-.88 0 .62.62 0 000 .88c.25.25.64.25.88 0a.62.62 0 000-.87z" fill={primaryFill} /><path d="M13.78 3.5c-.2-.6-.67-1.08-1.27-1.27a4.84 4.84 0 00-4.88 1.2L7 4.04a2.38 2.38 0 00-2.62.5l-.78.79a.5.5 0 000 .7l.85.86c-.13.5 0 1.05.39 1.44L5 8.5l-.77.46a.5.5 0 00-.1.78l2.13 2.12a.5.5 0 00.78-.1L7.5 11l.17.17c.39.4.94.52 1.44.4l.85.84c.2.2.51.2.7 0l.8-.78c.7-.71.87-1.76.5-2.63l.62-.62a4.84 4.84 0 001.2-4.88zm-1.57-.32c.29.1.52.33.61.62a3.84 3.84 0 01-.94 3.87l-2.8 2.8a.5.5 0 01-.7 0L5.53 7.62a.5.5 0 010-.7l2.8-2.8a3.84 3.84 0 013.87-.95zm-1.07 6.64c.04.4-.1.8-.4 1.1l-.43.43-.35-.35 1.18-1.18zM5.1 5.26c.3-.3.7-.43 1.1-.4L5 6.05l-.35-.36.43-.43zm1.68 5.02l-.26.43L5.29 9.5l.44-.27 1.04 1.05z" fill={primaryFill} /><path d="M4.85 11.87a.5.5 0 10-.7-.71l-1.33 1.32a.5.5 0 10.7.7l1.33-1.31z" fill={primaryFill} /><path d="M3.79 10.1c.2.2.2.5 0 .7l-.53.53a.5.5 0 11-.7-.7l.52-.53c.2-.2.51-.2.7 0z" fill={primaryFill} /><path d="M5.91 12.93a.5.5 0 10-.7-.71l-.54.53a.5.5 0 10.71.7l.53-.52z" fill={primaryFill} /></svg>;
};

export default Rocket16Regular;