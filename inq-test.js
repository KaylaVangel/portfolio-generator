const inquirer = require('inquirer');

const askForFriend = () => {
    inquirer.prompt({
      type: 'input',
      message: 'Enter a name:',
      name: 'friend'
    })
    .then((jfdklsafdsa) => {
      console.log(`Hi ${jfdklsafdsa.friend}!`);
      askForFriend();
    });
   };

   const jfdklsafdsa = {}
   jfdklsafdsa.friend = getInputSomehow();
   console.log(jfdklsafdsa.friend)



   askForFriend();