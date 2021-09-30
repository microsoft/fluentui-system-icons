import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.04 6.3a.5.5 0 01.66-.26L10 7.95l4.3-1.9a.5.5 0 01.4.9l-4.2 1.87v4.68a.5.5 0 01-1 0V8.82L5.3 6.96a.5.5 0 01-.26-.66zM8.7 2.48a3.5 3.5 0 012.6 0l5.76 2.3c.57.23.94.78.94 1.4v5.86a3.54 3.54 0 00-.5-.04H17V6.18a.5.5 0 00-.31-.47l-5.76-2.3a2.5 2.5 0 00-1.86 0l-5.76 2.3a.5.5 0 00-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3c.37.15.77.2 1.16.17.13.33.31.65.54.92-.69.16-1.41.1-2.07-.16l-5.76-2.3a1.5 1.5 0 01-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3zM13.5 13a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H17a.5.5 0 000 1h.5a2.5 2.5 0 000-5H17zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const CubeLinkRegular = wrapIcon(rawSvg({}), 'CubeLinkRegular');
export default CubeLinkRegular;
      