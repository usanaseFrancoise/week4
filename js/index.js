$(document).ready(function() {
    $("#ordern").click(function() {
        $("#form").show();
        $("#ordern").show ();  
          
    });
});
$(document).ready(function() {
$(".submit").click(function() {
   
    $(".Showbill").show();
    $(".submit").show();
    
    
});   
});
$(document).ready(function() {
    $("#add").click(function() {
    $("#checked1").append('<div id="checked1">' +
            '<h2>pizza Form</h2>' +
            '<div class="label">'+
                'Name'+
            '</div>'+
                        '<input id="id-name" type="text" size="50">'+

                    '<div class="label">'+
                        'Address'+
                   ' </div>'+
                    '<input id="id-address"  type="text" size="50">'+
                           
                           '<div class="label">'+
                                'Phone'+
                           ' </div>'+
                   '<input id="id-phone" type="text" size="10">'+
                           
                          ' <div id="choose">'+
                            'choose'+
                          ' </div>'+
                           '<select>'+
                            '<option value="choose Pizza">select Pizza</option>'+
                            '<option value="PEPERONI pizza">PEPERONI pizza</option>'+
                            '<option value="PIZERIA pizza">PIZERIA pizza</option>'+
                            '<option value="CHICKEN pizza">CHICKEN pizza</option>'+
                            '<option value="DEEP FISH pizza">DEEP FISH pizza</option>'+
                          '</select>'+
                          '<div id="size">'+
                            'Pizza size'+
                           '</div>'+
                           '<select>'+
                            '<option value=" Pizza size">  Select Size</option>'+
                            '<option value="SMALL"> SMALL             </option>'+
                            '<option value="MEDIUM">MEDIUM</option>'+
                            '<option value="BIG ">BIG </option>'+
                          '</select>'+
                        
                    '<div class="group">'+
                        '<div class="title">'+
                            'Crust'+
                        '</div>'+
                        '<div class="label">'+
                           ' <input id="id-crust"  name="crust" type="radio" value="Thin">'+
                                   
                                    'Thin'+                                 
                        '</div>'+
                        '<div class="label">'+
                                '<input id="id-crust" name="crust" type="radio" value="Classic">'+
                                        'Classic'+
                            '</div>'+
                            '<div class="label">'+
                                   ' <input id="id-crust" name="crust" type="radio" value="Deep Dish">'+
                                           ' Deep Dish'+
                                '</div>'+
                    '</div>'+
                    '<div class="group">'+
                        '<div class="title">'+
                            'Toppings'+
                       ' </div>'+
                        '<div class="label">'+
                                    '<input  name="topping" type="checkbox" value="Sausage">'+
                                     'Sausage'+
                        '</div>'+
                        '<div class="label">'+
                                '<input name="topping" type="checkbox" value="Mushrooms">'+
                                        ' Mushrooms'+
                            '</div>'+
                           '<div class="label">'+
                                   ' <input name="topping" type="checkbox" value="Onions">'+
                                             'Onions'+
                                '</div>'+
                                '<div class="label">'+
                                        '<input name="topping" type="checkbox" value="Green peppers">'+
                                                 'Gree peppers'+
                                   ' </div>'+
                                   ' <div class="label">'+
                                            '<input name="topping" type="checkbox" value="Black olives">'+
                                                     'Black olives'+
                                        '</div>'+
                                        '<div class="label">'+
                                                '<input name="topping" type="checkbox" value="Extra chees">'+
                                                        ' Extra chees'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="label">'+
                                            'Pizza Number'+
                                        '</div>'+
                                        '<input id="id-number" type="number" min="1"class="form-control">'+
                                  '</div>');
    });
});
    function Pizza_Orders(one,two,three,forth){
        this.types=one;
        this.size=two;
        this.toppings=three;
        this.quantity=forth;
        this.crust=fifth
    }
    Pizza_Orders.prototype.fullOrder=function(){
        return this.types+" "+this.size+" "+this.toppings+ " "+this.quantity+" "+this.crust+" "
    }

$(document).ready(function(){
    $("form#form").submit(function(event){

      event.preventDefault();
      var inputtedtypes=$("select#c2").val();
      var inputtedsize=$("select#c1").val();
      var inputtedtoppings=$("select#group").val();
      var inputtedquantity=$("select#add").val();
      var inputtedcrust=$("select#group").val();
      
      var newPizza_Order=new Pizza_Orders(inputtedtypes,inputtedsize,inputtedtoppings,inputtedquantity,inputtedcrust);
      console.log(newPizza_Order);
})
});
