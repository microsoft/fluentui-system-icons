import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM12 1.75a3.25 3.25 0 013.24 3.07l.01.18h5.25a.75.75 0 01.1 1.5h-.9l-.5 5.09a6.45 6.45 0 00-1.46-.47l.46-4.62H5.8l1.27 12.87c.06.6.53 1.06 1.12 1.12l.12.01h2.42c.29.55.65 1.06 1.08 1.5H8.3c-1.35 0-2.5-.99-2.71-2.3l-.02-.18L4.29 6.5H3.5a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74L3.5 5h5.25c0-1.8 1.46-3.25 3.25-3.25zm1.72 12.84l-.07.06-.06.07a.5.5 0 000 .56l.06.07 2.14 2.15-2.14 2.15-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 2.15-2.14 2.15 2.14.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 000-.56l-.06-.07-2.14-2.15 2.14-2.15.06-.07a.5.5 0 000-.56l-.06-.07-.07-.06a.5.5 0 00-.56 0l-.07.06-2.15 2.14-2.15-2.14-.07-.06a.5.5 0 00-.49-.04l-.07.04zM12 3.25c-.92 0-1.67.7-1.74 1.6l-.01.15h3.5c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
}

const DeleteDismiss24Regular = wrapIcon(rawSvg({}), 'DeleteDismiss24Regular');
export default DeleteDismiss24Regular;
      