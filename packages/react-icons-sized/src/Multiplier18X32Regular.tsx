import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 12.68c0-2.16 1.9-3.75 4.03-3.75 2.14 0 4.04 1.6 4.04 3.75 0 1.06-.45 1.97-1.16 2.64A4.18 4.18 0 0122 18.87c0 2.57-2.4 4.38-5 4.38s-5-1.8-5-4.38c0-1.54.87-2.81 2.13-3.58A3.57 3.57 0 0113 12.7zm4.03-1.75c-1.21 0-2.03.88-2.03 1.75 0 .88.82 1.75 2.03 1.75 1.22 0 2.04-.87 2.04-1.75 0-.87-.82-1.75-2.04-1.75zM17 16.5c-1.82 0-3 1.22-3 2.38 0 1.15 1.18 2.37 3 2.37s3-1.22 3-2.38c0-1.15-1.18-2.37-3-2.37zm7.7-.2a1 1 0 00-1.4 1.4l1.79 1.8-1.8 1.8a1 1 0 001.42 1.4l1.79-1.79 1.8 1.8a1 1 0 001.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 00-1.42-1.4l-1.79 1.79-1.8-1.8zM11 22a1 1 0 11-2 0 1 1 0 012 0zM7.33 9.05A1 1 0 018 10v12a1 1 0 11-2 0v-9.58c-.55.47-1.22.98-1.99 1.44A1 1 0 013 12.14 13.27 13.27 0 006.2 9.4a1 1 0 011.12-.34z" fill={primaryFill} /></svg>;
}

const Multiplier18X32Regular = wrapIcon(rawSvg({}), 'Multiplier18X32Regular');
export default Multiplier18X32Regular;
      