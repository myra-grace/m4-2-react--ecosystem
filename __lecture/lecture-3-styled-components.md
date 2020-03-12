# 4.2.3 💅 `styled-components`

---

- Write your CSS from within your JS IN SCSS!
- Every styled element gets its own component

---

```jsx
import styled from 'styled-components'; //styled-component is always declared when it will be a styled component

const Button = styled.button`
  background: blueviolet;
  border: none;
  padding: 16px 32px;
  color: white;
  font-size: 21px;
  border-radius: 2px;
`;

ReactDOM.render(
  <Button>Hello World</Button>,
  document.querySelector('#root')
);
```

---

### How does this work??

`styled-components` uses a modern JS feature called _tagged template literals_.

```js
const Button = styled.button`
  // styles here
`;

// It's similar to:
const Button = styled.button(`
  // styles here
`)
```

---

# Browser support

<img src='./assets/caniuse-template-literals.png' style=max-width:60vw' />

---

# Quiz

Despite the previous slide, our site _will_ still work in IE11.

Why is that?

---

### Hover styles

```jsx live=true
const Button = styled.button`
  background: blueviolet;
  border: none;
  padding: 16px 32px;
  color: white;
  font-size: 21px;
  border-radius: 2px;

  &:hover {
    transform: scale(1.1);
  }
`

render(<Button>Hello world</Button>)
```

---

# Why?

Why would we do this, instead of having external stylesheets?

---

# Exercise:

Convert the following inline styles to styled-components

---

```css
.wrapper {
  margin: 0 auto;
  height: 300px;
}


```


```jsx

function App(props) {
  return (
    <div className="wrapper">
      Hello World
    </div>
  )
}

// import styled from 'styled-components';

// const StyledWrapper = styled.div`
//   margin: 0 auto;
//   height: 300px;
// `;

// function App(props) {
//   return (
//     <StyledWrapper>
//       Hello World
//     </StyledWrapper>
//   )
// }


```

---

### Exercise #2

```css

.btn {
  color: tomato;
  font-weight: bold;
  padding: 20px;
}

.btn:hover, .btn:focus {
  transform: translateY(-3px);
}

.icon {
  width: 32px;
  height: 32px;
}
```

```jsx
function IconButton(props) {
  return (
    <button className="btn">
      <i className="icon">
        {props.icon}
      </i>
      {props.children}
    </button>
  )
}

// import styled from 'styled-components';

// const another = styled.button`
//   color: tomato;
//   font-weight: bold;
//   padding: 20px;

//   &:hover, &:focus {
//     transform: translateY(-3px);
//   }

//   i {
//     width: 32px;
//     height: 32px;
//   }
// `;

// function IconButton(props) {
//   return (
//     <another>
//       <i>
//         {props.icon}
//       </i>
//       {props.children}
//     </another>
//   )
// }
```

---

### Exercise 3


```css
.paragraph {
  font-size: 18px;
  line-height: 1.4;
  color: #333;
}

.paragraph strong {
  color: red;
}

.paragraph em {
  color: #666;
}
```

```jsx
function FantasticStory(props) {
  return (
    <div>
      <p className="paragraph">
        The <strong>quick</strong> red fox jumped over
        the <em>lazy</em> dog.
      </p>
      <p>
        The end.
      </p>
    </div>
  )
}
```

---

### Global styles

```jsx
import {createGlobalStyles} from 'styled-components';

const GlobalStyles = createGlobalStyles`
  * {
    font-family: 'Lato', sans-serif;
  }

  p {
    line-height: 1.3;
  }
`

// Used as a component
<GlobalStyles />
```

---

[Next lecture: React Router](../lecture-4-react-router)