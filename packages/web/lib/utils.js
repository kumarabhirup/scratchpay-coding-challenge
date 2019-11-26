export function isEmailProper(email) {
  // eslint-disable-next-line no-useless-escape
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  return reg.test(email) === true
}

export function isDuplicate(array, value) {
  return array.filter(item => item === value).length > 1
}
