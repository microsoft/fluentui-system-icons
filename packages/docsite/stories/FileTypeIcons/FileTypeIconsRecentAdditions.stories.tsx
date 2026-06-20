import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { FileIconType, FileTypeIcon, FileTypeIconsProvider } from '@fluentui/react-icons-file-type';
import * as React from 'react';

const localFabricCdnBaseUrl = '/fabric-cdn-assets/item-types/';

const recentIcons = [
  { label: 'pbiApp', type: FileIconType.pbiApp },
  { label: 'pbiDashboard', type: FileIconType.pbiDashboard },
  { label: 'pbiPaginatedReport', type: FileIconType.pbiPaginatedReport },
  { label: 'pbiScorecard', type: FileIconType.pbiScorecard },
  { label: 'pbiSemanticModel', type: FileIconType.pbiSemanticModel },
  { label: 'pbiReport', type: FileIconType.pbiReport },
  { label: '.work', extension: 'work' },
] as const;

const useClasses = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(144px, 1fr))',
    ...shorthands.gap('16px'),
    maxWidth: '920px',
  },
  item: {
    display: 'grid',
    gridTemplateRows: '64px auto',
    justifyItems: 'center',
    alignItems: 'center',
    minHeight: '104px',
    ...shorthands.padding('16px', '12px'),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  label: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
    textAlign: 'center',
  },
});

export const RecentAdditions = () => {
  const classes = useClasses();

  return (
    <FileTypeIconsProvider baseUrl={localFabricCdnBaseUrl}>
      <div className={classes.grid}>
        {recentIcons.map((icon) => (
          <div className={classes.item} key={icon.label}>
            {'type' in icon ? (
              <FileTypeIcon type={icon.type} size={64} />
            ) : (
              <FileTypeIcon extension={icon.extension} size={64} />
            )}
            <span className={classes.label}>{icon.label}</span>
          </div>
        ))}
      </div>
    </FileTypeIconsProvider>
  );
};

RecentAdditions.parameters = {
  docs: {
    description: {
      story:
        'Recent additions rendered from the local fabric-cdn asset mount so they are visible before the production CDN path is updated.',
    },
  },
};
