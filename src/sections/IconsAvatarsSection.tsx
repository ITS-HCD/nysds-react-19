const IconsAvatarsSection = () => (
  <section id="icons-avatars">
    <h2 className="section-heading">Icons & Avatars</h2>
    <h3>Icons</h3>
    <div className="component-row">
      <nys-icon name="home" size="3xl" />
      <nys-icon name="search" size="3xl" />
      <nys-icon name="settings" size="3xl" />
      <nys-icon name="favorite" size="3xl" />
      <nys-icon name="check_circle" size="3xl" />
      <nys-icon name="info" size="3xl" />
    </div>
    <h3>Avatars</h3>
    <div className="component-row">
      <nys-avatar initials="NY" aria-label="New York" />
      <nys-avatar initials="AB" aria-label="Albany" />
      <nys-avatar initials="JD" aria-label="Jane Doe" interactive />
    </div>
    <nys-divider />
  </section>
);

export default IconsAvatarsSection;
