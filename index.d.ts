import { Context, GrowthBook } from '@growthbook/growthbook';
import { InitParams } from './types';

export declare class TuringExperimentation extends GrowthBook {
  #private;

  /**
   * Products/clients will create instance of this class with default configurations
   */
  constructor(initParams: InitParams, context: Context);

  /**
   * Fetch features from server and set to GB instance
   * Using setFeature method defined in GB class
   */
  private  getFeatureList;
  private  setFeature;
  private  featuresPolling;
