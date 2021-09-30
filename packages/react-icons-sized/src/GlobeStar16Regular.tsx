import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 13.66A6 6 0 1113.66 6a5.47 5.47 0 00-6.32 0H6.18c-.08.41-.13.85-.16 1.3a5.47 5.47 0 00-.93 2.2A12.33 12.33 0 015.16 6H3.42a4.98 4.98 0 000 4h1.6a5.57 5.57 0 000 1H4c.35.46.78.87 1.26 1.19.17.53.42 1.02.74 1.47zM9.3 4.32C8.88 3.36 8.37 3 8 3c-.37 0-.88.36-1.31 1.32-.1.2-.18.43-.26.68h3.14a6.19 6.19 0 00-.26-.68zM5.38 5a7.53 7.53 0 01.66-1.6C5.23 3.75 4.52 4.3 4 5h1.38zM12 5a5.02 5.02 0 00-2.04-1.6c.1.16.18.33.26.5.15.34.29.7.4 1.1H12zm-1.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.95-5.6H13c.48 0 .69.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 01.96 0l.47 1.53z" fill={primaryFill} /></svg>;
}

const GlobeStar16Regular = wrapIcon(rawSvg({}), 'GlobeStar16Regular');
export default GlobeStar16Regular;
      