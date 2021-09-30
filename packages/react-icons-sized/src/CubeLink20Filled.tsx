import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 2.48a3.5 3.5 0 012.6 0l5.76 2.3c.57.23.94.78.94 1.4v5.86a3.54 3.54 0 00-.5-.04h-4a3.5 3.5 0 00-2.73 5.68c-.69.16-1.41.1-2.07-.16l-5.76-2.3a1.5 1.5 0 01-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3zm-3 3.56a.5.5 0 10-.4.92l4.2 1.86v4.68a.5.5 0 001 0V8.82l4.2-1.86a.5.5 0 10-.4-.92L10 7.95l-4.3-1.9zM13.5 13a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H17a.5.5 0 000 1h.5a2.5 2.5 0 000-5H17zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const CubeLink20Filled = wrapIcon(rawSvg({}), 'CubeLink20Filled');
export default CubeLink20Filled;
      