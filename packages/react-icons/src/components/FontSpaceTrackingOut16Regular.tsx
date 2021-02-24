import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontSpaceTrackingOut16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.46 8.7a.5.5 0 01-.92 0l-2.5-6a.5.5 0 11.92-.4L11 7.2l2.04-4.9a.5.5 0 01.92.4l-2.5 6z" fill={primaryFill} /><path d="M5 2c.2 0 .38.12.46.3l1.65 3.96a.5.5 0 01.04.1l.81 1.95a.5.5 0 11-.92.38L6.34 7H3.66l-.7 1.7a.5.5 0 01-.93-.4l.83-1.98V6.3l1.67-4A.5.5 0 015 2zm.92 4L5 3.8 4.08 6h1.84z" fill={primaryFill} /><path d="M11.65 10.15c.2-.2.5-.2.7 0l1.5 1.5a.5.5 0 010 .7l-1.5 1.5a.5.5 0 11-.7-.7l.64-.65H3.71l.64.65a.5.5 0 11-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 01.7.7l-.64.65h8.58l-.64-.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
};

export default FontSpaceTrackingOut16Regular;