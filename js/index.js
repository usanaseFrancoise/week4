// $(document).ready(function() {
//     $("#ordern").click(function() {
//         $("#form").show();
//         $("#ordern").show ();  
          
//     });
// });
// $(document).ready(function() {
// $(".submit").click(function() {
   
//     $(".Showbill").show();
//     $(".submit").show();
    
    
// });   
// });
// $(document).ready(function() {
//     $("#add").click(function() {
//     $("#checked1").append('<div id="checked1">' +
//             '<h2>pizza Form</h2>' +
//             '<div class="label">'+
//                 'Name'+
//             '</div>'+
//                         '<input id="id-name" type="text" size="50">'+

//                     '<div class="label">'+
//                         'Address'+
//                    ' </div>'+
//                     '<input id="id-address"  type="text" size="50">'+
                           
//                            '<div class="label">'+
//                                 'Phone'+
//                            ' </div>'+
//                    '<input id="id-phone" type="text" size="10">'+
                           
//                           ' <div id="choose">'+
//                             'choose'+
//                           ' </div>'+
//                            '<select>'+
//                             '<option value="choose Pizza">select Pizza</option>'+
//                             '<option value="PEPERONI pizza">PEPERONI pizza</option>'+
//                             '<option value="PIZERIA pizza">PIZERIA pizza</option>'+
//                             '<option value="CHICKEN pizza">CHICKEN pizza</option>'+
//                             '<option value="DEEP FISH pizza">DEEP FISH pizza</option>'+
//                           '</select>'+
//                           '<div id="size">'+
//                             'Pizza size'+
//                            '</div>'+
//                            '<select>'+
//                             '<option value=" Pizza size">  Select Size</option>'+
//                             '<option value="SMALL"> SMALL             </option>'+
//                             '<option value="MEDIUM">MEDIUM</option>'+
//                             '<option value="BIG ">BIG </option>'+
//                           '</select>'+
                        
//                     '<div class="group">'+
//                         '<div class="title">'+
//                             'Crust'+
//                         '</div>'+
//                         '<div class="label">'+
//                            ' <input id="id-crust "  name="crust " type="radio" value="Thin">'+
                                   
//                                     'Thin'+                                 
//                         '</div>'+
//                         '<div class="label">'+
//                                 '<input id="id-crust " name="crust " type="radio" value="Classic">'+
//                                         'Classic'+
//                             '</div>'+
//                             '<div class="label">'+
//                                    ' <input id="id-crust " name="crust " type="radio" value="Deep Dish">'+
//                                            ' Deep Dish'+
//                                 '</div>'+
//                     '</div>'+
//                     '<div class="group">'+
//                         '<div class="title">'+
//                             'Toppings'+
//                        ' </div>'+
//                         '<div class="label">'+
//                                     '<input  name="topping" type="checkbox" value="Sausage">'+
//                                      'Sausage'+
//                         '</div>'+
//                         '<div class="label">'+
//                                 '<input name="topping" type="checkbox" value="Mushrooms">'+
//                                         ' Mushrooms'+
//                             '</div>'+
//                            '<div class="label">'+
//                                    ' <input name="topping" type="checkbox" value="Onions">'+
//                                              'Onions'+
//                                 '</div>'+
//                                 '<div class="label">'+
//                                         '<input name="topping" type="checkbox" value="Green peppers">'+
//                                                  'Gree peppers'+
//                                    ' </div>'+
//                                    ' <div class="label">'+
//                                             '<input name="topping" type="checkbox" value="Black olives">'+
//                                                      'Black olives'+
//                                         '</div>'+
//                                         '<div class="label">'+
//                                                 '<input name="topping" type="checkbox" value="Extra chees">'+
//                                                         ' Extra chees'+
//                                             '</div>'+
//                                         '</div>'+
//                                         '<div class="label">'+
//                                             'Pizza Number'+
//                                         '</div>'+
//                                         '<input id="id-number" type="number" min="1"class="form-control">'+
//                                   '</div>');
//     });
// });


// //dfghjkl;//
//     function Pizza_Orders(one,two,three,forth,fifth){
//         this.types=one;
//         this.size=two;
//         this.toppings=three;
//         this.crust=forth;
//         this.names =fifth;
//     }
//     Pizza_Orders.prototype.fullOrder=function(){
//         return this.types+" "+this.size+" "+this.toppings+ " "+this.crust+" "+this.names +" ";
//     }

// $(document).ready(function(){
//     $("form#form").submit(function(event){

//       event.preventDefault();
//       var inputtedsize=$("select#c2").val();
//       var inputtedtypes=$("select#c1").val();
//       var inputtedtoppings=$("radio#id-topping").val();
//       var inputtedcrust=$("radio#id-crust").val();
//       var inputtednames=$("input#id-name").val();
      
//       var newPizza_Order=new Pizza_Orders(inputtedtypes,inputtedsize,inputtedtoppings,inputtedcrust,inputtednames);
//       console.log(newPizza_Order);
//       $("ul#your").append("<li><span class='contact'>"+newPizza_Order.fullOrder() + "</span></li>");
//       $(".contact").last().click(function(){
//      $(".Showbill").show();
//      $(".Showbill h2").text(newPizza_Order.fullOrder());
//      $(".Pizza size").text(newPizza_Order.size);
//      $(".choose").text(newPizza_Order.types);
//      $(".Toppings").text(newPizza_Order.toppings);
//      $(".Crust").text(newPizza_Order.Crust);
//      $(".name").text(newPizza_Order.names);
    
//       });
      
// });
// $("select#c2").val(" ");
// $("select#c1").val(" ");
// $("input#id-topping").val(" ");
// $("input#id-crust ").val(" ");
// $("input#id_name").val(" ");
// });
$(document).ready(function() {
    $("#add-address").click(function() {
      $("#new-pizzas").append('<div class="form-group">'+
                              '<label for="type-pizza"><strong>Type of pizza :     </strong></label>'+
                      '<select class="form-control" id="type" value="type" >'+
                          '<option  value="choose Pizza">select Pizza</option>'+
                          '<option  id="PEPERONI pizza">PEPERONI pizza</option>'+
                          '<option  id="PIZERIA pizza">PIZERIA pizza</option>'+
                          '<option  id="CHICKEN pizza">CHICKEN pizza</option>'+
                          '<option  id="DEEP FISH pizza">DEEP FISH pizza</option>'+
                       '</select>'+
                      '</div>'+
                '<div class="form-group">'+
                      
                             ' <label for="size"><strong>Pizza Size:      </strong></label>'+
                      '<select class="form-control" id="new-size" value="size">'+
                          '<option  value=" Pizza Size">select Pizza size</option>'+
                          '<option  id="Small" >Small</option>'+
                          '<option  id="Medium" >Medium</option>'+
                          '<option  id="Large">Large</option>'+
                               
                       '</select>'+
              ' </div>'+
               
          '<div class="new-pizza">' +
                                
                                   '<div class="form-group">' +
    
         '<label for="new-number"><strong>Number of Pizza:</strong></label>' +
 ' <input type="number" min=1 class="form-control"id="numbers" >' +
                            
                                   '</div>' +
                                   '<div class="form-group">' +
                                  
                      '<label for="new-crust"><strong>Favorite Crust:</strong></label>' +
'<select class="form-control new-number" id="number" value="number" >' +
                               '<option value="Thin" id="crust">Thin Crust</option>' +
                              '<option value="Thick" id="crust">Thick Crust</option>' +
                               '<option value="FatBread" id="crust">FatBread Crust</option>' +
                               '<option value="Custom" id="crust">Custom Crust</option>' +
                               
                                    
                            '</select>' +
                                     '</div>' +
                                   
                            
                                 '</div>'+
                                 '<div class="form-group">'+
               '<label for="new-toppings"><strong>Favorite Toppings:</strong></label>'+
        '<select class="form-control new-toppings" id="new-toppings"  >'+
            '<option  value=" Pizzas  Toppings">Pizzas  Toppings</option>'+
            '<option  id="topping">Mushrooms</option>'+
            '<option  id="topping">Onions</option>'+
            '<option  id="topping">Green peppers</option>'+
            '<option  id="topping">Black olives</option>'+
            
                 
         '</select>'+
        '</div>'+
                    '<div class="form-group">'+
                            '<label for="new-location"><strong>your Location:</strong></label>'+
                        '<input id="new-location" class="form-control type="text" placeholder="Enter your Location" >'+
                    '</div>'+
            '</div>'+
    '</div>'+
   
  

      
                  '</form>'+
                  '</div>');
                                 
    });
});
function Pizza_Order(size,tiza,number,favo,local){
    this.sizePizza=size;
    this.typePizza=tiza;
    this.numberPizza=number;
    this.favoritePizza=favo;
    this.locationPizza=local;
    this.orders=[];

}
function Pizza_Orders(size1,tiza1,number1,favo1,local1){
    this.sizePizza1=size1;
    this.typePizza1=tiza1;
    this.numberPizza1=number1;
    this.favoritePizza1=favo1;
    this.locationPizza1=local1;

}

Pizza_Order.prototype.fullOrder=function(){
    return this.sizePizza + " " + this.typePizza + " " +this.numberPizza+ " " + this.favoritePizza + " " +this.locationPizza+" "+this.orders;
}
Pizza_Orders.prototype.fullOrders=function(){
    return this.sizePizza1 + " " + this.typePizza1 + " " +this.numberPizza1+ " " + this.favoritePizza1 + " " +this.locationPizza1;
}
// var ada=new Pizza_Order("small", "Italian", "1", "thin" , " rwanda","topp");
$(document).ready(function(){
    $("form#new-pizz").submit(function(event){
        event.preventDefault();
        var inputtedSizePizza=$("select#new-size").val();
        var inputtedTypePizza=$("select#type").val();
        var inputtedNumberPizza=$("input#numbers").val();
        var inputtedFavoritePizza=$("select#new-crust").val();
        var inputtedFavoritesPizza=$("input#new-Toppings").val();
        var inputtedLocationPizza=$("input#new-location").val();
         )

         var newPizza_Order=new Pizza_Order(inputtedSizePizza,inputtedTypePizza,inputtedNumberPizza,inputtedFavoritePizza,inputtedLocationPizza,inputtedFavoritesPizza,total);
            console.log(newPizza_Order);
        //      $(".new-pizza").each(function(){
        //          var inputtedNumberPizza=$(this).find("select.numbers").val();
        //          var inputtedFavoritePizza=$(this).find("select.new-crust").val();                 
        //          var newPizza =new Pizza_Orders(inputtedNumberPizza,inputtedFavoritePizza);
        // newPizza_Order.addresses.push(newPizza)
        //      });

        // console.log(newPizza);
 $("ul#your").append("<li><span class='contact'>" + newPizza_Order.fullOrder() + "</span></li>");
 $(".contact").last().click(function(){
    $("#show-your-order").show();
    $("#show-your-order h5").text(newPizza_Order.fullOrder());
    $(".pizza-size").text(newPizza_Order.sizePizza);
    $(".pizza-type").text(newPizza_Order.typePizza);
    $(".pizza-number").text(newPizza_Order.numberPizza);
    $(".pizza-favor").text(newPizza_Order.favoritePizza);
    $(".pizza-toppings").text(newPizza_Order.FavoritesPizza);
    $(".pizza-local").text(newPizza_Order.locationPizza);
    $(".totalPrice").text(newPizza_Order.totalPrice);
     $("ul#addresses").text("");
    // $(".pizza-local").text(newPizza_Order.locationPizza);
    // newPizza_Order.addresses.forEach(function(address) {
    //   $("ul#addresses").append("<li>" + address.numberPizza + ", " + address.favoritePizza+ "</li>");
    // });

});
    });
    $("select#new-size").val();
    $("select#type").val();
    $("input#numbers").val();
    $("select#new-crust").val();
    $("select#new-Toppings").val();
    $("input#new-location").val();
});
$(document).ready(function() {
       $("#ordern").click(function() {
           $("#new-pizz").show();
          $("#ordern").show ();  
              
       });
 $(".btn").click(function(){
     var sized=$("select#new-size").val();
     var typep=$(" select#type").val();
     var num=$("input#numbers").val();
     var crusts=$("select#new-crust").val();
     var topp=$("select#new-Toppings").val();
     var loca=$("input#new-location").val();

switch(typep){
    case type="PEPERONI pizza":
    switch(sized){
        case size="Small":
        price=5500;
        if(crusts==="Thin Crust"){
            total=(price*num)+1000;
        } else if(crusts==="Thick Crust"){
            total=(price*numr)+1500;
        }
        else if(crusts==="FatBread Crust"){
            total=(price*num)+2500;
        }
        else {
            total=(price*num)+4500;
        }
        break;
    } 
}
console.log(total);
});
});
// $("form#new-pizz").submit(function(event){
//     event.preventDefault();
//     var input
// })

// $("form#new-contact").submit(function(event) {
//     event.preventDefault();

//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);

//     $(".new-address").each(function() {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedCounty = $(this).find("input.new-county").val();
//       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
//       newContact.addresses.push(newAddress)
//     });

//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.fullName());
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
//       });
//     });

//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-county").val("");

//   });
// // });
