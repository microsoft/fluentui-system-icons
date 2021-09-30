import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4.9c-.37.07-.76.3-1.07.85a.5.5 0 11-.86-.5A2.57 2.57 0 018.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.09.21-.09.44a.5.5 0 01-1 0c0-.27.01-.61.24-.97.2-.34.57-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.29-.2-.67-.3-1.05-.22z" fill={primaryFill} /><path d="M8.75 11.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M8.5 1a6.5 6.5 0 00-5.67 9.67l-.8 2.08a1 1 0 001.2 1.32l2.5-.7A6.5 6.5 0 108.5 1zM3 7.5a5.5 5.5 0 113 4.9l-.18-.09-2.86.8.97-2.53-.13-.21A5.47 5.47 0 013 7.5z" fill={primaryFill} /><path d="M11.46 17a6.49 6.49 0 01-4.92-2.26A7.5 7.5 0 008.3 15a5.47 5.47 0 005.66.4l.18-.09 2.86.8-.97-2.53.13-.21A5.47 5.47 0 0016 7.39c0-.6-.1-1.2-.24-1.76a6.48 6.48 0 011.38 8.04l.8 2.08a1 1 0 01-1.21 1.32l-2.49-.7c-.84.4-1.78.63-2.78.63z" fill={primaryFill} /></svg>;
}

const ChatBubblesQuestion20Regular = wrapIcon(rawSvg({}), 'ChatBubblesQuestion20Regular');
export default ChatBubblesQuestion20Regular;
      