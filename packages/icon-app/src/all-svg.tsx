import * as React from 'react';
import * as ReactIcons from '@fluentui/react-icons';

const ICONS_LIST: React.FC<ReactIcons.FluentIconsProps>[] = Object.keys(ReactIcons)
  .map(iconName => (ReactIcons as any)[iconName])
  .filter(icon => !!icon && !!icon.displayName);

export const AllSvgIcons: React.FC = () => {
  return (
    <>
      {ICONS_LIST.map(IconComponent => {
        const name = IconComponent.displayName || 'UnknownIcon';
        return (
          <div key={name} style={{ display: 'inline-block', margin: '10px', textAlign: 'center' }}>
            <IconComponent />
            <div style={{ marginTop: '5px', fontSize: '12px' }}>{name}</div>
          </div>
        );
      })}
    </>
  );
}