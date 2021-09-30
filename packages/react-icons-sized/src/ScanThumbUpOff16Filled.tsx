import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.88 13.59l1.27 1.26a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.4 3.12C2.15 3.52 2 4 2 4.5v1a.5.5 0 001 0v-1c0-.23.05-.45.15-.65L6.29 7a1.4 1.4 0 01-.1.1l-.02.02-.92.54a1.5 1.5 0 00-.65 1.82l.26.7c.16.43.52.76.96.9l2.71.84c.76.24 1.57-.07 1.99-.7l1.63 1.63c-.2.1-.42.15-.65.15h-1a.5.5 0 000 1h1c.5 0 .98-.15 1.38-.41zM7.33 5.2l3.9 3.9.2-.7A1.5 1.5 0 0010 6.5h-.06c.04-.24.08-.5.07-.75 0-.26-.03-.6-.18-.93a1.4 1.4 0 00-.92-.77c-.72-.2-1.22.35-1.38.73-.06.17-.13.3-.2.44zM13 10.88l.98.97.02-.35v-1a.5.5 0 00-1 0v.38zM4.15 2.02l.97.98h.38a.5.5 0 000-1h-1c-.12 0-.24 0-.35.02zM11.5 2A2.5 2.5 0 0114 4.5v1a.5.5 0 01-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 010-1h1zM2 11.5A2.5 2.5 0 004.5 14h1a.5.5 0 000-1h-1A1.5 1.5 0 013 11.5v-1a.5.5 0 00-1 0v1z" fill={primaryFill} /></svg>;
}

const ScanThumbUpOff16Filled = wrapIcon(rawSvg({}), 'ScanThumbUpOff16Filled');
export default ScanThumbUpOff16Filled;
      