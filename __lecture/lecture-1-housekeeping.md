# 4.2.1 React Ecosystem

---

### 🏠Housekeeping: Keys

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`.
in SomeComponent (at src/index.js:24)
in App (at src/index.js:31)
```

const items = [
  {text: 'Item 1'}
  {text: 'Item '}
]

const Bacon = ({items}) => (
  {items.mapp(item => <li key={`id${item .text.replace(' ', '-')`}}>{item.text}
  <li>)}
  );
)

---

### 🏠Housekeeping: Modules

In the last lecture, we saw **default exports**

```js
function Button(props) {
  ✂️
}

export default Button;
```

```js
import Button from '../Button';
```

---

There are also **named exports**

```js
// authentication-utils.js
export const signUp = () => { ✂️ };
export const logIn = () => { ✂️ };
export const logOut = () => { ✂️ };
```

```js
import { logIn, logOut } from '../../authentication-utils.js';
```

---

### A module can have:

- 0 or 1 _default_ exports,
- any number of _named_ exports, and
- both types of exports.

---

# Exercise

Are the following code snippets correct or incorrect?

Fix them, if incorrect 

---

```js
// src/data.js (IT IS CORRECT!)
const data = { hi: 5 };

export default data;
```

```js
// src/index.js
import theBestData from './data';
```

---

```js
// src/data.js
export const MAGIC_NUMBER = 123;
```

```js
// src/index.js
import {MAGIC_NUMBER} from './data';

//OR MAGIC_NUMBER.MAGIC_NUMBER instead of {}
```

---

```js
// src/data.js
export const users = [];
export const sessions = [];

// const users = [];
// const sessions = [];

const data = { users, sessions };

export default data;
```

```js
// src/index.js
import {data, users} from './data';
//import {users} from './data';

//OR (BETTER)
export const users = [];
export const sessions = [];

import {users} from './data';
import {sessions} from './data';

```

---

```js
// src/data.js
export default const baseball = '⚾️';
//export default '⚾️';


```

```js
// src/index.js
import baseball from './data';
// not baseball cause was called that but cause default can be called whatever when imported
```

---
