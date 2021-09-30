import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a2 2 0 114 0v3a2 2 0 11-4 0V3zm2.5 3V3a.5.5 0 00-1 0v3a.5.5 0 001 0z" fill={primaryFill} /><path d="M1 10.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1H2v1h1.5a.5.5 0 010 1H2v1.5a.5.5 0 01-1 0v-4z" fill={primaryFill} /><path d="M6 10.5c0-.28.22-.5.5-.5h1.75a1.75 1.75 0 110 3.5H7v1a.5.5 0 01-1 0v-4zm1 2h1.25a.75.75 0 000-1.5H7v1.5z" fill={primaryFill} /><path d="M12.5 10a1.5 1.5 0 000 3h1a.5.5 0 010 1h-2a.5.5 0 000 1h2a1.5 1.5 0 000-3h-1a.5.5 0 010-1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M5.5 3.25V3a.5.5 0 00-.77-.42c-.07.04-.14.1-.2.15C4.36 2.86 4.2 3 4 3c-.55 0-1.02-.47-.76-.96A2 2 0 017 3v.25a2 2 0 01-.44 1.25A2 2 0 017 5.75V6a2 2 0 01-3.76.96C2.98 6.47 3.44 6 4 6c.2 0 .36.14.53.27l.2.15A.5.5 0 005.5 6v-.25a.5.5 0 00-.5-.5.75.75 0 010-1.5.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const Fps3016Filled = wrapIcon(rawSvg({}), 'Fps3016Filled');
export default Fps3016Filled;
      