document.getElementById("check").onclick=function (){
    onSubmit();
}

function onSubmit() {
  var name = document.getElementById("Name").value;
  var age = document.getElementById("Age").value;

  var weight = document.getElementById("Weight").value;

  var finalResult = logic(name, age, weight);

  document.getElementById("message").innerHTML = finalResult;
}

function logic(name, age, weight) {
  result = "";

  if (age >= 5 && age <= 7) {
    if (weight > 15 && weight < 20) result = perfectWeight(name, age, weight);
    else if (weight >= 20) result = overWeight(name, age, weight);
    else result = underWeight(name, age, weight);
  } else if (age >= 8 && age <= 10) {
    if (weight > 21 && weight < 25) result = perfectWeight(name, age, weight);
    else if (weight >= 25) result = overWeight(name, age, weight);
    else result = underWeight(name, age, weight);
  } else if (age >= 11 && age <= 15) {
    if (weight > 26 && weight < 30) result = perfectWeight(name, age, weight);
    else if (weight >= 30) result = overWeight(name, age, weight);
    else result = underWeight(name, age, weight);
  } else if (age >= 16 && age <= 20) {
    if (weight > 31 && weight < 40) result = perfectWeight(name, age, weight);
    else if (weight >= 40) result = overWeight(name, age, weight);
    else result = underWeight(name, age, weight);
  } else {
    result = "Kindly Provide Details within the specified Limit";
  }

  return result;
}

function underWeight(name, age, weight) {
  return (
    "Hello " +
    name +
    " !!! Your weight is less than recommended value of " +
    weight +
    "KG at an age of " +
    age +
    "."
  );
}

function overWeight(name, age, weight) {
  return (
    "Hello " +
    name +
    " !!! Your weight is greater than recommended value of " +
    weight +
    "KG at an age of " +
    age +
    "."
  );
}

function perfectWeight(name, age, weight) {
  return "Hello " + name + " !!! Your weight is perfect.";
}
