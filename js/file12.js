document.getElementById("delivery").addEventListener("click", function () { 
    prompt("enter your address");
    alert("thank you for using our services,your order willbe delivered at your place");
    
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
      var crustC = $("select#cc").val();
      var toppingD =$("select#dd").val();
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
        var typec = $("select#sel1").val();
      var sized = $("select#sel2").val();
      var cruste = $("select#sel3").val();
      var toppingd =$("select#sel4").val();
      var number = $("input#sel5").val();
     
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
