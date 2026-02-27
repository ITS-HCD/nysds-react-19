const SelectionControlsSection = () => (
  <section id="selection-controls">
    <h2 className="section-heading">Selection Controls</h2>
    <div className="component-grid">
      <nys-checkbox
        label="I agree to the terms of service"
        name="terms"
        value="agreed"
      />

      <nys-checkboxgroup
        label="Favorite NY landmarks"
        description="Select all that apply"
      >
        <nys-checkbox name="landmarks" label="Adirondack Mountains" value="adirondacks" />
        <nys-checkbox name="landmarks" label="Niagara Falls" value="niagara" />
        <nys-checkbox name="landmarks" label="Statue of Liberty" value="liberty" />
        <nys-checkbox name="landmarks" label="Central Park" value="centralpark" />
      </nys-checkboxgroup>

      <nys-radiogroup
        label="Preferred contact method"
        description="Choose one"
        name="contact"
      >
        <nys-radiobutton name="contact" label="Email" value="email" />
        <nys-radiobutton name="contact" label="Phone" value="phone" />
        <nys-radiobutton name="contact" label="Mail" value="mail" />
      </nys-radiogroup>

      <nys-toggle
        label="Enable email notifications"
        name="notifications"
        value="on"
      />
    </div>
    <nys-divider />
  </section>
);

export default SelectionControlsSection;
