const submitBtn = document.getElementById('submit-btn');
const options = document.getElementsByName('option');

submitBtn.addEventListener('click', () => {
  const selectedOption = Array.prototype.filter.call(options, (option) => option.checked)[0].value;
  switch (selectedOption) {
    case 'option1':
      window.location.href = 'https://fabischau1.github.io/FMOS/1.html';
      break;
    case 'option2':
      window.location.href = 'https://fabischau1.github.io/FMOS/FM%20OS%202.0.htm';
      break;
    case 'option3':
      window.location.href = 'https://fabischau1.github.io/FMOS/FMOS%203.0%20.html';
      break;
    case 'option4':
      window.location.href = 'https://fabischau1.github.io/FMOS/FMOS%204%20.html';
      break;
    case 'option5':
      window.location.href = 'https://fabischau1.github.io/FMOS/FMOS%205%20.html';
      break;
    case 'option6':
      window.location.href = 'https://fabischau1.github.io/FMOS/FMOS%206.html';
      break;
    case 'option7':
      window.location.href = 'https://fabischau1.github.io/FMOS/FMOS%207%20.html';
      break;
    case 'option8':
      window.location.href = 'https://fabischau1.github.io/FMOS/FMOS%2010%20.html';
      break;
	case 'option9':
      window.location.href = 'https://fabischau1.github.io/FMOS/';
      break;
    default:
      alert('Please select an option');
  }
});
