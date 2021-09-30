import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2.5a3.5 3.5 0 11-2.6 5.85l-4.56 2.6a3.5 3.5 0 010 2.1l4.56 2.6A3.5 3.5 0 0120.5 18a3.5 3.5 0 11-6.84-1.05l-4.56-2.6A3.5 3.5 0 013 12a3.5 3.5 0 016.1-2.35l4.56-2.6A3.5 3.5 0 0117 2.5zM17 16a2 2 0 100 4 2 2 0 000-4zM6.5 10a2 2 0 100 4 2 2 0 000-4zM17 4a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
}

const ShareAndroid24Regular = wrapIcon(rawSvg({}), 'ShareAndroid24Regular');
export default ShareAndroid24Regular;
      