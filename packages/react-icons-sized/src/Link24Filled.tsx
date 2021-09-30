import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 7a1 1 0 01.12 2H7a3 3 0 00-.18 6H9a1 1 0 01.12 2H7a5 5 0 01-.22-10H9zm8 0a5 5 0 01.22 10H15a1 1 0 01-.12-2H17a3 3 0 00.18-6H15a1 1 0 01-.12-2H17zM7 11h10a1 1 0 01.12 2H7a1 1 0 01-.12-2H17 7z" fill={primaryFill} /></svg>;
}

const Link24Filled = wrapIcon(rawSvg({}), 'Link24Filled');
export default Link24Filled;
      