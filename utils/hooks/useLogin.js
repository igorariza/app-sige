import React, { Fragment, useState, useEffect }from 'react';
import Store from '../../store'

const loginUser = () => {
const [userlogin, setUser] = useState()

Store.load({
  key: 'userLogin',
  autoSync: true,
  syncParams: {
    extraFetchOptions: {
      // blahblah
    },
    someFlag: true
  }
})
.then(ret => {    
  setUser(ret)
})
.catch(err => {
  console.warn(err.message);
  switch (err.name) {
    case 'NotFoundError':
      // TODO;
      break;
    case 'ExpiredError':
      // TODO
      break;
  }
});
return userlogin;
}
export default loginUser;
