import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 11c.38 0 .7.28.75.65v7.1A3.25 3.25 0 0117.44 22H6.25a3.25 3.25 0 01-3.24-3.06v-7.19a.75.75 0 011.49-.1v7.1c0 .92.71 1.67 1.61 1.75h11.14c.92 0 1.68-.7 1.75-1.6v-7.15c0-.41.34-.75.75-.75zM6.22 7.22l5-5a.75.75 0 01.97-.07l.09.07 5 5a.75.75 0 01-.97 1.13l-.09-.07-3.72-3.72v11.7c0 .37-.28.69-.65.74h-.1a.75.75 0 01-.74-.64l-.01-.1V4.55L7.28 8.28a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08 5-5-5 5z" fill={primaryFill} /></svg>;
}

const ShareIos24Regular = wrapIcon(rawSvg({}), 'ShareIos24Regular');
export default ShareIos24Regular;
      