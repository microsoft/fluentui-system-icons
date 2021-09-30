import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 7a5 5 0 116 4.9V15h5.27c1.5 0 2.73 1.22 2.73 2.73v2.37a5 5 0 11-2 0v-2.37c0-.4-.33-.73-.73-.73H9.73c-.4 0-.73.33-.73.73v2.37a5 5 0 11-2 0v-2.37C7 16.23 8.22 15 9.73 15H15v-3.1A5 5 0 0111 7z" fill={primaryFill} /></svg>;
}

const Organization32Filled = wrapIcon(rawSvg({}), 'Organization32Filled');
export default Organization32Filled;
      