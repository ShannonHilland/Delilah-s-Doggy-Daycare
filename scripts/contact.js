// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function changeMessage() {
    let contactMessage = document.getElementById("contact-page");
    contactMessage.innerHTML = '<p>Thank you for your message!</p>';
    contactMessage.classList.add("thank-you-message");
}

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", changeMessage);