import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.27 21h-6.54A2 2 0 119 18.27V15H5.73a2 2 0 01-1.58 1H4a2 2 0 01-1-3.73V5.73A2 2 0 115.73 3h6.54A2 2 0 1115 5.73V9h3.27a2 2 0 011.58-1H20a2 2 0 011 3.73v6.54A2 2 0 1118.27 21h-6.54 6.54zm0-10H15v1.27a2 2 0 011 1.58V14a2 2 0 01-3.73 1H11v3.27a2 2 0 01.73.73h6.54c.17-.3.43-.56.73-.73v-6.54a2.01 2.01 0 01-.64-.58l-.1-.15zM13 11h-1.27c-.17.3-.43.56-.73.73V13h1.27c.17-.3.43-.56.73-.73V11zm-.73-6H5.73c-.17.3-.43.56-.73.73v6.54c.3.17.56.43.73.73H9v-1.27a2 2 0 01-1-1.58V10a2 2 0 013.73-1H13V5.73a2.01 2.01 0 01-.64-.58l-.1-.15z" fill={primaryFill} /></svg>;
}

const Pair24Filled = wrapIcon(rawSvg({}), 'Pair24Filled');
export default Pair24Filled;
      