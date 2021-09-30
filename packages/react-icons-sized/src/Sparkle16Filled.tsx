import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.47 9.83a.92.92 0 001.4-.46l.35-1.07A1.72 1.72 0 018.3 7.22l1.09-.35a.92.92 0 00-.04-1.75l-1.07-.35A1.7 1.7 0 017.2 3.7L6.85 2.6a.92.92 0 00-.87-.6c-.2 0-.38.05-.53.16a.92.92 0 00-.35.46l-.35 1.09A1.71 1.71 0 013.7 4.77l-1.08.36a.92.92 0 000 1.74l1.08.35A1.71 1.71 0 014.78 8.3l.35 1.08c.06.18.18.34.34.45zm5.06 4.02a.8.8 0 00.92 0c.15-.1.25-.24.3-.4l.26-.76a1.09 1.09 0 01.68-.68l.77-.25a.8.8 0 00-.02-1.53l-.77-.25a1.08 1.08 0 01-.68-.67l-.25-.78A.8.8 0 0011.1 8a.8.8 0 00-.88.54l-.25.77a1.1 1.1 0 01-.66.67l-.78.26a.8.8 0 00-.38 1.22c.1.14.23.24.4.3l.76.25a1.09 1.09 0 01.68.68l.25.77c.06.16.16.3.3.4z" fill={primaryFill} /></svg>;
}

const Sparkle16Filled = wrapIcon(rawSvg({}), 'Sparkle16Filled');
export default Sparkle16Filled;
      