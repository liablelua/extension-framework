/*
    
    Framework: UI.js
    https://github.com/liablelua/extension-framework/
    
*/

Framework.Wrap(function () {
  const Paragraph = Framework.Create.Text();
  Paragraph.textContent = "\nHello From Framework!";
  Framework.AppendBody(Paragraph);
});
