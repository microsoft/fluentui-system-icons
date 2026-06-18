import { FileIconType } from './FileIconType';
import { TYPE_TO_ICON_NAME } from './fileIconTypes.generated';
import fileIconTypes from './fileIconTypes.json';

describe('FileIconType', () => {
  // Pins the PUBLIC numeric values. FileIconType is generated from the order of
  // fileIconTypes.json, so reordering the JSON would silently renumber the public enum —
  // this test fails if that happens, forcing an intentional review.
  it('exposes the expected stable numeric values', () => {
    expect(FileIconType).toEqual({
      docset: 1,
      folder: 2,
      genericFile: 3,
      listItem: 4,
      sharedFolder: 5,
      multiple: 6,
      stream: 7,
      news: 8,
      desktopFolder: 9,
      documentsFolder: 10,
      picturesFolder: 11,
      linkedFolder: 12,
      list: 13,
      form: 14,
      sway: 15,
      playlist: 16,
      loopworkspace: 17,
      planner: 18,
      todoItem: 19,
      portfolio: 20,
      album: 21,
      listForm: 22,
      campaign: 23,
      shortcutsdefaultfolder: 24,
      pbiApp: 25,
      pbiDashboard: 26,
      pbiPaginatedReport: 27,
      pbiScorecard: 28,
      pbiSemanticModel: 29,
      pbiReport: 30,
    });
  });

  it('numbers members by their explicit value in the source of truth', () => {
    for (const { name, value } of fileIconTypes) {
      expect(FileIconType[name as keyof typeof FileIconType]).toBe(value);
    }
  });
});

describe('TYPE_TO_ICON_NAME', () => {
  it('maps each FileIconType value to the icon name from the source of truth', () => {
    for (const { value, icon } of fileIconTypes) {
      // `null` icons fall back to the generic file icon, represented as '' in the lookup.
      expect(TYPE_TO_ICON_NAME[value]).toBe(icon ?? '');
    }
  });

  it('reserves index 0 (values start at 1)', () => {
    expect(TYPE_TO_ICON_NAME[0]).toBe('');
  });
});
