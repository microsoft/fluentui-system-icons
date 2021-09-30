import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5A2.5 2.5 0 016.5 2h7A2.5 2.5 0 0116 4.5v13a.5.5 0 01-.8.4L10 14.12 4.8 17.9a.5.5 0 01-.8-.4v-13zM6.5 3C5.67 3 5 3.67 5 4.5v12.02l4.7-3.42a.5.5 0 01.6 0l4.7 3.42V4.5c0-.83-.67-1.5-1.5-1.5h-7z" fill={primaryFill} /></svg>;
}

const BookmarkRegular = wrapIcon(rawSvg({}), 'BookmarkRegular');
export default BookmarkRegular;
      