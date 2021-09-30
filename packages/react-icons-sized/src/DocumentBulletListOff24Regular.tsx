import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm.75 2.25a.75.75 0 100 1.5.75.75 0 000-1.5zM7 18.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM4 5.06L2.22 3.28a.75.75 0 111.06-1.06l18.5 18.5a.75.75 0 01-1.06 1.06l-.92-.92A2 2 0 0118 22H6a2 2 0 01-2-2V5.06zm14.5 14.5l-1.53-1.53a.75.75 0 01-.72.97h-5.5a.75.75 0 010-1.5h5.5c.08 0 .15.01.22.03L14.94 16h-4.19a.75.75 0 010-1.5h2.69l-1.5-1.5h-1.19a.75.75 0 01-.26-1.45L5.5 6.56V20c0 .27.22.5.5.5h12a.5.5 0 00.5-.5v-.44zM12 8c0 .5.18.94.47 1.3l.24.23A2 2 0 0014 10h4.5v5.32l1.5 1.5v-7a2 2 0 00-.59-1.4L13.6 2.58a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-.7.12L6.69 3.5H12V8zm1.5-3.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zm2.75 6.88h-1.57l1.5 1.5h.07a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const DocumentBulletListOff24Regular = wrapIcon(rawSvg({}), 'DocumentBulletListOff24Regular');
export default DocumentBulletListOff24Regular;
      