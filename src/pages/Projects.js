import React, { useState, useEffect } from 'react';
import PreviousSearches from '../components/PreviousSearches';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';

export default function Projects({ loggedin }) {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({
    size: '',
    difficulty: '',
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedFilters]);

  const fetchData = async () => {
    try {
      const filterParams = new URLSearchParams(selectedFilters).toString();
      const response = await fetch(
        `http://localhost/projectmentor_server/projects_fetch.php?page=${currentPage}&${filterParams}`
      );
      const data = await response.json();

      setProjects(data.projects);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };

  return (
    <div>
      <PreviousSearches onFilterChange={handleFilterChange} />
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} loggedin={loggedin} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
