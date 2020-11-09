window.onload = function () {

  let crash = false;
  let cheating = false;
  
  
  $('#start').click(reset);
  $('.boundary').mouseover(turnRed);
  $('#end').click(won);
  $('#bounds,h2').mouseover(cheater);

  function cheater() {
    if (cheating) {
      turnRed();
      won();
    }
  }

  function setText() {
    $('#status').text('Click the "S" to begin.');
  }
  function turnRed() {
    $('.boundary').addClass('youlose');
    crash = true;
  }
  function reset() {
    cheating = true;
    crash = false;
    $('#status').css('visibility', 'visible');
    $('#status').text('--------You are on the race!---------');
    $('.boundary').removeClass('youlose');
  }
  function won() {
    if (crash) {
      $('#status').show();
      $('#status').text('You lose! Click "S" to begin again.');
    } else {
      $('#status').show();
      $('#status').text('You win! Click "S" to start over.');
      $('.boundary').removeClass('youlose');
      cheating = false;
    }
  }


};
