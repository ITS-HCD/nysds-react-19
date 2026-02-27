import { useRef } from "react";
import type { NysModal } from "@nysds/components";

const ModalSection = () => {
  const modalRef = useRef<NysModal>(null);

  const openModal = () => {
    if (modalRef.current) modalRef.current.open = true;
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.open = false;
  };

  return (
    <section id="modal">
      <h2 className="section-heading">Modal</h2>
      <nys-button label="Open Modal" onClick={openModal} />
      <nys-modal
        ref={modalRef}
        heading="Update Available"
        subheading="Version 2.0 is ready to install"
      >
        <p>
          A new version of the application is available. Would you like to
          update now? Your current session will be saved.
        </p>
        <div slot="actions">
          <nys-button label="Not now" variant="outline" onClick={closeModal} />
          <nys-button label="Update" onClick={closeModal} />
        </div>
      </nys-modal>
      <nys-divider />
    </section>
  );
};

export default ModalSection;
