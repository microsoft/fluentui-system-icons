import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 5.13l.96-.96a2 2 0 00-2.83-2.83L2.44 8.73a2.5 2.5 0 00-.66 1.16l-.57 2.3c-.09.36.24.69.6.6l2.3-.57c.38-.1.73-.28 1.02-.53A5.52 5.52 0 015 10.4l-.44.44c-.19.2-.43.33-.7.4l-1.48.37.37-1.49c.07-.26.2-.5.4-.7l5.97-5.97 1.42 1.42-.13.12a5.71 5.71 0 011.29.13zM9.83 2.76l.7-.71a1 1 0 111.42 1.41l-.7.71-1.42-1.41zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM9.6 7.9a.5.5 0 00-.7 0L7.15 9.65a.5.5 0 000 .7L8.9 12.1a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75H8.71l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const EditArrowBack16Regular = wrapIcon(rawSvg({}), 'EditArrowBack16Regular');
export default EditArrowBack16Regular;
      