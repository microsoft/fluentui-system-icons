import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier2X20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 8.75a.75.75 0 00.8-.7l.02-.1c.02-.08.06-.19.13-.3.1-.16.34-.4.95-.4.58 0 .86.19 1 .38.16.22.27.61.16 1.24a.78.78 0 01-.4.6c-.2.13-.42.2-.72.31l-.43.17c-.47.18-1.06.45-1.5 1-.46.55-.7 1.3-.7 2.3a.75.75 0 00.74.75H9.5a.75.75 0 000-1.5H6.58c.07-.28.17-.47.28-.6.2-.24.48-.4.9-.56l.27-.1c.34-.12.77-.28 1.12-.5.52-.32.95-.82 1.09-1.61a3.1 3.1 0 00-.42-2.38c-.5-.69-1.3-1-2.22-1-1.13 0-1.83.5-2.2 1.1A2.53 2.53 0 005 7.92v.02c-.02.41.29.77.7.8zm6.58 1.47a.75.75 0 10-1.06 1.06l.72.72-.72.72a.75.75 0 001.06 1.06l.72-.72.72.72a.75.75 0 101.06-1.06l-.72-.72.72-.72a.75.75 0 00-1.06-1.06l-.72.72-.72-.72z" fill={primaryFill} /></svg>;
};

export default Multiplier2X20Filled;