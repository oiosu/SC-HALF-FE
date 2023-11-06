import './App.css';
import Toast from './component/Toast';

function App() {
  const messageArray = [
    // 속성이 2개라면, 값을 바로 넣는것보다 다음과 같이 오브젝트를 만들어서 넣어준다. 
    {
      title: 'success',
      text: 'Right On!'
    },
    {
      title: 'warning',
      text: 'Right On!'
    },
    {
      title: 'error',
      text: 'Right On!'
    }
  ]

  return (
    <div className='wrapper'>
      {messageArray.map((messgae, index) => {
        <Toast title={messgae.title} text={message.text} />
      })}

    </div>
  );
}

export default App;
