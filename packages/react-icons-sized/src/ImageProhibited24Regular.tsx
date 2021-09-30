import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-1.5c-.83 0-1.6-.25-2.25-.7l5.56-5.55a4 4 0 01-3.3 6.25zM3.2 8.75a4 4 0 015.56-5.56L3.18 8.75zm1.3 3.94a6.47 6.47 0 01-1.5-.71v5.77C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3h-5.77c.3.46.53.97.7 1.5h5.07c.97 0 1.75.78 1.75 1.75v11.5c0 .2-.04.4-.1.6l-5.83-5.7-.12-.12a2.25 2.25 0 00-3.02.11l-5.83 5.7c-.06-.18-.1-.38-.1-.59v-5.06zm8.02 1.02l5.81 5.7c-.18.06-.38.09-.58.09H6.25c-.2 0-.4-.03-.58-.1l5.8-5.69.09-.07c.29-.2.7-.18.96.07zm4.98-4.96a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm-3 0a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /></svg>;
}

const ImageProhibited24Regular = wrapIcon(rawSvg({}), 'ImageProhibited24Regular');
export default ImageProhibited24Regular;
      