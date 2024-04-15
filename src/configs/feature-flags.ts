import _ from 'lodash';

export type FeatureFlagsType = {
  enableKDS: boolean;
  showProductsImage: boolean;
  enableExpressOrder: boolean;
  showUpdatedDate: boolean;
  enableTables: boolean;
  enableCustomerAdding: boolean;
};

export const defaultFeatureFlags: FeatureFlagsType = {
  enableKDS: false,
  showProductsImage: false,
  enableExpressOrder: false,
  showUpdatedDate: false,
  enableTables: false,
  enableCustomerAdding: false,
};

export type FeatureFlagLabelType = {
  key: keyof typeof defaultFeatureFlags;
  label: string;
  info?: string;
};

export const featureFlagLabel: FeatureFlagLabelType[] = [
  {
    key: 'enableKDS',
    label: 'Enable Kitchen Display System (KDS) or Use KOT Print System',
    info: 'Enable Kitchen Display System (KDS): Choose this option to utilize a digital display system in the kitchen for efficient order management. <br /> Use KOT Print System: Select this option to employ the Kitchen Order Ticket (KOT) printing system for order management.',
  },
  {
    key: 'showProductsImage',
    label: 'Show Products with Image in the POS Screen',
    info: 'Show Products with Image: Enable this option to display product images along with their details on the Point of Sale (POS) screen for enhanced visual representation.',
  },
  {
    key: 'enableExpressOrder',
    label: 'Use Express Order for Quick Billing in the POS App',
    info: 'Use Express Order: Activate this option to utilize the express order feature for swift and convenient billing within the Point of Sale (POS) application.',
  },
  {
    key: 'showUpdatedDate',
    label: 'Show Updated Date Instead of Created Date in the POS Screen',
    info: 'Show Updated Date: Opt for this option to display the updated date of products or transactions instead of their creation date on the Point of Sale (POS) screen, providing users with the latest information.',
  },
  {
    key: 'enableTables',
    label: 'Enable Table Selection in the POS Ordering',
    info: 'When enabled, customers can select tables for dine-in orders directly within the POS system, facilitating table service management.<br /> When disabled, table selection functionality will not be available, suitable for businesses without table service.',
  },
  {
    key: 'enableCustomerAdding',
    label: 'Enable Customer Details Adding on the Order Details',
    info: 'When enabled, users can add customer details, such as name and contact information, to the order for better customer management and tracking. <br />When disabled, the option to add customer details to orders will not be available.',
  },
];

export const getFeatureFlags = (input: any): FeatureFlagsType => {
  const items = _.pick(input, Object.keys(defaultFeatureFlags));
  return _.merge(defaultFeatureFlags, items);
};

export const mergeFeatureFlags = (a: any, b: any): FeatureFlagsType => {
  return _.merge(defaultFeatureFlags, a, b);
};

export type FeatureFlagFormType = {
  key: keyof typeof defaultFeatureFlags;
  label: string;
  info?: string;
  value: boolean;
};

export const getFeatureFlagForm = (input: any): FeatureFlagFormType[] => {
  const items = getFeatureFlags(input);
  return featureFlagLabel.map((each) => ({
    ...each,
    value: items[each.key],
  }));
};
