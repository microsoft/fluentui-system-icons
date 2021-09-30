import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.24 16.5a.75.75 0 01.1 1.49H4.76a.75.75 0 01-.1-1.49h10.6zM10 2c.38 0 .7.28.75.65V12.95l2.97-2.98c.26-.27.68-.29.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-4.24 4.25-.07.06-.1.06-.03.02-.1.04-.11.03-.07.01H10l-.15-.01-.08-.03a.73.73 0 01-.26-.14l-4.29-4.29A.75.75 0 016.2 9.9l.08.07 2.97 2.97V2.74c0-.4.34-.74.75-.74z" fill={primaryFill} /></svg>;
}

const ArrowDownloadFilled = wrapIcon(rawSvg({}), 'ArrowDownloadFilled');
export default ArrowDownloadFilled;
      