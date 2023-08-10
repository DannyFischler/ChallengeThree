document.addEventListener("DOMContentLoaded", function () {
  var generateBtn = document.querySelector("#generate");
  var modal = document.querySelector("#modal");
  var confirmYesBtn = document.querySelector("#confirmYes");
  var confirmNoBtn = document.querySelector("#confirmNo");
  var passwordText = document.querySelector("#password");
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecial = false;

  generateBtn.addEventListener("click", function () {
    showModal();
  });

  confirmYesBtn.addEventListener("click", function () {
    includeLowercase = true;
    hideModal();
    promptUppercase();
  });

  confirmNoBtn.addEventListener("click", function () {
    includeLowercase = false;
    hideModal();
    promptUppercase();
  });

  function showModal() {
    modal.style.display = "flex";
    modal.querySelector(".modal-content p").textContent = "Include lowercase characters?";
  }

  function hideModal() {
    modal.style.display = "none";
  }

  function promptUppercase() {
    modal.style.display = "flex";
    modal.querySelector(".modal-content p").textContent = "Include uppercase characters?";
    confirmYesBtn.removeEventListener("click", promptUppercase);
    confirmNoBtn.removeEventListener("click", promptUppercase);
    confirmYesBtn.addEventListener("click", function () {
      includeUppercase = true;
      hideModal();
      promptNumeric();
    });
    confirmNoBtn.addEventListener("click", function () {
      includeUppercase = false;
      hideModal();
      promptNumeric();
    });
  }

  function promptNumeric() {
    modal.style.display = "flex";
    modal.querySelector(".modal-content p").textContent = "Include numeric characters?";
    confirmYesBtn.removeEventListener("click", promptNumeric);
    confirmNoBtn.removeEventListener("click", promptNumeric);
    confirmYesBtn.addEventListener("click", function () {
      includeNumeric = true;
      hideModal();
      promptSpecial();
    });
    confirmNoBtn.addEventListener("click", function () {
      includeNumeric = false;
      hideModal();
      promptSpecial();
    });
  }

  function promptSpecial() {
    modal.style.display = "flex";
    modal.querySelector(".modal-content p").textContent = "Include special characters?";
    confirmYesBtn.removeEventListener("click", promptSpecial);
    confirmNoBtn.removeEventListener("click", promptSpecial);
    confirmYesBtn.addEventListener("click", function () {
      includeSpecial = true;
      hideModal();
      generatePassword();
    });
    confirmNoBtn.addEventListener("click", function () {
      includeSpecial = false;
      hideModal();
      generatePassword();
    });
  }

  function generatePassword() {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  
    var selectedChars = "";
    if (includeLowercase) selectedChars += lowercaseChars;
    if (includeUppercase) selectedChars += uppercaseChars;
    if (includeNumeric) selectedChars += numericChars;
    if (includeSpecial) selectedChars += specialChars;
  
    var password = "";
    var passwordLength = 12; // You can adjust the length as needed
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * selectedChars.length);
      password += selectedChars[randomIndex];
    }
    passwordText.value = password;
  }
  
});