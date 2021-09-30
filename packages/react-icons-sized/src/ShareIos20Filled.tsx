import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 9.25c.38 0 .7.28.74.65l.01.1v5.25A2.75 2.75 0 0113.92 18H6.25a2.75 2.75 0 01-2.74-2.58l-.01-.17V10A.75.75 0 015 9.9v5.35c0 .65.5 1.18 1.12 1.24l.13.01h7.5c.65 0 1.18-.5 1.24-1.12l.01-.13V10c0-.41.34-.75.75-.75zM5.23 6.46l4.24-4.24a.75.75 0 01.98-.07l.08.07 4.24 4.24a.75.75 0 01-.97 1.14l-.09-.08-2.96-2.96v7.69c0 .38-.28.7-.65.74L10 13a.75.75 0 01-.74-.65l-.01-.1V4.56L6.29 7.52a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.08-.97l.08-.09 4.24-4.24-4.24 4.24z" fill={primaryFill} /></svg>;
}

const ShareIos20Filled = wrapIcon(rawSvg({}), 'ShareIos20Filled');
export default ShareIos20Filled;
      