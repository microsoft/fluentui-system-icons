import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1v3.5C8 5.33 8.67 6 9.5 6H13v1.04c-.5.08-.98.32-1.37.7l-4.29 4.3c-.48.48-.83 1.08-1 1.75l-.3 1.2H4.5A1.5 1.5 0 013 13.5V2.5C3 1.67 3.67 1 4.5 1H8zm5 7.06c-.24.07-.47.2-.66.4l-4.3 4.28c-.35.36-.6.8-.72 1.3l-.3 1.2a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29A1.56 1.56 0 0013 8.06zM9 1.25V4.5c0 .28.22.5.5.5h3.25L9 1.25z" fill={primaryFill} /></svg>;
}

const DocumentEdit16Filled = wrapIcon(rawSvg({}), 'DocumentEdit16Filled');
export default DocumentEdit16Filled;
      