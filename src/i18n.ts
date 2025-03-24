import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      unreadMessages_one:
        'У вас {{count}} непрочитанное сообщение ({{date}})',
      unreadMessages_few:
        'У вас {{count}} непрочитанных сообщения ({{date}})',
      unreadMessages_many:
        'У вас {{count}} непрочитанных сообщений ({{date}})',
      unreadMessages_other:
        'У вас {{count}} непрочитанных сообщений ({{date}})'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',     
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
