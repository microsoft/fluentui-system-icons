import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Whiteboard24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.99 4l-3.07 3.06c-.34.34-.6.74-.78 1.18l-.08.23-.74 2.3a2.25 2.25 0 002.64 2.88l.15-.04 2.33-.7a3.5 3.5 0 001.29-.7l.18-.18L22 7.95v8.8c0 1.8-1.45 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-4.2l.08-.03.07-.04 3.76-2.36.1-.05A.75.75 0 017 11l-.04.1-1.2 2.3-.08.14a2.25 2.25 0 003 2.95l.17-.09 1.76-1 .09-.05a.75.75 0 00-.74-1.3l-.1.05-1.75 1-.1.04a.75.75 0 01-.97-.96l.04-.09 1.2-2.28.09-.17a2.25 2.25 0 00-3.12-2.87l-.15.08L2 10.81V7.24a3.25 3.25 0 013.07-3.24L5.25 4h10.74zm5.19-.46l.13.13.12.13c.76.89.72 2.23-.13 3.07l-4.28 4.28c-.26.26-.58.45-.94.56l-2.33.7a1 1 0 01-1.24-1.27l.74-2.29c.11-.34.3-.65.56-.9l4.29-4.29a2.27 2.27 0 013.08-.12z" fill={primaryFill} /></svg>;
};

export default Whiteboard24Filled;