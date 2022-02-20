import * as $ from 'jquery';

import './styles/app.scss'
import SVG from './assets/favicon.svg'
import Image from './assets/img_point1.png'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <img src="${Image}" alt="Image example" />
  <img src="${SVG}" alt="vite logo" />
`

$('#app').append('<p>Hello jQuery!</p>')
