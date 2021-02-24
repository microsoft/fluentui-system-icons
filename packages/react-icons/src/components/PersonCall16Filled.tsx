import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonCall16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 8h.12l-.13.33-.05.13v.02c-.21.67-.04 1.41.49 1.91l.3.29a2.37 2.37 0 01-.42.71l-.32-.1-.14-.04h-.02a1.77 1.77 0 00-1.84.74l-.48.7-.07.13-.02.02c-.18.35-.25.74-.2 1.12-.24.03-.47.04-.72.04-3.14 0-5-2.03-5-4v-.5C3 8.67 3.67 8 4.5 8h7z" fill={primaryFill} /><path d="M11.2 12.24l.74.25.12.04a3.28 3.28 0 001.25-2.01l.02-.17-.72-.68a.88.88 0 01-.22-.9l.03-.08.32-.76a.78.78 0 01.88-.49l.08.02.4.13c.4.13.72.48.82.91.24 1.04-.05 2.3-.86 3.78-.8 1.48-1.69 2.37-2.65 2.67-.37.12-.77.03-1.07-.22l-.08-.08-.31-.3a.88.88 0 01-.15-1.04l.05-.07.47-.69a.79.79 0 01.8-.33l.08.02z" fill={primaryFill} /><path d="M8 1.5A2.75 2.75 0 118 7a2.75 2.75 0 010-5.5z" fill={primaryFill} /></svg>;
};

export default PersonCall16Filled;