var beatTheOdds = function() {
    $('#monitorscreen').html(`
    <br><br><br>
    <div class='col-md-12 beat'>
    <center>
        <img src='assets/images/beattheodds.gif' id='beatgif'>
    </center>
    </div>
    <div class='col-md-12 beat'>
        <div class='card-body portcard'>
        <h4 class='card-title'>Beat The Odds</h4>
        <p class='card-text'>Beat the Odds was a project designed to take historic NFL games, condense them down into a two minute window, and show the game graphically. The user is then able to place a bet on the teams displayed, with a payout decided by score differential.</p>
        <a href='https://jaykrauss.github.io/BeatTheOdds/' class='btn btn-primary'>Check it out!</a>
        </div>
    </div>
    `);
}

var simpsonsTrivia = function() {
    $('#monitorscreen').html(`
    <br><br><br>
    <div class='col-md-12 simpsons'>
    <center>
    <img src='assets/images/simpsonstrivia.gif' id='simpsonsgif'>
    </center>
  </div>
  <div class='col-md-12 simpsons'>
    <div class='card-body portcard'>
      <h4 class='card-title'>Simpsons Trivia</h4>
      <p class='card-text'>For the Simpsons fan that has been everywhere else, we have a Simpsons trivia game. Users progress through 20 questions of varying difficulty, then are given a grade (represented by 8 classic characters) based on their score.</p>
      <a href='https://jaykrauss.github.io/TriviaGame/' class='btn btn-primary'>Check it out!</a>
   </div>
  </div>
  `);
}

var gifSplosion = function(){
    $('#monitorscreen').html(`
    <br><br><br>
    <div class='col-md-12 gify'>
    <center>
    <img src='assets/images/gify.png' id='gify'>
    </center>
  </div>
  <div class='col-md-12 gify'>
    <div class='card-body portcard'>
      <h4 class='card-title'>GIFSPLOSION</h4>
      <p class='card-text'>A simple gify-API call to generate gif images for a given show. Users are able to find their favorite shows in gif form!</p>
      <a href='https://jaykrauss.github.io/APIgify/' class='btn btn-primary'>Check it out!</a>
    </div>
  </div>
  `);
}

var home = function(){
    $('#monitorscreen').html(`
    
    `);
}

var basicInfo = function(){
  $('#monitorscreen').html(`
    <div class='card-body'>
    <center>
      <h4 class='card-title'>Basic Information</h4>
    </center>
      <p class='card-text'>A student and lover of learning, I have been transitioning my life drastically in recent months. From a tech manager to a mechanic and service manager, I have worn many hats, most recently the hat of web developer. Having been a part of a rigorous coding bootcamp at University of Richmond, I have learned many new things, and acquired many new skills.</p>
      <p class='card-text'>I have always been taught that in this life there are but a few definites, not including death or taxes: You are never done learning, if you aren't early you're late, and if you aren't the hardest working person in the room, you aren't working hard enough.</p>
      <p class='card-text'>As a budding developer, I am always looking for ways to improve and to learn, to build my growing list of skills.</p>
  `);
}

var workExperience = function(){
  $('#monitorscreen').html(`
  <center>
    <h2>Experience</h2>
  </center>
<br>
<div class='row'>

  <div class='card-body col-md-4'>
  <h4 class='card-title'>Rivers West Design</h4>
  <p class='card-text'>Founder, Developer<br>
  Dates Employed: Sep 2017 – Present <br>
  <a href='http://www.riverswestdesign.com'>Rivers West Design</a>
  </p>
  </div>

  <div class='card-body col-md-4'>
  <h4 class='card-title'>My.Com</h4>
  </center>
  <p class='card-text'>Community Contributor<br>
  Dates Employed: Aug 2017 – Present <br>
  <a href='http://www.my.com'>My.Com</a>
  </p>
  </div>

  <div class='card-body col-md-4'>
  <h4 class='card-title'>AutoZone</h4>
  </center>
  <p class='card-text'>Commercial Sales Manager<br>
  Dates Employed: Mar 2017 – Present <br>
  <a href='http://www.autozone.com'>AutoZone</a>
  </p>
  </div>

</div>
<br><br>

<div class='row'>
  <div class='card-body col-md-4'>
  <h4 class='card-title'>Firestone</h4>
  </center>
  <p class='card-text'>Service Manager<br>
  Dates Employed: Dec 2014 – Mar 2017 <br>
  <a href='http://www.firestone.com'>Firestone</a>
  </p>
  </div>

  <div class='card-body col-md-4'>
  <h4 class='card-title'>MarketSource</h4>
  </center>
  <p class='card-text'>Sales Manager<br>
  Dates Employed: Dec 2012 – Dec 2014 <br>
  <a href='http://www.marketsource.com'>MarketSource</a>
  </p>
  </div>

  <div class='card-body col-md-4'>
  <h4 class='card-title'>Sprint</h4>
  </center>
  <p class='card-text'>Store Manager<br>
  Dates Employed: Dec 2011 – Jul 2012 <br>
  <a href='http://www.sprint.com'>Sprint</a>
  </p>
  </div>
</div>
<br>
<center>
<p>Find more experience information on my LinkedIn!</p>
</center>
  `);
}

var awards = function(){
  $('#monitorscreen').html(`
  <center>
    <h2>Awards and Proud Moments</h2>
    <p>(In no particular order)</p>
  </center>

    <div class='row'>

    <div class='card-body col-md-4'>
    <h4 class='card-title'>Firestone Top 10</h4>
    </center>
    <p class='card-text'>
      As a first-year service manager, we ended the fiscal year of 2015 at number 10 in the company of 2654.
    </p>
    </div>

    <div class='card-body col-md-4'>
    <h4 class='card-title'>Twitch Afflilate Acceptance</h4>
    </center>
    <p class='card-text'>
      Achieved Affiliate status with Twitch within the first two months of streaming.
    </p>
    </div>

    <div class='card-body col-md-4'>
    <h4 class='card-title'>Valley Forge Military Academy Graduation</h4>
    </center>
    <p class='card-text'>
    Having successfully completed the academic and phsyical requirements of Valley Forge, I received my diploma and accolade. 
    </p>
    </div>
    </div>
    <br>
    <div class='row'>

    <div class='card-body col-md-4'>
    <h4 class='card-title'>Released First Game</h4>
    </center>
    <p class='card-text'>
    Working with a small team of three, we designed, created, and published our first mobile game under Rivers West Design.
    </p>
    </div>

    <div class='card-body col-md-4'>
    <h4 class='card-title'>First Best in Show</h4>
    </center>
    <p class='card-text'>
    Having completed full restoration on my 1973 Mustang, it was voted Best in Show in our first major car show.
    </p>
    </div>

    <div class='card-body col-md-4'>
    <h4 class='card-title'>Coding Bootcamp</h4>
    </center>
    <p class='card-text'>
    Going all-in, adapted for a total career change, attended a coding bootcamp and became certified as a Full Stack Web Developer.
    </p>
    </div>
  </div>
    <br>
    <center>
      <p>Find more experience information on my LinkedIn!</p>
    </center> 
  `);
}