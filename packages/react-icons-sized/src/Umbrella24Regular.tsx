import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 10.91c.47-.4 1.07-.73 1.75-.73.68 0 1.28.33 1.75.73a4.6 4.6 0 01.68.71l.03.05a.75.75 0 001.24 0 5.6 5.6 0 01.71-.76c.48-.4 1.08-.73 1.76-.73.67 0 1.28.33 1.75.73.23.2.41.4.54.54l.17.22a.75.75 0 001.37-.42C22 6.57 17.95 2 12 2S2 6.57 2 11.25a.75.75 0 001.37.42l.17-.22c.13-.15.31-.34.54-.54.47-.4 1.08-.73 1.75-.73.68 0 1.28.33 1.76.73a4.6 4.6 0 01.7.76.75.75 0 001.25 0l.03-.05a3.8 3.8 0 01.68-.7zM3.79 9.28C4.71 6.18 7.74 3.5 12 3.5c4.26 0 7.29 2.68 8.2 5.78a3.94 3.94 0 00-2.03-.6c-1.18 0-2.12.57-2.72 1.09a6 6 0 00-.37.33l-.36-.33A4.27 4.27 0 0012 8.67c-1.17 0-2.11.58-2.72 1.1-.13.11-.26.22-.36.33a6 6 0 00-.37-.33 4.27 4.27 0 00-2.72-1.1c-.8 0-1.49.28-2.04.6zm8.21 1.9c-.24 0-.49.08-.75.24V19a1.5 1.5 0 11-3 0v-.25a.75.75 0 00-1.5 0V19a3 3 0 106 0v-7.58a1.47 1.47 0 00-.75-.24z" fill={primaryFill} /></svg>;
}

const Umbrella24Regular = wrapIcon(rawSvg({}), 'Umbrella24Regular');
export default Umbrella24Regular;
      