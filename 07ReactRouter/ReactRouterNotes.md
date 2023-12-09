# React Router

```
# follow prompts
cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by
npm run dev
```

Must **import** these thing :
```
import {Link, Navlink, Outlet} from "react-router-dom";
```

- **Link:** is used as same as anchor tag `<a></a>` but it take source attribute by _to: ""_.
_example_ 
```
<Link to = "/about" >
<Link/>
```

- **Navlink** also uses _to_  to navigate

_Note:_
1. When you use <Navlink> and need to pass className ?
then className accept a callback function and your classes will be written in ` ` (backticks).


