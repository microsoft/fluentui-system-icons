import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 7a4 4 0 110 8 4 4 0 010-8zM3 4.09v6.41A2.5 2.5 0 005.34 13H6.4A5 5 0 007 14H5a3 3 0 01-3-3V5.5c0-.65.42-1.2 1-1.41zm7.8 3.96l-.08.04-.07.06-.06.07a.5.5 0 000 .56l.06.07 1.65 1.65H8.4a.5.5 0 00-.4.41L8 11v.09c.05.2.2.36.41.4l.09.01h3.8l-1.65 1.65-.06.07a.5.5 0 00.7.7l.07-.07 2.53-2.53.04-.05.04-.08.02-.08.01-.07V10.9l-.03-.08-.04-.08-.04-.05-2.53-2.53-.07-.06a.5.5 0 00-.5-.04zM10.5 2c.83 0 1.5.67 1.5 1.5v2.6c-.32-.07-.66-.1-1-.1V3.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v7c0 .28.22.5.5.5H6c0 .34.03.68.1 1h-.6A1.5 1.5 0 014 10.5v-7C4 2.67 4.67 2 5.5 2h5z" fill={primaryFill} /></svg>;
}

const CopyArrowRight16Regular = wrapIcon(rawSvg({}), 'CopyArrowRight16Regular');
export default CopyArrowRight16Regular;
      