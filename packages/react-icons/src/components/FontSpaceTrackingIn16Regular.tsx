import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontSpaceTrackingIn16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.96 2.3a.5.5 0 00-.92 0l-1.66 4-.01.02-.83 1.99a.5.5 0 10.92.38L4.16 7h2.67l.7 1.7a.5.5 0 00.93-.4l-.81-1.94a.5.5 0 00-.04-.1L5.96 2.31zM5.5 3.8L6.42 6H4.58l.92-2.2z" fill={primaryFill} /><path d="M5.35 10.15a.5.5 0 10-.7.7l.64.65H2.5a.5.5 0 000 1h2.8l-.65.65a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5z" fill={primaryFill} /><path d="M10.5 9a.5.5 0 00.46-.3l2.5-6a.5.5 0 10-.92-.4L10.5 7.2 8.46 2.3a.5.5 0 10-.92.4l2.5 6c.08.18.26.3.46.3z" fill={primaryFill} /><path d="M11.35 13.85a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 11.7.7l-.64.65h2.79a.5.5 0 010 1h-2.8l.65.65c.2.2.2.5 0 .7z" fill={primaryFill} /></svg>;
};

export default FontSpaceTrackingIn16Regular;