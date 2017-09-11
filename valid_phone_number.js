function validPhoneNumber(phoneNumber) {
  //TODO: Return whether phoneNumber is in the proper form
  let arr = phoneNumber.split('');
  if (
    arr.length !== 14 ||
    arr[0] !== '(' ||
    arr[4] !== ')' ||
    arr[5] !== ' ' ||
    arr[9] !== '-'
  ) {
    return false;
  } else {
    return true;
  }
}
