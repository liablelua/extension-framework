/*
    
    Framework: UI.js
    https://github.com/liablelua/extension-framework/
    
*/

Framework.Wrap(function () {
  // !!! THIS IS DANGEROUS. !!! ///
  Framework.Strict(false); // 1 extension disabling this could cost EVERYTHING to go wrong.
  // Please read the code of each extension you enable.

  const Divider = Framework.Create.Divider();
  Divider.id = "calc";

  const Paragraph = Framework.Create.Text();
  Paragraph.textContent = "\nEnter in JavaScript Code:\n";

  const Input = Framework.Create.Input();
  Input.placeholder = "alert('hello!');";

  const Button = Framework.Create.Button();
  Button.textContent = "Run Code";

  Button.addEventListener("click", () => {
    Framework.JavaScript(Input.value);
    Paragraph.textContent = Input.value;
  });

  Framework.Append(Divider, Paragraph);
  Framework.Append(Divider, Input);
  Framework.Append(Divider, Button);
  Framework.AppendBody(Divider);
});
