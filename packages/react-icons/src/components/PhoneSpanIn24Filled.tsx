import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneSpanIn24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v3.67c-.65-.31-1.45-.2-1.99.34l-2.18 2.22c-.52.31-.83.9-.83 1.52v.16c.05.46.26.88.6 1.18l.1.1 2.31 2.3.14.12a1.8 1.8 0 001.85.22v3.67c0 1.2-.93 2.17-2.1 2.24l-.15.01h-7.5c-1.2 0-2.17-.93-2.24-2.1L6 19.75v-3.68c.59.28 1.27.22 1.8-.16l.13-.12 2.36-2.35.12-.1c.37-.33.59-.82.59-1.34v-.16a1.78 1.78 0 00-.6-1.18l-.1-.1-2.31-2.3A1.75 1.75 0 006 7.92V4.25c0-1.2.93-2.17 2.1-2.24L8.25 2h7.5zm2.03 6.97c.27.27.3.68.07.98l-.07.08-1.22 1.22h3.78c.37 0 .66.33.66.75 0 .38-.25.7-.57.74H16.56l1.22 1.23c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2.37-2.37A.77.77 0 0114 12c0-.29.14-.54.35-.66l2.37-2.37c.3-.3.77-.3 1.06 0zM7.2 8.9l.08.07 2.37 2.37c.2.12.35.37.35.66 0 .25-.1.47-.28.61l-.07.05-2.37 2.37-.08.07c-.27.2-.62.2-.89.01l-.1-.08-.06-.08a.75.75 0 01-.01-.89l.08-.09 1.22-1.22H3.56C3.26 12.68 3 12.37 3 12s.25-.7.57-.74l.09-.01h3.78l-1.22-1.22-.07-.09A.75.75 0 017.2 8.9z" fill={primaryFill} /></svg>;
};

export default PhoneSpanIn24Filled;