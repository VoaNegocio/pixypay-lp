import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTMTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Ensure dataLayer exists
        window.dataLayer = window.dataLayer || [];

        // Push the page_view event
        // We use a small timeout to allow document.title to update if handled by other components
        const timeoutId = setTimeout(() => {
            window.dataLayer.push({
                event: 'page_view',
                page_path: location.pathname + location.search,
                page_title: document.title,
            });
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [location]);

    return null;
};

export default GTMTracker;
