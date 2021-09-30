import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 2a4.01 4.01 0 014 4v2.52l1.38 1.66a.5.5 0 01-.38.82h-10a.5.5 0 01-.38-.82l1.38-1.66V6a4.01 4.01 0 014-4zM5.75 5h5.85c-.06.33-.1.66-.1 1v.5h-5v13h8.25c.41 0 .75-.34.75-.75v-4.92a3 3 0 001.5.13v4.79c0 1.24-1 2.25-2.25 2.25h-9a.75.75 0 01-.75-.75V5.75c0-.41.34-.75.75-.75zm9.75 7.73c-.3-.17-.55-.43-.72-.73h3.44a1.98 1.98 0 01-2.72.73z" fill={primaryFill} /></svg>;
}

const DualScreenClosedAlert24Regular = wrapIcon(rawSvg({}), 'DualScreenClosedAlert24Regular');
export default DualScreenClosedAlert24Regular;
      