function checkAge() {
  const ageField = document.getElementById('age');
  const ageText = ageField.value;
  const errorTag = document.getElementById('error');

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw ('Please Enter a number');
    }
    else if (age < 18) {
      throw ('Baccha kaccha not allowed')
    }
    else if(age > 30){
      throw ('morobbi ra aikhane aisen na')
    }
    errorTag.innerHTML = '';
  }
  catch (err){
    console.log('ERROR', err);
    errorTag.innerHTML = 'ERROR:: ' + err;
  }
  finally {
    console.log('All Done');
  }
  console.log(1111);
}