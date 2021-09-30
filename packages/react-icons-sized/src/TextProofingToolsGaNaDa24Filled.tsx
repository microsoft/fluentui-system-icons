import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 3.75a1 1 0 00-2 0v7.5a1 1 0 102 0v-4.5a1 1 0 000-2v-1zM23 4a1 1 0 10-2 0v7a1 1 0 002 0V6.75a1 1 0 000-2V4zm-9-1a1 1 0 011 1v.75h.25a1 1 0 110 2H15V11a1 1 0 01-2 0V8.52a1 1 0 01-.8.96l-2.5.5a1 1 0 01-1.15-1.3l1.5-4.5a1 1 0 111.9.64l-.96 2.86.82-.16a1 1 0 011.2.96V4a1 1 0 011-1zM0 4.75a1 1 0 011-1h3a1 1 0 011 1c0 1.75-.87 4.45-3.6 5.66a.99.99 0 01-1.3-.5 1 1 0 01.5-1.32 4.07 4.07 0 002.28-2.84H1a1 1 0 01-1-1zM16.5 5a1 1 0 011-1H19a1 1 0 110 2h-.5v2.22l.76-.19a1 1 0 11.48 1.94l-2 .5a1 1 0 01-1.24-.97V5zm-5.32 12.77l4.3-5.16a1 1 0 011.54 1.28l-5 6a1 1 0 01-1.48.07l-2.5-2.5a1 1 0 011.42-1.42l1.72 1.73z" fill={primaryFill} /></svg>;
}

const TextProofingToolsGaNaDa24Filled = wrapIcon(rawSvg({}), 'TextProofingToolsGaNaDa24Filled');
export default TextProofingToolsGaNaDa24Filled;
      