import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const UnreadMessages: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setCount(randomNumber);

    const now = new Date();
    const shortDate = new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: 'short',  
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(now);

    setDateStr(shortDate);
  }, []);

  return (
    <div className="unread-container">
      <p className="unread-text">
        {t('unreadMessages', { count, date: dateStr })}
      </p>
    </div>
  );
};

export default UnreadMessages;
