import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.88 13.59l1.27 1.26a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.4 3.12C2.15 3.52 2 4 2 4.5v1a.5.5 0 001 0v-1c0-.23.05-.45.15-.65L6.29 7a1.4 1.4 0 01-.1.1l-.02.02-.92.54a1.5 1.5 0 00-.65 1.82l.26.7c.16.43.52.76.96.9l2.71.84c.76.24 1.57-.07 1.99-.7l1.63 1.63c-.2.1-.42.15-.65.15h-1a.5.5 0 000 1h1c.5 0 .98-.15 1.38-.41zm-3.1-3.1a.77.77 0 01-.95.47l-2.71-.84a.5.5 0 01-.32-.3l-.27-.7a.5.5 0 01.22-.6l.93-.54a.5.5 0 00.04-.03h.01l.01-.01A1.47 1.47 0 007 7.7l2.78 2.78zM7.33 5.2l.74.74c.14-.26.25-.48.38-.8a.3.3 0 01.1-.13A.12.12 0 018.6 5h.05a.4.4 0 01.28.23c.06.13.08.3.08.53a3.25 3.25 0 01-.15.96l.76.77H10a.5.5 0 01.49.64l-.05.18.8.8.2-.7A1.5 1.5 0 0010 6.5h-.06c.04-.24.08-.5.07-.75 0-.26-.03-.6-.18-.93a1.4 1.4 0 00-.92-.77c-.72-.2-1.22.35-1.38.73-.06.17-.13.3-.2.44zM13 10.88l.98.97.02-.35v-1a.5.5 0 00-1 0v.38zM4.15 2.02l.97.98h.38a.5.5 0 000-1h-1c-.12 0-.24 0-.35.02zM14 4.5A2.5 2.5 0 0011.5 2h-1a.5.5 0 000 1h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 001 0v-1zM4.5 14A2.5 2.5 0 012 11.5v-1a.5.5 0 011 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 010 1h-1z" fill={primaryFill} /></svg>;
}

const ScanThumbUpOff16Regular = wrapIcon(rawSvg({}), 'ScanThumbUpOff16Regular');
export default ScanThumbUpOff16Regular;
      