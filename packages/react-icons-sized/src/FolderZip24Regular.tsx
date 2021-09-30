import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 4.4c-.38-.26-.83-.4-1.3-.4H4.1A2.25 2.25 0 002 6.26V17.9A2.25 2.25 0 004.26 20H19.9a2.25 2.25 0 002.1-2.25V8.6l-.02-.16a2.25 2.25 0 00-2.23-1.94h-7.73L9.65 4.52l-.16-.12zm4 3.6v2.25c0 .4.33.75.75.75H15v1h-.25a.75.75 0 000 1.5H15V15h-.25a.75.75 0 000 1.5H15v2H4.15a.75.75 0 01-.65-.75V10.5h4.9c.46-.05.9-.23 1.25-.52L12.02 8h1.48zm3 10h.25a.75.75 0 000-1.5h-.25V15h.25a.75.75 0 000-1.5h-.25V11h.75c.41 0 .75-.34.75-.75V8h1.85c.37.06.65.37.65.75v9.1a.75.75 0 01-.75.65H16.5V18zm0-10v1.5H15V8h1.5zM4.25 5.5h4.06c.14.03.27.08.38.17l1.89 1.58-1.9 1.58-.08.06a.75.75 0 01-.4.11H3.5V6.15a.75.75 0 01.75-.65z" fill={primaryFill} /></svg>;
}

const FolderZip24Regular = wrapIcon(rawSvg({}), 'FolderZip24Regular');
export default FolderZip24Regular;
      