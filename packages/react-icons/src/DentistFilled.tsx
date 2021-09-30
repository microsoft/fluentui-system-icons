import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.94 3.93a3.46 3.46 0 00-2.9-.74c-.92.18-1.73.69-2.26 1.27a4.1 4.1 0 00-1.24 2.7c-.03.6.06 1.47.53 2.13a5 5 0 011.12 3.15c0 .65.14 1.53.46 2.34.32.8.87 1.6 1.77 1.94h.02l.03.01c.52.14 1 .1 1.38-.25.32-.3.46-.76.53-1.16.07-.38.1-.82.14-1.25l.01-.15a12 12 0 01.19-1.44c.26-1.27.64-1.5.82-1.55.49-.13.78-.04.97.1.28.2.49.61.64 1.22.14.6.2 1.27.25 1.88.07.87.25 1.65.6 2.16.18.26.44.49.79.56.35.08.69-.03.99-.22 1.1-.7 1.74-2.17 1.91-4.1.08-.88.17-1.3.3-1.64.1-.25.22-.46.42-.8a37.6 37.6 0 00.36-.63c.25-.43.65-1.23.7-2.16a3.48 3.48 0 00-1.44-2.96 4.4 4.4 0 00-3.01-1.16c-.9.05-1.62.46-2.13.9h-.01l-.01.02c-.5.49-.73.58-.88.57-.17 0-.45-.14-1-.7l-.03-.02-.02-.02zm4 1.67c.48 0 .98.15 1.38.5.4.35.64.87.7 1.52a.5.5 0 01-1 .1c-.03-.45-.19-.72-.37-.88a1.06 1.06 0 00-.71-.24.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const DentistFilled = wrapIcon(rawSvg({}), 'DentistFilled');
export default DentistFilled;
      