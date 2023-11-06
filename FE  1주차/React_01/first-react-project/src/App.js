import './App.css';
import Toast from './component/Toast';
import ToastButton from './component/ToastButton';
import ToastMessage from './component/ToastMessage';

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
      <Toast message={messageArray[0]} >
        <ToastMessage message={messageArray[0]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[1]} >
        <ToastMessage message={messageArray[1]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton />
      </Toast>
    </div>
  );
}

export default App;
