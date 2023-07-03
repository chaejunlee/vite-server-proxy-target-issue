import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { errorFetch } from './error-fetch.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Fragile <code>server.proxy</code> > <code>target</code></h1>
    <div class="card" style="display: flex; flex-direction: column;">
      <button id="undefined" type="button"></button>
      <button id="null" type="button"></button>
      <button id="empty" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

errorFetch(document.querySelector('#undefined'), 'undefined');
errorFetch(document.querySelector('#null'), 'null');
errorFetch(document.querySelector('#empty'), 'empty');
