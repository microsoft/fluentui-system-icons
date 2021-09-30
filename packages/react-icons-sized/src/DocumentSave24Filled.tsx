import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-5.05c.03-.16.05-.33.05-.5v-6.88c0-.66-.26-1.3-.73-1.77l-1.12-1.12A2.5 2.5 0 009.38 11H4V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM5 12h3v2H5v-2zm-2.5 0H4v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V12h.38c.4 0 .78.16 1.06.44l1.12 1.12c.28.28.44.66.44 1.06v6.88c0 .83-.67 1.5-1.5 1.5H10v-5.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V23h-.5A1.5 1.5 0 011 21.5v-8c0-.83.67-1.5 1.5-1.5zM9 18v5H4v-5h5z" fill={primaryFill} /></svg>;
}

const DocumentSave24Filled = wrapIcon(rawSvg({}), 'DocumentSave24Filled');
export default DocumentSave24Filled;
      