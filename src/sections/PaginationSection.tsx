import { useState, useRef, useCallback } from "react";
import type { NysPagination } from "@nysds/components";
import { useCustomEvent } from "../hooks/useCustomEvent";

const PaginationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef<NysPagination>(null);

  useCustomEvent(
    paginationRef,
    "nys-change",
    useCallback((e: CustomEvent) => setCurrentPage(e.detail.page), []),
  );

  return (
    <section id="pagination">
      <h2 className="section-heading">Pagination</h2>
      <p>Current page: {currentPage}</p>
      <nys-pagination
        ref={paginationRef}
        totalPages={10}
        currentPage={currentPage}
      />
      <nys-divider />
    </section>
  );
};

export default PaginationSection;
