import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a2 2 0 00-2 2v10c0 1.1.9 2 2 2h1.05l.25-1H5a1 1 0 01-1-1V3a1 1 0 011-1h3v2.5C8 5.33 8.67 6 9.5 6H12v1.44c.3-.2.65-.34 1-.4V5.4c0-.4-.16-.78-.44-1.06L9.65 1.44A1.5 1.5 0 008.58 1H5zm6.8 4H9.5a.5.5 0 01-.5-.5V2.2L11.8 5zM13 8.06c-.24.07-.47.2-.66.4l-4.3 4.28c-.34.35-.59.78-.71 1.26l-.01.03-.3 1.21a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29A1.56 1.56 0 0013 8.06z" fill={primaryFill} /></svg>;
}

const DocumentEdit16Regular = wrapIcon(rawSvg({}), 'DocumentEdit16Regular');
export default DocumentEdit16Regular;
      