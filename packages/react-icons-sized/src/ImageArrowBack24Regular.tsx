import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM5.35 4.35a.5.5 0 10-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7L4.71 6h2.04C7.99 6 9 7 9 8.25v.25a.5.5 0 001 0v-.25C10 6.45 8.54 5 6.75 5H4.71l.64-.65zM3 11.98c.46.3.97.53 1.5.7v5.07c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 013.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V6.25c0-.97-.78-1.75-1.75-1.75h-5.06a6.47 6.47 0 00-.71-1.5h5.77C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75v-5.77zm15.33 7.42l-5.8-5.69a.75.75 0 00-.97-.07l-.08.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1zM15.25 6.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const ImageArrowBack24Regular = wrapIcon(rawSvg({}), 'ImageArrowBack24Regular');
export default ImageArrowBack24Regular;
      