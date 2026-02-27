const AccordionSection = () => (
  <section id="accordion">
    <h2 className="section-heading">Accordion</h2>

    <h3>Default</h3>
    <nys-accordion>
      <nys-accordionitem heading="What is NYSDS?">
        <p>
          The New York State Design System (NYSDS) provides reusable, accessible
          components and guidelines for building government digital services.
        </p>
      </nys-accordionitem>
      <nys-accordionitem heading="How do I get started?">
        <p>
          Install <code>@nysds/components</code> and <code>@nysds/styles</code>{" "}
          via npm, then follow the framework-specific integration guide.
        </p>
      </nys-accordionitem>
      <nys-accordionitem heading="Is NYSDS accessible?">
        <p>
          Yes. All components follow WCAG 2.1 AA guidelines and include proper
          ARIA attributes, keyboard navigation, and screen reader support.
        </p>
      </nys-accordionitem>
    </nys-accordion>

    <h3>Single Select, Bordered</h3>
    <nys-accordion singleSelect bordered>
      <nys-accordionitem heading="Section A">
        <p>Only one section can be open at a time in single-select mode.</p>
      </nys-accordionitem>
      <nys-accordionitem heading="Section B">
        <p>Opening this section will automatically close Section A.</p>
      </nys-accordionitem>
      <nys-accordionitem heading="Section C">
        <p>
          The bordered variant adds visual separation between accordion items.
        </p>
      </nys-accordionitem>
    </nys-accordion>
    <nys-divider />
  </section>
);

export default AccordionSection;
