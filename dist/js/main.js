// Add scroll ao body
$('body').scrollspy( {target: '.navbar'} )

// Add efeito click em todos os links
$('#navbar-responsive a').on('click', function(event) {
  if(this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    // Usando jquery para amimação
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      window.location.hash = hash
    })
  }
});