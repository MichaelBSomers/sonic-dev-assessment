import { DateRangeOpts } from 'yup';

declare module '@availity/yup' {
  declare function dateRange(opts: DateRangeOpts);
}
