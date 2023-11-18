interface Contact extends Address {
  id: number
  name: string
  birthDate?: Date
  
}

interface Address {
  line1: string
  line2: string
  region: string
  province: string
  postalCode: string
}

let primaryContact: Contact = {
  id: 1,
  name: "John Smith",
  birthDate: new Date("10-10-2000")
}



let x: number
let y: string
let z: boolean
let a: Date
let b: string[]
let c: any

b = "hello" as any