import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.95 8.6a6.55 6.55 0 016.55-6.55c3.6 0 6.55 2.82 6.55 6.45a6.55 6.55 0 01-8.1 6.35c-.03.67-.58 1.2-1.25 1.2h-1.75v1.75c0 .69-.56 1.25-1.25 1.25H7.95v1.25c0 .97-.78 1.75-1.75 1.75H3.7c-.97 0-1.75-.78-1.75-1.75v-2.17c0-.73.29-1.43.8-1.95L9 9.95a.27.27 0 00.07-.25 6.39 6.39 0 01-.11-1.1zm9.3-1.6a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z" fill={primaryFill} /></svg>;
}

const Key24Filled = wrapIcon(rawSvg({}), 'Key24Filled');
export default Key24Filled;
      