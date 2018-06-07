//Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

    var total = 23;
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").removeClass("active");
    $(".price strong").html("$"+total);

    //Treure white sauce i gluten-free crust de price
//    $('.panel ul li:contains(white)').toggle();
//    $('.panel ul li:contains(gluten)').toggle();


    //Activar i desactivar els botons.
    //Desactivar de sèrie també els botons de salsa i gluten.

    $('.btn-pepperonni').click(function(){
        $('.btn-pepperonni').toggleClass('active');
        $('.pep').toggle();
        $('.panel ul li:contains("pepperonni")').toggle();
        $('.price ul li:contains("pepperonni")').toggle();
        if ($('.btn-pepperonni').hasClass('active')) {
            total++;
            $('.price strong').html('$' + total)
        } 
        else {
            total--;
            $('.price strong').html('$' + total)
        }
    })
    
    $('.btn-mushrooms').click(function(){
        $('.btn-mushrooms').toggleClass('active');
        $('.mushroom').toggle();
        $('.panel ul li:contains(mushroom)').toggle();
        if ($('.btn-mushrooms').hasClass('active')) {
            total++;
            $('.price strong').html('$' + total)
        } 
        else {
            total--;
            $('.price strong').html('$' + total)
        }
    })

    $('.btn-green-peppers').click(function(){
        $('.btn-green-peppers').toggleClass('active');
        $('.green-pepper').toggle();
        $('.panel ul li:contains(green)').toggle();
        if ($('.btn-green-peppers').hasClass('active')) {
            total++;
            $('.price strong').html('$' + total)
        } 
        else {
            total--;
            $('.price strong').html('$' + total)
        }
    })

    $('.btn-sauce').toggleClass('active');
    $('.btn-sauce').click(function(){
        $(".sauce").toggleClass("sauce-white");
        $('.btn-sauce').toggleClass('active');
        $('.panel ul li:contains(white)').toggle();
        if ($('.btn-sauce').hasClass('active')) {
            total += 3;
            $('.price strong').html('$' + total)
        } 
        else {
            total -= 3;
            $('.price strong').html('$' + total)
        }
    })

    $('.btn-crust').toggleClass('active');
    $('.btn-crust').click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        $('.btn-crust').toggleClass('active');
        $('.panel ul li:contains(gluten)').toggle();
        if ($('.btn-crust').hasClass('active')) {
            total += 5;
            $('.price strong').html('$' + total)
        } 
        else {
            total -= 5;
            $('.price strong').html('$' + total)
        }
    })

})