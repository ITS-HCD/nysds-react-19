const AlertsSection = () => (
  <section id="alerts">
    <h2 className="section-heading">Alerts</h2>
    <div className="component-grid">
      <nys-alert
        type="info"
        heading="Information"
        text="This is an informational alert for general guidance."
      />
      <nys-alert
        type="success"
        heading="Success"
        text="Your application has been submitted successfully."
      />
      <nys-alert
        type="warning"
        heading="Warning"
        text="Please review your information before proceeding."
      />
      <nys-alert
        type="danger"
        heading="Error"
        text="There was a problem processing your request."
      />
    </div>
    <nys-divider />
  </section>
);

export default AlertsSection;
