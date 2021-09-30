import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.75A2.75 2.75 0 014.75 3h10.5A2.75 2.75 0 0118 5.75V10h-1V5.75C17 4.78 16.22 4 15.25 4H4.75C3.78 4 3 4.78 3 5.75v6.5c0 .97.78 1.75 1.75 1.75H9v1H4.75A2.75 2.75 0 012 12.25v-6.5zM11.5 11c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-6z" fill={primaryFill} /></svg>;
}

const PictureInPicture20Regular = wrapIcon(rawSvg({}), 'PictureInPicture20Regular');
export default PictureInPicture20Regular;
      