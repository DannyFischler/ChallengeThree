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
    confirmYesBtn.removeEventListener("click", promptUppercase);
    confirmNoBtn.removeEventListener("click", promptUppercase);
    confirmYesBtn.addEventListener("click", function () {
      includeLowercase = true;
      hideModal();
      promptUppercase();
    });
    confirmNoBtn.addEventListener("click", function () {
      includeLowercase = false;
      hideModal();
      promptNumeric();
    });

    // Scroll to the top of the page to show the modal
    window.scrollTo(0, 0);
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
    // Rest of the code for promptNumeric function
  }

  // Rest of your functions remain unchanged

  function generatePassword(length) {
    // Rest of your password generation logic remains unchanged

    passwordText.value = password;
  }
});
