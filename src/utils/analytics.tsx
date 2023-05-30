// Google Analytics
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GoogleAnalytics = ReactGA;
GoogleAnalytics.initialize(process.env.REACT_APP_GA_TRACKING_ID || '');

export const defaultPageViewAnalytics = () => console.log(GoogleAnalytics.send("pageview"));
export const GAWrapper = ({children, pageViewAnalytics = defaultPageViewAnalytics}: any) => {
    useEffect(() => pageViewAnalytics, []);
    return <>{children}</>;
}

export default GoogleAnalytics;