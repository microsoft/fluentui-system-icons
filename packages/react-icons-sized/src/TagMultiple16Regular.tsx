import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.36 4.66c-.3.3-.8.3-1.1 0a.76.76 0 010-1.08c.3-.3.8-.3 1.1 0 .3.3.3.78 0 1.08zm-8.82 4.5a2 2 0 010-2.83L7.3 1.6c.37-.37.88-.58 1.41-.59L11.97 1A2 2 0 0114 3.02l-.03 3.37a2 2 0 01-.59 1.4L8.7 12.45c-.78.78-2.06.78-2.84 0l-3.31-3.3zm.7-2.12a1 1 0 000 1.41l3.32 3.3c.4.38 1.03.38 1.42 0l4.69-4.67a1 1 0 00.3-.7l.02-3.37A1 1 0 0011.98 2l-3.27.01c-.26 0-.52.11-.7.3L3.25 7.04zM2 9.75a2 2 0 00.46 2.11l1.96 1.97a4 4 0 005.66 0l3.48-3.48c.28-.28.44-.67.44-1.06V8.5l-3.92 3.92-.21.2-.5.5a3 3 0 01-4.24 0l-.5-.5a4.08 4.08 0 01-.2-.2l-1.97-1.97A2 2 0 012 9.75z" fill={primaryFill} /></svg>;
}

const TagMultiple16Regular = wrapIcon(rawSvg({}), 'TagMultiple16Regular');
export default TagMultiple16Regular;
      