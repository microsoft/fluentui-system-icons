import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v4c-.17 0-.34.02-.5.08a1.5 1.5 0 00-.5-1.2V3.5a.5.5 0 00-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H4.5a.5.5 0 00-.5.5v10c0 .28.22.5.5.5h3.09l-.03.09c-.09.31-.07.63.03.91H4.5A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2h.59zM6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M9.37 14.84a.5.5 0 01-.82-.13.5.5 0 01-.03-.35l2-7a.5.5 0 11.97.28l-2 7a.5.5 0 01-.12.2z" fill={primaryFill} /><path d="M7.38 9.32a.5.5 0 10-.76-.65l-1.5 1.75a.5.5 0 000 .65l1.5 1.75a.5.5 0 10.76-.65l-1.22-1.42 1.22-1.43z" fill={primaryFill} /><path d="M12.67 12.88a.5.5 0 01-.05-.71l1.22-1.42-1.22-1.43a.5.5 0 11.76-.65l1.5 1.75a.5.5 0 010 .65l-1.5 1.75a.5.5 0 01-.7.06z" fill={primaryFill} /></svg>;
}

const ClipboardCode16Regular = wrapIcon(rawSvg({}), 'ClipboardCode16Regular');
export default ClipboardCode16Regular;
      