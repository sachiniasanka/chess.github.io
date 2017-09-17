var colors=['blue','red','','white','green','orange','yellow'];
var i=0;
function changeColor() {
    $("#tropic").css("color",colors[i]);
    i++;
    if(i==colors.length){
        i=0;
    }
}
setInterval(changeColor,500);

///////////////////////////////////////////////////////////////////////
var letters = ['A','B','C','D','E','F','G','H'];
var numbers = [1,2,3,4,5,6,7,8];

var currentPosition;
var squares;
var chesspieces;

var pondCount;
var countArray = new Array(9);

$(document).ready(function () {
    squares = $('.squre');
    chesspieces = $('.img');
    pondCount = 0;
    for(var i = 0;i<countArray.length;i++){
        countArray[i] = 0;
    }
});
//////////////////////////////////////////////////////////////////
$('.img').on("click",function (eventData) {
    currentPosition = $(this);
    console.log(currentPosition);

    if(!(currentPosition.hasClass('selectClick')) && currentPosition.hasClass('poneB')) {
        pondCount = 0;
        pathofBlackpond(currentPosition);
    }
    if(!(currentPosition.hasClass('selectClick')) && currentPosition.hasClass('poneW')) {
        pondCount = 0;
        pathofWhitepond(currentPosition);
    }
});

//////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
function pathofBlackpond(eventData) {
    currentPossition=eventData;
    squares.removeClass('selectPath');
    chesspieces.removeClass('selectClick');
    squares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        tempId=letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('img'))){
            $("#"+tempId).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('img'))){
        $("#"+tempId).addClass('selectPath');
        currentPossition.addClass('selectClick');
        currentPossition.removeClass('selectPath');

    }
    if ($("#"+tempId1).children().hasClass('groupWhite')){
        $("#"+tempId1).addClass('cross');
        currentPossition.addClass('selectClick');
        currentPossition.removeClass('selectPath');
    }
    if ($("#"+tempId2).children().hasClass('groupWhite')){
        $("#"+tempId2).addClass('cross');
        currentPossition.addClass('selectClick');
        currentPossition.removeClass('selectPath');
    }
}
/////////////////////////////////////////////////////////////////////
function pathofWhitepond(eventData) {
    currentPossition=eventData;
    squares.removeClass('selectPath');
    chesspieces.removeClass('selectClick');
    var currentId=currentPossition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    var tempId3=letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    switch(currentPossition.attr('id')){
        case "whitePone1" :countArray[0]++; break;
        case "whitePone2" :countArray[1]++; break;
        case "whitePone3" :countArray[2]++; break;
        case "whitePone4" :countArray[3]++; break;
        case "whitePone5" :countArray[4]++; break;
        case "whitePone6" :countArray[5]++; break;
        case "whitePone7" :countArray[6]++; break;
        case "whitePone8" :countArray[7]++; break;
    }

    if (countArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if (!($("#"+tempId2).children().hasClass('img')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
    if (countArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId2).addClass('selectPath');
            currentPossition.addClass('selectClick');
        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('img'))){
            $("#"+tempId1).addClass('selectPath');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');

        }
        if ($("#"+tempId3).children().hasClass('groupBlack')){
            $("#"+tempId3).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
        if ($("#"+tempId4).children().hasClass('groupBlack')){
            $("#"+tempId4).addClass('cross');
            currentPossition.addClass('selectClick');
            currentPossition.removeClass('selectPath');
        }
    }
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
$(".squre").on("click",function (eventData) {
    var currentSquar = $(this);
    var currentpiece = $(".img.selectClick");
    if ($(currentSquar).hasClass('selectPath')) {
        currentSquar.append(currentpiece);
        chesspieces.removeClass('selectClick');

        squares.removeClass('selectPath');
        //suares.removeClass('crosspiece');
    }
    if ($(currentSquar).hasClass('cross')) {
        var y=$(currentpiece).clone();
        $(currentpiece).remove();

        $(currentSquar).children().remove();
        currentSquar.append(currentpiece);
        squares.removeClass('selectPath');
        chesspieces.removeClass('selectClick');
        squares.removeClass('cross');
    }
});
/////////////////////////////////////////////////////////////////////

var IdW=$("#scoreW").children().first().attr('id');
var IdB=$("#scoreB").children().first().attr('id');

$(".squre").mousedown(function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".img.selectClick");
    if ($(currentSquar).hasClass('selectPath')) {
        currentSquar.append(currentpiece);
        chesspieces.removeClass('selectClick');
        squares.removeClass('selectPath');
        squares.removeClass('cross');
    }
    if ($(currentSquar).hasClass('cross')) {
        var y=$(currentpiece).clone();
        console.log(IdB);
        if((currentpiece.hasClass('groupBlack'))){
            var x=$(currentSquar).children().clone();
            $(currentSquar).children().remove();
            $("#"+IdW).append(x);
            IdW++;
        }else{
            var x=$(currentSquar).children().clone();
            $(currentSquar).children().remove();
            $("#"+IdB).append(x);
            IdB++;
        }
        $(currentSquar).children().remove();
        currentSquar.append(currentpiece);
        squares.removeClass('selectPath');
        chesspieces.removeClass('selectClick');
        squares.removeClass('cross');
    }
});

