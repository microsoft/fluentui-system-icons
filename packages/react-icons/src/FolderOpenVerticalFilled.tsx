import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.14 2.87c-.1.2-.14.4-.14.63v10.63a2.5 2.5 0 001.6 2.33l4.36 1.68c.35.14.72.13 1.04.02V6.56a1.5 1.5 0 00-.96-1.39l-5.9-2.3z" fill={primaryFill} /><path d="M4.93 2.11l5.48 2.13A2.5 2.5 0 0112 6.57V16h1.5c.83 0 1.5-.67 1.5-1.5v-2.94l.96-3.82c.02-.12.04-.24.04-.36V3.5c0-.83-.67-1.5-1.5-1.5h-9c-.2 0-.4.04-.57.11z" fill={primaryFill} /></svg>;
}

const FolderOpenVerticalFilled = wrapIcon(rawSvg({}), 'FolderOpenVerticalFilled');
export default FolderOpenVerticalFilled;
      