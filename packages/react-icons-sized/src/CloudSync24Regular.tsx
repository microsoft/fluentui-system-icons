import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 7.75a5.75 5.75 0 0111.32 0h.09a4 4 0 013.96 4.55c-.45-.53-1-1-1.6-1.36a2.5 2.5 0 00-2.36-1.69h-.76a.75.75 0 01-.75-.71 4.25 4.25 0 00-8.48 0 .75.75 0 01-.75.71H6a2.5 2.5 0 000 5h4.4c-.18.48-.3.98-.36 1.5H6a4 4 0 010-8h.09zM11 16.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm8.5-3.5c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.5 2.5 0 00-4.03.04.5.5 0 01-.8-.59 3.5 3.5 0 015.33-.4v-.55c0-.28.22-.5.5-.5zM14 18.95v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-1a2.5 2.5 0 003.91.11.5.5 0 01.77.65 3.5 3.5 0 01-5.18.19z" fill={primaryFill} /></svg>;
}

const CloudSync24Regular = wrapIcon(rawSvg({}), 'CloudSync24Regular');
export default CloudSync24Regular;
      