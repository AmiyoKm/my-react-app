import UserGreeting from './userGreeting';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} userName="Amiyo" />
    </>
  );
}

export default App;