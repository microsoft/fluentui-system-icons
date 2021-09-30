import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.8 2.1a.9.9 0 00-1.6 0L5.66 5.18l-3.4.5a.9.9 0 00-.5 1.53l2.46 2.4L3.65 13a.9.9 0 001.3.95L8 12.35l.48.25a1.5 1.5 0 01-.47-1.26.9.9 0 00-.43.1l-2.9 1.53.55-3.24a.9.9 0 00-.26-.8l-2.35-2.3 3.25-.46a.9.9 0 00.68-.5L8 2.73l.73 1.48c.23-.13.49-.21.77-.21h.24l-.93-1.9zM9.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const StarLineHorizontal316Regular = wrapIcon(rawSvg({}), 'StarLineHorizontal316Regular');
export default StarLineHorizontal316Regular;
      