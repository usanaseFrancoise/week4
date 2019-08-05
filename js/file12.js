
// $(document).ready(function() {
//     $("#btns").click(function() {
//         $("#orderz").show();
//        $("#btns").show ();  
           
//     });



document.getElementById("Delivery").addEventListener("click", function () { 
    prompt("enter your addresses");
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
  
      var typeP = $("select#sel1").val();
      var sizeP = $("select#sel2").val();
      var crustP= $("select#sel3").val();
      var toppingP =$("select#sel4").val();
      var numberP = $("input#sel5").val();
     
      var newPizzaA = new Pizza(typeP,sizeP,crustP,toppingP,numberP,total);
  console.log(newPizzaA);
  
    
    
      $(".btn").last().click(function() {
        $("#show").show();
        $("#show h2").text(newPizzaA.type);
        $(".type").text(newPizzaA.type);
        $(".size").text(newPizzaA.size);
        $(".crust").text(newPizzaA.crust);
        $(".topping").text(newPizzaA.topping);
        $(".numbers").text(newPizzaA.numbers);
        $(".totalPrice").text(newPizzaA.totalPrice);
        $("ul#addresses").text("");
       
      });
    });
      $(".btn").click(function() {
        var typeD= $("select#aa").val();
      var siz = $("select#bb").val();
      var cruste = $("select#cc").val();
      var toppingd =$("select#dd").val();
      var number = $("input#ee").val();
     
       var price, totalPrice;
       switch (typeD) {
           case type = "PEPERONI pizza":
               switch (siz) {
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
               case typeD = "PIZERIA pizza":
               switch (siz) {
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
            case typeD= "CHICKEN pizza":
            switch (siz) {
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
         case typeD = "DEEP FISH pizza":
         switch (siz) {
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
