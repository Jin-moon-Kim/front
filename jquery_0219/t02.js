'use strict';

// $(function() {

// });

$(()=>{
  document.getElementById('product').value;
  demo.innerHTML = product;

  // $('#calcBtn').click(function() {});
  $('#calcBtn').click(()=>{
    if(product.trim()=='') {
      alert('enter product name');
      document.getElementById('product').focus();
    }else if(price.trim()=='' || isNaN(product)) {
      alert('enter product price');
      document.getElementById('price').focus();
    }else if(n.trim()=='' || isNaN(product)) {
      alert('enter product amount');
      document.getElementById('n').focus();
    }else {
      let res = `합계 : ${price * n}`;
      $('#demo').html(numberWithCommas(res));
    };
  });
  
      function numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
  
  $('#calcBtn').click(()=>{
    if(product.trim()=='' || isNaN(product)) {};
  });
});