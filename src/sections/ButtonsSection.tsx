const ButtonsSection = () => (
  <section id="buttons">
    <h2 className="section-heading">Buttons</h2>
    <h3>Variants</h3>
    <div className="component-row">
      <nys-button label="Filled" variant="filled" />
      <nys-button label="Outline" variant="outline" />
      <nys-button label="Ghost" variant="ghost" />
      <nys-button label="Text" variant="text" />
    </div>
    <h3>Sizes</h3>
    <div className="component-row">
      <nys-button label="Small" size="sm" />
      <nys-button label="Medium" size="md" />
      <nys-button label="Large" size="lg" />
    </div>
    <h3>With Icons & States</h3>
    <div className="component-row">
      <nys-button label="Add Item" prefixIcon="add" />
      <nys-button label="Download" prefixIcon="download" variant="outline" />
      <nys-button label="Disabled" disabled />
    </div>
    <nys-button label="Full Width Button" fullWidth variant="outline" />
    <nys-divider />
  </section>
);

export default ButtonsSection;
