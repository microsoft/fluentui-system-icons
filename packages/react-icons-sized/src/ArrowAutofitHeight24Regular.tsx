import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.22 6.78a.75.75 0 01-.07-.98l.07-.08 2.37-2.37c.12-.2.37-.35.66-.35.25 0 .48.1.61.28l.05.07 2.37 2.37.07.08c.2.27.2.62.01.89l-.08.1-.08.06c-.26.2-.62.2-.88.01l-.1-.08L17 5.56v3.88c-.06.31-.37.56-.75.56s-.7-.25-.74-.57l-.01-.09V5.56l-1.22 1.22-.08.07c-.3.22-.71.2-.98-.07z" fill={primaryFill} /><path d="M13.22 17.22a.75.75 0 01.98-.07l.08.07 1.22 1.22v-3.78c0-.37.34-.66.75-.66.38 0 .7.25.75.57V18.44l1.22-1.22a.75.75 0 01.98-.07l.08.07c.27.27.3.68.08.98l-.08.08-2.36 2.37a.77.77 0 01-.67.35.77.77 0 01-.66-.35l-2.37-2.37a.75.75 0 010-1.06z" fill={primaryFill} /><path d="M6.25 4C5.01 4 4 5 4 6.23v11.5C4 18.98 5 20 6.25 20h4a.75.75 0 000-1.5h-4a.75.75 0 01-.75-.75V6.24c0-.41.34-.75.75-.75h4a.75.75 0 000-1.5h-4z" fill={primaryFill} /></svg>;
}

const ArrowAutofitHeight24Regular = wrapIcon(rawSvg({}), 'ArrowAutofitHeight24Regular');
export default ArrowAutofitHeight24Regular;
      