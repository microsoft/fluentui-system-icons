import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 16.02c.38 0 .7-.29.74-.65l.01-.1V4.57l2.22 2.21c.27.27.68.3.98.07l.08-.07a.75.75 0 00.07-.98l-.07-.08-3.5-3.5a.75.75 0 00-.98-.07l-.08.07-3.5 3.5a.75.75 0 00.98 1.13l.08-.07 2.22-2.22v10.7c0 .42.34.76.75.76zm0 6a7 7 0 001.75-13.78V9.8a5.5 5.5 0 11-3.5 0V8.24A7 7 0 0012 22.02zm0-2.5a4.5 4.5 0 001.75-8.65v1.71a3 3 0 11-3.5 0v-1.71A4.5 4.5 0 0012 19.52z" fill={primaryFill} /></svg>;
}

const Component2DoubleTapSwipeUp24Regular = wrapIcon(rawSvg({}), 'Component2DoubleTapSwipeUp24Regular');
export default Component2DoubleTapSwipeUp24Regular;
      