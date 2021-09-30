import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.5A2.5 2.5 0 0011.5 2h-1a.5.5 0 000 1h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 001 0v-1zm-12 0A2.5 2.5 0 014.5 2h1a.5.5 0 010 1h-1C3.67 3 3 3.67 3 4.5v1a.5.5 0 01-1 0v-1zm12 7a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1c.83 0 1.5-.67 1.5-1.5v-1a.5.5 0 011 0v1zM4.5 14A2.5 2.5 0 012 11.5v-1a.5.5 0 011 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 010 1h-1zm4.4-9.96c-.72-.2-1.22.35-1.38.73-.1.28-.2.47-.34.72l-.27.56a3.78 3.78 0 01-.73 1.06l-.01.01-.92.54a1.5 1.5 0 00-.65 1.82l.26.7c.16.43.52.76.96.9l2.71.84c.94.3 1.94-.23 2.22-1.18l.69-2.32a1.5 1.5 0 00-1.45-1.93h-.06c.04-.24.08-.5.07-.75 0-.26-.03-.6-.18-.93a1.4 1.4 0 00-.92-.77zM5.75 8.52l.93-.54a.5.5 0 00.04-.03h.01l.01-.01.08-.07a4.76 4.76 0 00.99-1.4l.27-.52c.13-.26.24-.48.37-.8a.3.3 0 01.1-.13A.12.12 0 018.6 5h.05a.4.4 0 01.28.23c.06.13.08.3.08.53 0 .2-.04.48-.1.75-.03.12-.06.24-.1.34a.5.5 0 00.49.64h.7a.5.5 0 01.49.64l-.69 2.33a.77.77 0 01-.96.5l-2.71-.84a.5.5 0 01-.32-.3l-.27-.7a.5.5 0 01.22-.6z" fill={primaryFill} /></svg>;
}

const ScanThumbUp16Regular = wrapIcon(rawSvg({}), 'ScanThumbUp16Regular');
export default ScanThumbUp16Regular;
      