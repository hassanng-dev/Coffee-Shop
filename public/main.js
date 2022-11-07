
var trash = document.getElementsByClassName("fa-trash-o");
var check = document.getElementsByClassName("fa-check");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const size = this.parentNode.parentNode.childNodes[3].innerText
        const coffee = this.parentNode.parentNode.childNodes[5].innerText
        const temp = this.parentNode.parentNode.childNodes[7].innerText
        const sugar = this.parentNode.parentNode.childNodes[9].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'size': size,
            'coffee': coffee,
            'temp': temp,
            'sugar': sugar

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(check).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const size = this.parentNode.parentNode.childNodes[3].innerText
    const coffee = this.parentNode.parentNode.childNodes[5].innerText
    const temp = this.parentNode.parentNode.childNodes[7].innerText
    const sugar = this.parentNode.parentNode.childNodes[9].innerText
    const checkIcon = this.dataset.checkbox === 'true'
    fetch('check', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'size': size,
        'coffee': coffee,
        'temp': temp,
        'sugar': sugar,
        'check' : checkIcon

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
