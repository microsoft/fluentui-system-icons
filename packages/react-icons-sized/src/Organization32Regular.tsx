import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a5 5 0 00-1 9.9V15H9.73A2.73 2.73 0 007 17.73v2.37a5 5 0 102 0v-2.37c0-.4.33-.73.73-.73h12.54c.4 0 .73.33.73.73v2.37a5 5 0 102 0v-2.37c0-1.5-1.22-2.73-2.73-2.73H17v-3.1A5 5 0 0016 2zm-3 5a3 3 0 116 0 3 3 0 01-6 0zM5 25a3 3 0 116 0 3 3 0 01-6 0zm19-3a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /></svg>;
}

const Organization32Regular = wrapIcon(rawSvg({}), 'Organization32Regular');
export default Organization32Regular;
      