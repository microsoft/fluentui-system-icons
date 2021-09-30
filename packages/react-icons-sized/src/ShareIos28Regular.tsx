import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.25 13c.38 0 .7.28.74.65l.01.1v8.5c0 2-1.57 3.64-3.55 3.74l-.2.01H6.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2v-8.5a.75.75 0 011.5-.1v8.6c0 1.2.93 2.17 2.1 2.24l.15.01h14.5c1.2 0 2.17-.93 2.24-2.1l.01-.15v-8.5c0-.41.34-.75.75-.75zM13.86 2.26h.07l.09-.01h.06l.1.02.06.02.06.02.07.04.05.03.04.03.07.06 6.36 6.36a.75.75 0 01-.97 1.14l-.09-.08-5.08-5.08v13.44c0 .38-.28.7-.65.74L14 19a.75.75 0 01-.74-.65l-.01-.1V4.81L8.17 9.89a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.08-.97l.08-.09 6.36-6.36.11-.1.1-.05.08-.03.1-.03z" fill={primaryFill} /></svg>;
}

const ShareIos28Regular = wrapIcon(rawSvg({}), 'ShareIos28Regular');
export default ShareIos28Regular;
      