$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
$(document).ready(function () {
  const textIngreso = $('#ingreso');
  const btn = $('#rec');


  var request = new XMLHttpRequest();

  request.open('GET', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      const data = JSON.parse(this.responseText);
      /* console.log('Headers:', this.getAllResponseHeaders()); */

      data.forEach(function (array) {
        var message = (array.content);
        console.log(message);

        var userNumber = (array.id);
        var userName = (array.author_name);
        var contador = (array.responses_count);

        $('#container').append(`<div class="card margin-top-3"><br><div class="card-block"><p>${message}</p><p>Por: <span>${userName}</span></p>
        <p>Respuestas: <span id="">${contador}</span></p> </div></div>`);




      });

    };
  }
  request.send();



  btn.click(function llamar() {
    var message = (array.content);
    if (textIngreso.val() = message) {

      var request = new XMLHttpRequest();

      request.open('POST', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');

      request.setRequestHeader('Content-Type', 'application/json');

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          console.log('Body:', this.responseText);
        }
      };

      var body = {
        'author_name': 'Emmanuel',
        'content': 'Vean este nuevo video. Esta Chido',
      };

    } request.send(JSON.stringify(body));

  })
})