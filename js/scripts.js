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
    alert(modifiedArray);

    event.preventDefault();
  });
});

/* let modifiedArray = array[1]
modifiedArray.push(array.slice(0,3)); */