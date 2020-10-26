$(document).ready(function() {
  $("form#favoriteThings").submit(function() {
    const array = [];
    array.push($("#favFood").val());
    array.push($("#favSeason").val());
    array.push($("#favAnimal").val());
    array.push($("#favSport").val());

    let modifiedArray = [];
    modifiedArray.push(array[1]);
    modifiedArray.push(array[0]);
    modifiedArray.push(array[2]);
   
    event.preventDefault();

    $("#season").append(modifiedArray[0]);
    $("#animal").append(modifiedArray[1]);
    $("#food").append(modifiedArray[2]);

    $("#list").show();
  });
});
