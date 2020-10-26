$(document).ready(function() {
  $("form#favoriteThings").submit(function() {
    let array = [];
    array.push($("#favFood").val());
    array.push($("#favSeason").val());
    array.push($("#favAnimal").val());
    array.push($("#favSport").val());
    alert(array)
  });
});

