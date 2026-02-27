const StepperSection = () => (
  <section id="stepper">
    <h2 className="section-heading">Stepper</h2>
    <nys-stepper label="Application Process">
      <nys-step label="Personal Info" />
      <nys-step label="Documents" current />
      <nys-step label="Review" />
      <nys-step label="Submit" />
    </nys-stepper>
    <nys-divider />
  </section>
);

export default StepperSection;
