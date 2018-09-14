import {initFont} from './lib/math.js';
import '../css/style.scss'

initFont();
$.ajax({
  url: '/api/pintu/getlotuserlist',
  type: 'post',
  data: {
    
  },
  success: function(res) {
    console.log(res)
  }
})