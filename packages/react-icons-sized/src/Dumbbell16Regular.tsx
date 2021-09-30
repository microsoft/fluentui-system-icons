import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.03 5.78a.5.5 0 000-.71l-1.1-1.1a.5.5 0 10-.7.7l1.1 1.1c.2.2.5.2.7 0zm-5.88 5.17a.5.5 0 11-.7.71l-1.11-1.1a.5.5 0 01.7-.71l1.11 1.1zm8.11-9.2a1.34 1.34 0 00-1.89 0l-.49.5-.16-.17a1.67 1.67 0 00-2.55.22 2.03 2.03 0 00-1.83 3.43l.53.53-1.61 1.6-.53-.51A2.04 2.04 0 002.3 9.17a1.68 1.68 0 00-.21 2.55l.16.16-.5.5a1.34 1.34 0 101.89 1.9l.5-.5.17.16a1.67 1.67 0 002.54-.22 2.03 2.03 0 001.83-3.44l-.52-.52 1.6-1.61.53.52a2.04 2.04 0 003.44-1.83 1.67 1.67 0 00.22-2.54l-.17-.16.5-.5c.51-.52.51-1.36 0-1.89zm-1.2 1.68l-.47-.48.49-.49a.34.34 0 11.47.48l-.49.49zm-4 4.01L7.43 9.05l-.48-.47 1.61-1.62.48.48zm-5.63 5.62l-.5.51a.34.34 0 01-.48-.48l.5-.5.48.47zM10.06 2.8a.67.67 0 01.95 0L13.23 5a.67.67 0 01-.27 1.1.5.5 0 00-.3.69A1.04 1.04 0 0111 7.96L8.05 5.03a1.04 1.04 0 011.17-1.68.5.5 0 00.68-.3c.03-.1.09-.19.16-.26zm-6.5 5.26c.4-.4 1.06-.4 1.47 0L7.96 11a1.04 1.04 0 01-1.16 1.67.5.5 0 00-.68.3.67.67 0 01-1.1.26l-2.23-2.21a.67.67 0 01.26-1.1.5.5 0 00.3-.7c-.17-.38-.1-.84.21-1.16z" fill={primaryFill} /></svg>;
}

const Dumbbell16Regular = wrapIcon(rawSvg({}), 'Dumbbell16Regular');
export default Dumbbell16Regular;
      