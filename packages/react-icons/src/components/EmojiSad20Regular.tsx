import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EmojiSad20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M13.5 8.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13.56 13.39a.5.5 0 01-.7-.07A4.3 4.3 0 0010 12.25c-1.02-.01-1.75.27-2.21.55a3.09 3.09 0 00-.65.5.5.5 0 01-.78-.62l.39.31-.39-.31v-.01l.02-.02a2.07 2.07 0 01.23-.23c.15-.13.37-.31.67-.49.6-.35 1.5-.69 2.72-.69a5.3 5.3 0 012.72.7 4.06 4.06 0 01.9.71l.01.02h.01l-.39.32.39-.31a.5.5 0 01-.08.7z" fill={primaryFill} /><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
};

export default EmojiSad20Regular;