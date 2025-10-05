- 구조분해 할당 활용
    
    ```jsx
    const List = ({tech}) => {
    	return <li>{tech}</li>
    }
    
    export default List
    ```
    
- 해설 🍠
    
    ```tsx
    const List = ({ tech }) => {
      return <li>{tech}</li>
    }
    
    export default List
    ```
    
    ---
    
    **방식 2) 함수 내부에서 구조 분해해요.**
    
    ```tsx
    const List = (props) => {
      const { tech } = props
      return <li>{tech}</li>
    }
    
    export default List
    ```


- **위의 영상을 보고 Lazy Initialization(게으른 초기화)**에 대해 설명해주세요 🍠
    
    **state의 초기값을 계산하는 비용이 클 때, 그 연산을 컴포넌트가 처음 마운트될 때 딱 한 번만 수행하고 이후 리렌더링 시에는 다시 실행하지 않도록 하는 기법**입니다.
    
- **App.tsx** 파일에 직접 카운터가 1씩 증가, 1씩 감소하는 기능을 만들어주세요 🍠
    - 직접 작성한 코드 **App.tsx** 파일을 올려주세요!
        
        ```tsx
        import './App.css'
        import { useState } from 'react';
        
        function App() {
          const [count, setCount] = useState(0);
        
          const addCount = ()=> {
            setCount(prev=>prev+1)
          };
        
          const subCount = ()=> {
            setCount(prev=>prev-1 )
          };
          return (
            <>
              <h1>{count}</h1>
              <button onClick={addCount}>더하기</button>
              <button onClick={subCount}></button>
            </>
          )
        };
        
        export default App;
        ```
        
    - 정답 (스스로 혼자 해보고 꼭 열어서 확인해주세요!)
        
        ```tsx
        import { useState } from 'react';
        
        function App() {
          const [count, setCount] = useState(0);
        
          const handleIncrement = () => {
            setCount(count + 1);
          };
        
          const handleDecrement = () => {
            setCount(count - 1);
          };
        
          return (
            <>
              <h1>{count}</h1>
              <div>
                <button onClick={handleIncrement}>+1 증가</button>
                <button onClick={handleDecrement}>-1 감소</button>
              </div>
            </>
          );
        }
        
        export default App;
        
        ```
        
- 영상을 보고 실습을 하면서 몰랐던 개념들을 토글을 열어 정리해주세요 🍠
    
    아래와 같이 코드를 적어도 count 값은 1만 증가함.
    
    → setCount((prev) ⇒ (prev+1)); 이 코드로 세 번 적어주면 3 증가
    
    ```tsx
    const [count, setCount] = useState(0);
    
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    ```