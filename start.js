const logic = require("./logic")

const prompt = require('prompt-sync')()

const whichOperation = prompt("Write down what you would like to do: add, update or delete? ")

if (whichOperation == 'add') {
  logic.add()
  
} else if (whichOperation == 'update') {
  logic.update()

} else if (whichOperation == 'delete') {
  logic.delete()
}