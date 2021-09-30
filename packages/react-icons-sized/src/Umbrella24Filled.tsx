import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 10.91c.47-.4 1.07-.73 1.75-.73.68 0 1.28.33 1.75.73a4.6 4.6 0 01.68.71l.03.05a.75.75 0 001.24 0 5.6 5.6 0 01.71-.76c.48-.4 1.08-.73 1.76-.73.67 0 1.28.33 1.75.73.23.2.41.4.54.54l.17.22a.75.75 0 001.37-.42C22 6.57 17.95 2 12 2S2 6.57 2 11.25a.75.75 0 001.37.42l.17-.22c.13-.15.31-.34.54-.54.47-.4 1.08-.73 1.75-.73.68 0 1.28.33 1.76.73a4.6 4.6 0 01.7.76.75.75 0 001.25 0l.03-.05a3.8 3.8 0 01.68-.7zm1.75.27c-.24 0-.49.08-.75.24V19a1.5 1.5 0 11-3 0v-.25a.75.75 0 00-1.5 0V19a3 3 0 106 0v-7.58a1.47 1.47 0 00-.75-.24z" fill={primaryFill} /></svg>;
}

const Umbrella24Filled = wrapIcon(rawSvg({}), 'Umbrella24Filled');
export default Umbrella24Filled;
      