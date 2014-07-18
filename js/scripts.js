
$(document).ready(function() {
  $("form#package-calculation").submit(function(event) {
    event.preventDefault();

    var typeOfService = $("input[name=optionsService]:checked").val();
    var typeOfPackage = $("input[name=optionsPackages]:checked").val();
    var customerPackage = {
      service: typeOfService,
      type: typeOfPackage,
      costCalculation: function() {
        console.log("service: " + this.service + " type: " + this.type);
        var basePrice;
        if (this.type === "envelope") {
            basePrice = 15;
        } else if (this.type === "small") {
            basePrice = 20;
        } else {
            basePrice = 25;
        }
        if (this.service === "nextDay") {
            basePrice = basePrice * 2;
            console.log("next day price is: " + basePrice);
        } else if (this.service === "2-day") {
            basePrice = basePrice * 1.6;
            console.log("2-day price is: " + basePrice);
        } else {
            basePrice = basePrice * 1.2;
            console.log("3-day price is: " + basePrice);
        }
        return basePrice;
      }
    }
    var finalPrice = customerPackage.costCalculation();
    $("#column-two").show();
    $("#final-cost").append("<div id='final-price'>" + "$" + finalPrice + "</div>")
  });
});
