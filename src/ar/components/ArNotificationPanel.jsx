import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import notificationsData from '../../assets/data/ArNotifications.json';

function NotificationPanel() {
  const [notification, setNotification] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  // Pick a random notification
  useEffect(() => {
    const randomNotification = notificationsData[Math.floor(Math.random() * notificationsData.length)];
    setNotification(randomNotification);
  }, []);

  // Hide notification when close button is clicked
  const closeNotification = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Don't render anything if notification is hidden
  }

  return (
    <div className="bg-gray-900 text-gray-50 py-4 px-6 shadow-lg flex justify-between items-center">
      <div>
        <p>{notification.message}</p>
        {notification.buttonLabel && notification.buttonUrl && (
          <Link to={notification.buttonUrl} className="mt-2 inline-block bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
            {notification.buttonLabel}
          </Link>
        )}
      </div>
      <button onClick={closeNotification} className="text-gray-50 hover:text-red-600 font-bold">X</button>
    </div>
  );
}

export default NotificationPanel;
