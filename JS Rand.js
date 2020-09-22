var quotes = [
    {
      quote: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
      author: "Hermione Granger"
    },
    {
      quote: "You're a little scary sometimes, you know that? Brilliant ... but scary.", 
      author: "Ron Weasley"
    },
    {
      quote: "Yer a wizard Harry.", 
      author: "Rubeus Hagrid"
    },
    {
      quote: "Dobby is free.", 
      author: "Dobby"
    },
    {
      quote: "I’ll be in my bedroom, making no noise and pretending I’m not there.", 
      author: "Harry Potter"
    },
    {
      quote: "Don’t let the muggles get you down.", 
      author: "Ron Weasley"
    },
    {
      quote: "I solemnly swear I am up to no good.", 
      author: "Harry Potter"
    },
    {
      quote: "Twitchy little ferret, aren’t you, Malfoy?", 
      author: "Hermione Granger"
    },
    {
      quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.", 
      author: "Luna Lovegood."
    },
    {
      quote: "Not my daughter, you bitch!", 
      author: "Molly Weasley"
    },
    {
      quote: "Just because you have the emotional range of a teaspoon doesn't mean we all have.", 
      author: "Hermione Granger"
    },
    {
      quote: "Mischief Managed!", 
      author: "Harry Potter"
    },
    {
      quote: "Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts.", 
      author: "Cornelius Fudge"
    },
    {
      quote: "Honestly, am I the only person who's ever bothered to read 'Hogwarts: A History?'", 
      author: "Hermione Granger"
    },
    {
      quote: "Training for the ballet, Potter?", 
      author: "Draco Malfoy"
    }
  ];
  
  var displayedQuote;
  var currentIdx;
  
  function updateQuote() {
    do{
      var idx = Math.floor(Math.random() * quotes.length);
    }while(currentIdx === idx);
    
    displayedQuote = quotes[idx];
    
    currentIdx = idx;
    $('#quote').html(quotes[idx].quote);
    $('#author').html(quotes[idx].author);
  }
  function shareTweet(){
    window.open("https://twitter.com/intent/tweet")
  }
  $(function(){
    updateQuote();
    $('#quote').html(displayedQuote.quote);
    $('#tweet-quote').click(shareTweet);
    $('#new-quote').click(updateQuote);
  })
  
  