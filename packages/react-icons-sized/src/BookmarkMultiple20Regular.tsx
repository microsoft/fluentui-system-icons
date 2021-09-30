import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.27 3A2 2 0 018 2h4.5A3.5 3.5 0 0116 5.5v10a.5.5 0 01-.78.42l-.22-.15V5.5A2.5 2.5 0 0012.5 3H6.27z" fill={primaryFill} /><path d="M6 4a2 2 0 00-2 2v11.5a.5.5 0 00.78.42L9 15.1l4.22 2.82a.5.5 0 00.78-.42V6a2 2 0 00-2-2H6zM5 6a1 1 0 011-1h6a1 1 0 011 1v10.57l-3.72-2.49a.5.5 0 00-.56 0L5 16.57V6z" fill={primaryFill} /></svg>;
}

const BookmarkMultiple20Regular = wrapIcon(rawSvg({}), 'BookmarkMultiple20Regular');
export default BookmarkMultiple20Regular;
      