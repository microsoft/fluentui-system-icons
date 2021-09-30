import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-1.7-.28A4.5 4.5 0 003 8.76V6zm9.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M11.91 17H14c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.58-.09 4.5 4.5 0 01-.2 3.38l2 2c.15.16.27.36.34.56z" fill={primaryFill} /><path d="M8.3 14.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L8.3 14.6zm-2.8.4a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const ImageSearchFilled = wrapIcon(rawSvg({}), 'ImageSearchFilled');
export default ImageSearchFilled;
      