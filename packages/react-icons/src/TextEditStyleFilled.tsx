import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.09 6.7a2.26 2.26 0 013.07-.12l.13.12.12.13c.73.85.73 2.1 0 2.96l-.12.13-6.87 6.9a1.5 1.5 0 01-.55.35l-.16.05-3.08.76a.5.5 0 01-.62-.53l.01-.08.8-3.07c.05-.21.14-.4.28-.57l.1-.12 6.89-6.9zM6.42 2.23l.05.08 2.98 7.63-.77.78L8 9H4l-1.03 2.68a.5.5 0 01-.57.3l-.08-.02A.5.5 0 012 11.4l.02-.08 3.5-9a.5.5 0 01.9-.1zM6 3.87L4.4 8H7.6L6 3.87z" fill={primaryFill} /></svg>;
}

const TextEditStyleFilled = wrapIcon(rawSvg({}), 'TextEditStyleFilled');
export default TextEditStyleFilled;
      