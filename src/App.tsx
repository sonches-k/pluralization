import './i18n';
import  UnreadMessages from './components/UnreadMessages';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Мои сообщения</h1>
      <UnreadMessages />
    </div>
  );
}

export default App;
