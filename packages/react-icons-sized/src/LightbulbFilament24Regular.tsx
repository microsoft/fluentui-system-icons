import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 6.75a.75.75 0 011.5 0v1.5a.75.75 0 01-1.5 0v-1.5z" fill={primaryFill} /><path d="M16.28 8.22a.75.75 0 00-1.06 0l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06c.3-.3.3-.77 0-1.06z" fill={primaryFill} /><path d="M8.78 8.22a.75.75 0 00-1.06 1.06l1.06 1.06a.75.75 0 101.06-1.06L8.78 8.22z" fill={primaryFill} /><path d="M12 2c4 0 7.25 3.25 7.25 7.25 0 2.1-.9 4.02-2.66 5.74a.75.75 0 00-.18.27l-.03.1-1.13 4.9a2.25 2.25 0 01-2.02 1.73l-.17.01h-2.12c-.99 0-1.85-.65-2.14-1.58l-.05-.16-1.13-4.9a.75.75 0 00-.2-.37c-1.68-1.64-2.58-3.46-2.66-5.44l-.01-.3v-.24a7.25 7.25 0 017.25-7zm2.12 16.5H9.88l.33 1.42c.07.3.33.53.63.57l.1.01h2.12c.31 0 .59-.2.7-.48l.03-.1.33-1.42zM12 3.5a5.75 5.75 0 00-5.75 5.53v.5c.08 1.56.8 3.02 2.21 4.39.27.26.46.58.57.93l.05.17.46 1.98h1.71v-6.25a.75.75 0 011.5 0V17h1.71l.46-1.98c.08-.36.25-.69.5-.97l.12-.13c1.4-1.37 2.13-2.83 2.2-4.4l.01-.27v-.22A5.75 5.75 0 0012 3.5z" fill={primaryFill} /></svg>;
}

const LightbulbFilament24Regular = wrapIcon(rawSvg({}), 'LightbulbFilament24Regular');
export default LightbulbFilament24Regular;
      