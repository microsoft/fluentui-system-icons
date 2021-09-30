import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1a.5.5 0 01-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 010-1h1zm-7 0A2.5 2.5 0 002 4.5v1a.5.5 0 001 0v-1C3 3.67 3.67 3 4.5 3h1a.5.5 0 000-1h-1zm7 12a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 000 1h1zM2 11.5A2.5 2.5 0 004.5 14h1a.5.5 0 000-1h-1A1.5 1.5 0 013 11.5v-1a.5.5 0 00-1 0v1zm6.9-7.46c-.72-.2-1.22.35-1.38.73-.1.28-.2.47-.34.72l-.27.56a3.78 3.78 0 01-.73 1.06l-.01.01-.92.54a1.5 1.5 0 00-.65 1.82l.26.7c.16.43.52.76.96.9l2.71.84c.94.3 1.94-.23 2.22-1.18l.69-2.32a1.5 1.5 0 00-1.45-1.93h-.06c.04-.24.08-.5.07-.75 0-.26-.03-.6-.18-.93a1.4 1.4 0 00-.92-.77z" fill={primaryFill} /></svg>;
}

const ScanThumbUp16Filled = wrapIcon(rawSvg({}), 'ScanThumbUp16Filled');
export default ScanThumbUp16Filled;
      