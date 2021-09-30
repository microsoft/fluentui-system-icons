import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 6a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M12.5 2a5.45 5.45 0 00-5.38 6.67c.06.27 0 .5-.14.64l-4.54 4.54A1.5 1.5 0 002 14.91v1.59c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V16h1a1 1 0 001-1v-1h1a1 1 0 001-1v-.18c.5.13 1 .18 1.5.18 3.08 0 5.5-2.42 5.5-5.5S15.58 2 12.5 2zM8 7.5C8 4.98 9.98 3 12.5 3S17 4.98 17 7.5 15.02 12 12.5 12c-.66 0-1.27-.1-1.78-.35a.5.5 0 00-.72.45v.9H9a1 1 0 00-1 1v1H7a1 1 0 00-1 1v.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.59a.5.5 0 01.15-.35l4.54-4.54c.43-.43.52-1.04.4-1.56-.06-.3-.09-.63-.09-.96z" fill={primaryFill} /></svg>;
}

const Key20Regular = wrapIcon(rawSvg({}), 'Key20Regular');
export default Key20Regular;
      