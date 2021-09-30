import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4C3.01 4 2 5 2 6.25v11.5C2 18.99 3 20 4.25 20h15.5c1.24 0 2.25-1 2.25-2.25V6.25C22 5.01 21 4 19.75 4H4.25zm8.28 3.47l3.25 3.25a.75.75 0 11-1.06 1.06l-1.97-1.97v6.44a.75.75 0 11-1.5 0V9.81l-1.97 1.97a.75.75 0 11-1.06-1.06l3.25-3.25a.75.75 0 011.06 0z" fill={primaryFill} /></svg>;
}

const ShareScreenStart24Filled = wrapIcon(rawSvg({}), 'ShareScreenStart24Filled');
export default ShareScreenStart24Filled;
      