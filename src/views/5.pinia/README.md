# pinia

## 修改 pinia 数据

### 第一种：直接修改

```js
import { useStore } from "pinia";

const store = useStore();

store.count = 1;
```

### 第二种：通过$patch

```js
import { useStore } from "pinia";

const store = useStore();

store.$patch({ count: 1 });
```

### 第三种：通过 action/方法 修改

```js
import { useStore } from "pinia";

const store = useStore();

store.increment();
```
