const BadgesSection = () => (
  <section id="badges">
    <h2 className="section-heading">Badges</h2>
    <div className="component-row">
      <nys-badge label="Neutral" intent="neutral" />
      <nys-badge label="Success" intent="success" prefixIcon />
      <nys-badge label="Warning" intent="warning" prefixIcon />
      <nys-badge label="Error" intent="error" prefixIcon />
    </div>
    <h3>Strong Variant</h3>
    <div className="component-row">
      <nys-badge label="Approved" intent="success" variant="strong" prefixIcon />
      <nys-badge label="Pending" intent="warning" variant="strong" prefixIcon />
      <nys-badge label="Rejected" intent="error" variant="strong" prefixIcon />
    </div>
    <nys-divider />
  </section>
);

export default BadgesSection;
