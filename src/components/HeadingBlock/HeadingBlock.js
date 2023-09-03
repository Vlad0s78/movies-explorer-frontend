function HeadingBlock({ headerText, techsSection }) {
  return <h2 className={`header-section ${techsSection ? "header-section_type_techs" : ""}`}>{headerText}</h2>;
}

export default HeadingBlock;
