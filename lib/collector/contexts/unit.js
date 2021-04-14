import { UNIT_SCHEMA_URL } from '../constants';

export const createUnitContext = unit => {
  // TODO: add non-required fields like yoffsetTop and bottom
  const unitContext = {
    schema: UNIT_SCHEMA_URL,
    data: {
      name: unit.unitName,
      unitId: unit.unitId,
      itemsCount: unit.totalProducts,
      backupsCount: unit.backupProducts,
      configType: 'preconfigured',
      source: 'api',
      recType: unit.typeId,
      placement: unit.pagePlacement,
      // yOffsetTop:
      // yOffsetBottom:
    },
  };
  return unitContext;
};
