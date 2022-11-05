
// CPF
const cpf = 'CPF do aprovado: - 600.567.890-12 - 765.998.345-23'
console.log(cpf.match(/\d.{0,3}.\d{0,3}.\d{0,3}-\d{0,2}/g))
console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{0,2}/g))

// Telephones
const telephones = 'Lista telefônica: - (11) 95911-9943 - (11)95911-9943 - 95911-9943'
console.log(telephones.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))

// Email
const emails = 'Lista de emails: - weslley_lopes@gmail.com weslleylopes@gmail.com weslley-lopes@proton.me - weslley.9607@hotmail.com.br'
console.log(emails.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(emails.match(/\w+@\w+\.\w{2,4}/g))
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(emails.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))


