import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h3zm3 5.16v-2.32l1.73-1.64a.75.75 0 011.27.54v4.52c0 .66-.79 1-1.27.54L15 13.16zM22 12a10 10 0 10-18.89 4.6l-1.06 3.82a1.25 1.25 0 001.54 1.54l3.82-1.07A10 10 0 0022 12zM3.5 12a8.5 8.5 0 114.37 7.43l-.27-.15-3.99 1.11 1.11-3.98-.15-.27A8.46 8.46 0 013.5 12z" fill={primaryFill} /></svg>;
}

const ChatVideo24Regular = wrapIcon(rawSvg({}), 'ChatVideo24Regular');
export default ChatVideo24Regular;
      