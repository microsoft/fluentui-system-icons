import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarSettings20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V6h14v-.5z" fill={primaryFill} /><path d="M17 9.6V7H3v7.5A2.5 2.5 0 005.5 17h4.1A5.5 5.5 0 0117 9.6z" fill={primaryFill} /><path d="M10.42 15.94a2 2 0 000-2.88l-.15-.14c.17-.49.41-.94.72-1.33l.2.06a2 2 0 002.51-1.45l.07-.3a4.38 4.38 0 011.46 0l.07.3a2 2 0 002.51 1.45l.2-.06c.3.4.55.84.72 1.33l-.15.14a2 2 0 000 2.88l.15.14c-.17.49-.41.94-.72 1.33l-.2-.06a2 2 0 00-2.51 1.45l-.07.3a4.38 4.38 0 01-1.46 0l-.07-.3a2 2 0 00-2.51-1.45l-.2.06a4.7 4.7 0 01-.72-1.33l.15-.14zm2.85-1.44c0 .7.55 1.27 1.23 1.27.68 0 1.23-.57 1.23-1.27 0-.7-.55-1.27-1.23-1.27-.68 0-1.23.57-1.23 1.27z" fill={primaryFill} /></svg>;
};

export default CalendarSettings20Filled;