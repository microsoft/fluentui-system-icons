import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5a7 7 0 01.24 14H9a7 7 0 01-.24-14H15zm-.25 7.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM8 9c-.38 0-.7.28-.74.65l-.01.1v1.5h-1.5a.75.75 0 00-.1 1.5h1.6v1.5a.75.75 0 001.5.1v-1.6h1.5a.75.75 0 00.1-1.5h-1.6v-1.5A.75.75 0 008 9zm8.75 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const Games24Filled = wrapIcon(rawSvg({}), 'Games24Filled');
export default Games24Filled;
      