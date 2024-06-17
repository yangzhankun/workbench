import { NextMiddleware } from 'next/server';
import { experimentationSDK, getFeatureConfig } from 'server/middleware';


export const ContextMiddleware: NextMiddleware = async (req) => {
   const { pathname, href } = req.nextUrl;
   const featureConfig = getFeatureConfig(pathname);

   if (featureConfig) {
      // pages are used when integrating feature flag for specific dynamic pages
      if (featureConfig.pages && !featureConfig.pages[pathname]) {
         return null;
      }

      let isFeaturesLoaded = false;

      // Making sure that the features are loaded from Growthbook
