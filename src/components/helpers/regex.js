const min = 10000000000000;
const max = 99999999999999;
let randomId = (Math.floor(Math.random() * (max - min + 1)) + min)


const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexEn = /^[a-zA-Z@._0-9\s]*$/

export { regex, regexEn, randomId } 