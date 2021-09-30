import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.34 8a5.75 5.75 0 0111.32 0h.09a4 4 0 013.95 4.6A6.49 6.49 0 0010.02 16H6.25a4 4 0 010-8h.09zM11 16.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm8.5-3.5c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.5 2.5 0 00-4.03.04.5.5 0 01-.8-.59 3.5 3.5 0 015.33-.4v-.55c0-.28.22-.5.5-.5zM14 18.95v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-1a2.5 2.5 0 003.91.11.5.5 0 01.77.65 3.5 3.5 0 01-5.18.19z" fill={primaryFill} /></svg>;
}

const CloudSync24Filled = wrapIcon(rawSvg({}), 'CloudSync24Filled');
export default CloudSync24Filled;
      