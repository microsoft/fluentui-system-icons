import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.21 13.82c.15.12.33.18.55.18.36 0 .61-.19.75-.56l1.07-2.92h4.83l1.08 2.92c.14.37.39.56.75.56a.8.8 0 00.54-.18.59.59 0 00.22-.46c0-.11-.03-.25-.1-.41L7.98 2.7c-.18-.47-.5-.7-.95-.7-.49 0-.82.24-1 .71L2.09 12.95c-.06.16-.09.3-.09.4 0 .19.07.35.21.47zm6.77-4.55H5.02L6.97 3.9h.06l1.95 5.37zM13 13.1l1.75-1.75a3.97 3.97 0 01-.35-1.73c0-.93.23-1.68.69-2.25a2.16 2.16 0 011.76-.87c.75 0 1.34.28 1.77.84.36.47.57 1.07.63 1.8.43.14.83.38 1.16.71l.29.29.02-.52c0-1.31-.33-2.37-.99-3.17a3.18 3.18 0 00-2.58-1.19 2.97 2.97 0 00-2.71 1.56h-.03V2.75c0-.22-.07-.4-.2-.54a.65.65 0 00-.5-.21c-.21 0-.38.07-.52.21a.77.77 0 00-.19.54v10.36zm3.98 8.39H20a.75.75 0 110 1.5h-5.5a1.94 1.94 0 01-1.2-.57l-2.73-2.72c-.76-.77-.76-2 0-2.76l6.38-6.38c.76-.76 2-.76 2.76 0l2.72 2.72c.76.77.76 2 0 2.76l-5.45 5.45zm1.03-9.87l-4.16 4.16 3.36 3.36 4.16-4.16a.45.45 0 000-.63l-2.72-2.73a.45.45 0 00-.64 0zm-5.22 5.22l-1.16 1.16a.45.45 0 000 .63l2.73 2.73c.17.17.46.17.63 0l1.16-1.16-3.36-3.36z" fill={primaryFill} /></svg>;
}

const TextClearFormatting24Regular = wrapIcon(rawSvg({}), 'TextClearFormatting24Regular');
export default TextClearFormatting24Regular;
      