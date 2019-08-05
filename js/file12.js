// $(document).ready(function() {
//     $("#ordern").click(function() {
//         $("#form").show();
//         $("#ordern").show ();  
          
//     });


// $(document).ready(function() {
//     $("#add-address").click(function() {
//       $("#new-pizzas").append('<div class="form-group">'+
//                               '<label for="type-pizza"><strong>Type of pizza :     </strong></label>'+
//                       '<select class="form-control" id="type" value="type" >'+
//                           '<option  value="choose Pizza">select Pizza</option>'+
//                           '<option  id="PEPERONI pizza">PEPERONI pizza</option>'+
//                           '<option  id="PIZERIA pizza">PIZERIA pizza</option>'+
//                           '<option  id="CHICKEN pizza">CHICKEN pizza</option>'+
//                           '<option  id="DEEP FISH pizza">DEEP FISH pizza</option>'+
//                        '</select>'+
//                       '</div>'+
//                 '<div class="form-group">'+
                      
//                              ' <label for="size"><strong>Pizza Size:      </strong></label>'+
//                       '<select class="form-control" id="new-size" value="size">'+
//                           '<option  value=" Pizza Size">select Pizza size</option>'+
//                           '<option  id="Small" >Small</option>'+
//                           '<option  id="Medium" >Medium</option>'+
//                           '<option  id="Large">Large</option>'+
                               
//                        '</select>'+
//               ' </div>'+
               
//           '<div class="new-pizza">' +
                                
//                                    '<div class="form-group">' +
    
//          '<label for="new-number"><strong>Number of Pizza:</strong></label>' +
//  ' <input type="number" min=1 class="form-control"id="numbers" >' +
                            
//                                    '</div>' +
//                                    '<div class="form-group">' +
                                  
//                       '<label for="new-crust"><strong>Favorite Crust:</strong></label>' +
// '<select class="form-control new-number" id="number" value="number" >' +
//                                '<option value="Thin" id="crust">Thin Crust</option>' +
//                               '<option value="Thick" id="crust">Thick Crust</option>' +
//                                '<option value="FatBread" id="crust">FatBread Crust</option>' +
//                                '<option value="Custom" id="crust">Custom Crust</option>' +
                               
                                    
//                             '</select>' +
//                                      '</div>' +
                                   
                            
//                                  '</div>'+
//                                  '<div class="form-group">'+
//                '<label for="new-toppings"><strong>Favorite Toppings:</strong></label>'+
//         '<select class="form-control new-toppings" id="new-toppings"  >'+
//             '<option  value=" Pizzas  Toppings">Pizzas  Toppings</option>'+
//             '<option  id="topping">Mushrooms</option>'+
//             '<option  id="topping">Onions</option>'+
//             '<option  id="topping">Green peppers</option>'+
//             '<option  id="topping">Black olives</option>'+
            
                 
//          '</select>'+
//         '</div>'+
//                     '<div class="form-group">'+
//                             '<label for="new-location"><strong>your Location:</strong></label>'+
//                         '<input id="new-location" class="form-control type="text" placeholder="Enter your Location" >'+
//                     '</div>'+
//             '</div>'+
//     '</div>'+
   
  

      
//                   '</form>'+
//                   '</div>');
                                 
//     });



//




document.getElementById("delivery").addEventListener("click", function () { 
    prompt("enter your address");
    alert("Thank you for being our valued customer. We are grateful for the pleasure of serving you and meeting your printing needs. please stay in touch for your delivery");
    
  })
  function Pizza(type,size,crust,topping,numbers, totalPrice) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping= topping;
    this.numbers=numbers
    this.totalPrice=totalPrice;
    this.orders = [];
  }
  
  Pizza.prototype.fullOrder = function() {
    return this.type+ " " + this.size + " " + this.crust + " " +this.topping+ " "+this. totalPrice;
  }
  
  
$(document).ready(function() {
    
  
   
  
    $("form#orderz").submit(function(event) {
      event.preventDefault();
  
      var typeA = $("select#sel1").val();
      var sizeB = $("select#sel2").val();
      var crustC = $("select#sel3").val();
      var toppingD =$("select#sel4").val();
      var numberz = $("input#sel5").val();
     
      var newPizza = new Pizza(typeA,sizeB,crustC,toppingD,numberz,total);
  console.log(newPizza);
  
    
    
      $(".btn").last().click(function() {
        $("#show").show();
        $("#show h2").text(newPizza.type);
        $(".type").text(newPizza.type);
        $(".size").text(newPizza.size);
        $(".crust").text(newPizza.crust);
        $(".topping").text(newPizza.topping);
        $(".numbers").text(newPizza.numbers);
        $(".totalPrice").text(newPizza.totalPrice);
        $("ul#addresses").text("");
       
      });
    });
      $(".btn").click(function() {
        var typec = $("select#aa").val();
      var sized = $("select#bb").val();
      var cruste = $("select#cc").val();
      var toppingd =$("select#dd").val();
      var number = $("input#ee").val();
     
       var price, totalPrice;
       switch (typec) {
           case type = "PEPERONI pizza":
               switch (sized) {
                   case size = "Small":
                       price = 5500;
                       if (cruste === "Thin Crust") {
                           total = (price * number) +500;
                       } else if (cruste === "Thick Crust") {
                           total = (price * number)+ 1000;
                       } else if (cruste === "Deep Crust") {
                           total = (price * number)+ 2000;
                       }else if (cruste === "Crunchy Crust") {
                         total = (price * number)+ 2500; 
                       }else {
                           total = (price * number) + 3500;
                       }
                       break;
                   case size = "Medium":
                       price = 5500;
                       if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thick Crust") {
                        total = (price * number)+ 1500;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2000;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 2500; 
                    }else {
                        total = (price * number) + 4000;
                    }
                     break;
                   case size = "Large":
                       price = 5500;
                       if (cruste === "Thin Crust") {
                        total = (price * number) +2000;
                    } else if (cruste === "Thin Crust") {
                        total = (price * number)+ 3000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 4000;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 5000; 
                    }else {
                        total = (price * number) + 6000;
                    }
                    break;
               }
               break;
               case type = "PIZERIA pizza":
               switch (sized) {
                case size = "Small":
                    price = 6500;
                    if (cruste === "Thin Crust") {
                        total = (price * number) +500;
                    } else if (cruste === "Thick Crust") {
                        total = (price * number)+ 1500;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2000;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 2500; 
                    }else {
                        total = (price * number) + 2500;
                    }
                    break;
                case size = "Medium":
                    price = 6500;
                    if (cruste === "Thin Crust") {
                        total = (price * number) +1000;
                    } else if (cruste === "Thick Crust") {
                        total = (price * number)+ 1500;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 2000;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 2500; 
                    }else {
                        total = (price * number) + 3000;
                    }
                    break;
                 
                case size = "Large":
                    price = 6500;
                    if (cruste === "Thin Crust") {
                        total = (price * number) +2000;
                    } else if (cruste === "Thick Crust") {
                        total = (price * number)+ 3000;
                    } else if (cruste === "Deep Crust") {
                        total = (price * number)+ 4000;
                    }else if (cruste === "Crunchy Crust") {
                      total = (price * number)+ 5000; 
                    }else {
                        total = (price * number) + 6000;
                    }
                    break;
            }
            break;
            case type = "CHICKEN pizza":
            switch (sized) {
             case size = "Small":
                 price = 8500;
                 if (cruste === "Thin Crust") {
                    total = (price * number) +1000;
                } else if (cruste === "Thick Crust") {
                    total = (price * number)+ 1500;
                } else if (cruste === "Deep Crust") {
                    total = (price * number)+ 2000;
                }else if (cruste === "Crunchy Crust") {
                  total = (price * number)+ 3000; 
                }else {
                    total = (price * number) + 3500;
                }
                break;
             case size = "Medium":
                 price = 8500;
                 if (cruste === "Thin Crust") {
                    total = (price * number) +1500;
                } else if (cruste === "Thin Crust") {
                    total = (price * number)+ 2000;
                } else if (cruste === "Deep Crust") {
                    total = (price * number)+ 2000;
                }else if (cruste === "Crunchy Crust") {
                  total = (price * number)+ 2500; 
                }else {
                    total = (price * number) + 4500;
                }
                break;
             case size = "Large":
                 price = 85000;
                 if (cruste === "Thin Crust") {
                    total = (price * number) +2000;
                } else if (cruste === "Thick Crust") {
                    total = (price * number)+ 3000;
                } else if (cruste === "Deep Crust") {
                    total = (price * number)+ 4000;
                }else if (cruste === "Crunchy Crust") {
                  total = (price * number)+ 5000; 
                }else {
                    total = (price * number) + 6000;
                }
                break;
         }
         break;
         case type = "DEEP FISH pizza":
         switch (sized) {
          case size = "Small":
              price = 7500;
              if (cruste === "Thin Crust") {
                total = (price * number) +500;
            } else if (cruste === "Thick Crust") {
                total = (price * number)+ 1000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2000;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 2500; 
            }else {
                total = (price * number) + 3000;
            }
            break;
          case size = "Medium":
              price = 7500;
              if (cruste === "Thin Crust") {
                total = (price * number) +1000;
            } else if (cruste === "Thick Crust") {
                total = (price * number)+ 1500;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 2500;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 3500; 
            }else {
                total = (price * number) + 5500;
            }
            break;
          case size = "Large":
              price = 7500;
              if (cruste === "Thin Crust") {
                total = (price * number) +2000;
            } else if (cruste === "Thin Crust") {
                total = (price * number)+ 3000;
            } else if (cruste === "Deep Crust") {
                total = (price * number)+ 4000;
            }else if (cruste === "Crunchy Crust") {
              total = (price * number)+ 5000; 
            }else {
                total = (price * number) + 6000;
            }
            break;
      }
      break;
    
                }
             console.log(total);
            })
      
  
    
    
  });
