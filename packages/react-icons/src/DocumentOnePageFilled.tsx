import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm7.09 5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1zm0 3.5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1zm0 3.5H7.5a.5.5 0 01-.09-1h5.09a.5.5 0 01.09 1z" fill={primaryFill} /></svg>;
}

const DocumentOnePageFilled = wrapIcon(rawSvg({}), 'DocumentOnePageFilled');
export default DocumentOnePageFilled;
      