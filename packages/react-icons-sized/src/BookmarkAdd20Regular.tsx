import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm0 13.02v-5.54c.34-.03.68-.1 1-.19v6.71a.5.5 0 01-.8.4L10 14.12 4.8 17.9a.5.5 0 01-.8-.4v-13A2.5 2.5 0 016.5 2h3.76c-.26.3-.48.64-.66 1H6.5C5.67 3 5 3.67 5 4.5v12.02l4.7-3.42a.5.5 0 01.6 0l4.7 3.42z" fill={primaryFill} /></svg>;
}

const BookmarkAdd20Regular = wrapIcon(rawSvg({}), 'BookmarkAdd20Regular');
export default BookmarkAdd20Regular;
      