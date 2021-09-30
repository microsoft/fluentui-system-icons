import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 43.47a19.44 19.44 0 009.01 0 1.94 1.94 0 001.47-1.68l.34-3.07a2.32 2.32 0 013.25-1.87l2.81 1.23a1.92 1.92 0 002.2-.45 20.37 20.37 0 004.51-7.78 1.94 1.94 0 00-.7-2.13l-2.49-1.84a2.33 2.33 0 010-3.77l2.49-1.83a1.94 1.94 0 00.7-2.14c-.9-2.9-2.45-5.55-4.52-7.78a1.94 1.94 0 00-2.2-.45l-2.8 1.24c-.29.13-.6.2-.92.2a2.34 2.34 0 01-2.32-2.09l-.34-3.06a1.94 1.94 0 00-1.5-1.68c-1.47-.33-2.97-.5-4.47-.52-1.52.02-3.02.2-4.5.52a1.93 1.93 0 00-1.5 1.68l-.34 3.06a2.35 2.35 0 01-3.26 1.9l-2.8-1.24a1.94 1.94 0 00-2.2.45 20.35 20.35 0 00-4.51 7.78 1.94 1.94 0 00.7 2.13l2.49 1.84a2.34 2.34 0 010 3.77l-2.5 1.83a1.94 1.94 0 00-.7 2.14c.91 2.9 2.45 5.56 4.52 7.78a1.9 1.9 0 001.41.62c.27 0 .53-.06.78-.16l2.82-1.24a2.34 2.34 0 013.25 1.88l.34 3.06a1.94 1.94 0 001.47 1.67zM24 30.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" fill={primaryFill} /></svg>;
}

const Settings48Filled = wrapIcon(rawSvg({}), 'Settings48Filled');
export default Settings48Filled;
      