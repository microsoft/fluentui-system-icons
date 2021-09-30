import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.89a28.51 28.51 0 0114 0c.6.14 1 .68 1 1.28v2.55c0 1.8-1.44 3.28-3.24 3.28h-2c-.61 0-1.2-.27-1.6-.73l-.52-.61a.83.83 0 00-1.27 0l-.53.6c-.4.47-.99.74-1.6.74h-2A3.26 3.26 0 012 10.72V8.17c0-.6.4-1.14 1-1.28zm7.75 1.86a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM4.5 9a.5.5 0 000 1H6a.5.5 0 000-1H4.5zm9 .5c0 .28.22.5.5.5h1.5a.5.5 0 000-1H14a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const HeadsetVrFilled = wrapIcon(rawSvg({}), 'HeadsetVrFilled');
export default HeadsetVrFilled;
      