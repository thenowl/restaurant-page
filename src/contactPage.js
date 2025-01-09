export function contactPage() {
  const contactPageContainer = document.createElement("div");
  contactPageContainer.classList.add("contact-page-container");

  const addressContainer = document.createElement("address");
  addressContainer.classList.add("address-container");
  contactPageContainer.appendChild(addressContainer);

  const contactText1 = document.createElement("p");
  contactText1.classList.add("contact-text1");
  contactText1.textContent = "You can call us or write us an email:";
  addressContainer.appendChild(contactText1);

  const telephoneContainer = document.createElement("div");
  telephoneContainer.classList.add("telephone-container");
  addressContainer.appendChild(telephoneContainer);
  const telephone = document.createElement("p");
  telephone.classList.add("telephone");
  telephone.textContent = "Tel.:";
  telephoneContainer.appendChild(telephone);
  const telephoneNumber = document.createElement("a");
  telephoneNumber.classList.add("telephone-number");
  telephoneNumber.setAttribute("href", "+49-1234-123-1234");
  telephoneNumber.textContent = "+49-1234-123-1234";
  telephoneContainer.appendChild(telephoneNumber);

  const emailContainer1 = document.createElement("div");
  emailContainer1.classList.add("email-container1");
  addressContainer.appendChild(emailContainer1);
  const mail = document.createElement("p");
  mail.classList.add("mail");
  mail.textContent = "Email:";
  emailContainer1.appendChild(mail);
  const mailAddress = document.createElement("a");
  mailAddress.classList.add("mail-address");
  mailAddress.setAttribute("href", "mailto:hopeThisDoesntExist@peu-a-peu.de");
  mailAddress.textContent = "hopeThisDoesntExist@peu-a-peu.de";
  emailContainer1.appendChild(mailAddress);

  const contactText2 = document.createElement("p");
  contactText2.classList.add("contact-text2");
  contactText2.textContent = "Or contact us via our contact form:";
  addressContainer.appendChild(contactText2);

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "");
  contactPageContainer.appendChild(form);

  const firstNameContainer = document.createElement("div");
  form.appendChild(firstNameContainer);
  const firstNameLabel = document.createElement("label");
  firstNameLabel.setAttribute("for", "firstName");
  firstNameLabel.textContent = "First Name:";
  firstNameContainer.appendChild(firstNameLabel);
  const firstNameInput = document.createElement("input");
  firstNameInput.setAttribute("type", "text");
  firstNameInput.setAttribute("id", "firstName");
  firstNameInput.setAttribute("name", "firstName");
  firstNameInput.required = true;
  firstNameContainer.appendChild(firstNameInput);

  const lastNameContainer = document.createElement("div");
  form.appendChild(lastNameContainer);
  const lastNameLabel = document.createElement("label");
  lastNameLabel.setAttribute("for", "lastName");
  lastNameLabel.textContent = "Last Name:";
  lastNameContainer.appendChild(lastNameLabel);
  const lastNameInput = document.createElement("input");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("id", "lastName");
  lastNameInput.setAttribute("name", "lastName");
  lastNameInput.required = true;
  lastNameContainer.appendChild(lastNameInput);

  const emailContainer2 = document.createElement("div");
  form.appendChild(emailContainer2);
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  emailContainer2.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.required = true;
  emailContainer2.appendChild(emailInput);

  const textareaContainer = document.createElement("div");
  form.appendChild(textareaContainer);
  const textareaLabel = document.createElement("label");
  textareaLabel.setAttribute("for", "textarea");
  textareaLabel.textContent = "Leave us your message:";
  textareaContainer.appendChild(textareaLabel);
  const textarea = document.createElement("textarea");
  textarea.setAttribute("id", "textarea");
  textarea.setAttribute("name", "textarea");
  textarea.setAttribute("rows", "10");
  textarea.setAttribute("cols", "64");
  textarea.required = true;
  textareaContainer.appendChild(textarea);

  const sendButton = document.createElement("button");
  sendButton.setAttribute("type", "submit");
  sendButton.textContent = "Send";
  form.appendChild(sendButton);

  return contactPageContainer;
}
