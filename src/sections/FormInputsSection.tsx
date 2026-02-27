const FormInputsSection = () => (
  <section id="forms">
    <h2 className="section-heading">Form Inputs</h2>
    <div className="component-grid">
      <nys-textinput
        id="fullname-input"
        name="fullName"
        label="Full name"
        description="Enter your full legal name"
        required
        width="lg"
      />
      <nys-tooltip
        for="fullname-input"
        text="This should match your government-issued ID."
      />

      <nys-textinput name="email" label="Email address" type="email" width="lg" />

      <nys-textinput name="phone" label="Phone number" type="tel" width="md" />

      <nys-textarea
        name="comments"
        label="Additional comments"
        description="Provide any relevant details"
        rows={4}
      />

      <nys-select name="region" label="Select a region" id="region-select">
        <option value="">-- Choose --</option>
        <option value="capital">Capital Region</option>
        <option value="western">Western NY</option>
        <option value="hudson">Hudson Valley</option>
        <option value="nyc">New York City</option>
        <option value="long-island">Long Island</option>
      </nys-select>

      <nys-select name="county" label="Select a county" id="county-select">
        <nys-option value="albany" label="Albany" />
        <nys-option value="erie" label="Erie" />
        <nys-option value="kings" label="Kings" />
        <nys-option value="monroe" label="Monroe" />
        <nys-option value="onondaga" label="Onondaga" />
      </nys-select>

      <nys-datepicker
        name="eventDate"
        label="Event date"
        description="Choose a preferred date"
        width="md"
      />

      <nys-fileinput
        name="documents"
        label="Upload documents"
        description="Accepted formats: .pdf, .jpg, .png"
        accept=".pdf,.jpg,.png"
        multiple
        dropzone
      />
    </div>
    <nys-divider />
  </section>
);

export default FormInputsSection;
