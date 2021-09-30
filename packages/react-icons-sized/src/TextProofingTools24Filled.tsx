import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a1 1 0 00-2 0v1H2.5a1 1 0 00-1 1v1.25a1 1 0 002 0V6h7v.25a1 1 0 102 0V5a1 1 0 00-1-1H8V3zM4 8a1 1 0 011-1h4a1 1 0 01.78 1.63l-1.5 1.87H11a1 1 0 110 2H8v1.1a2.4 2.4 0 01-3.94 1.83l-.2-.16a1 1 0 011.28-1.54l.2.17a.4.4 0 00.66-.3v-1.1H3a1 1 0 110-2h3a1 1 0 01.22-.62l.7-.88H5a1 1 0 01-1-1zm14.17-3.38a1 1 0 00-1.84 0l-3.75 9a1 1 0 101.84.76l.79-1.88h4.08l.79 1.88a1 1 0 101.84-.76l-3.75-9zm.29 5.88h-2.42l1.21-2.9 1.2 2.9zm-7.28 10.02l4.3-5.16a1 1 0 011.54 1.28l-5 6a1 1 0 01-1.48.07l-2.5-2.5a1 1 0 111.42-1.42l1.72 1.73z" fill={primaryFill} /></svg>;
}

const TextProofingTools24Filled = wrapIcon(rawSvg({}), 'TextProofingTools24Filled');
export default TextProofingTools24Filled;
      