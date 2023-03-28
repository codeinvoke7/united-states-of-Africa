import React, { useState } from 'react';
import { headofDepartment1 } from 'assets/images';
import { DepartmentsCard, DepartmentsCardProps } from 'components/modules/cards';
import { nextPagination, prevPagination } from 'assets/icons';

interface PaginationButtonProps {
  label: any;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}

function PaginationButton({
  label,
  onClick,
  disabled = false,
  active = false
}: PaginationButtonProps) {
  const activeClass = active ? 'text-[#39B755] font-poppins' : 'bg-white text-gray-600';
  const disabledClass = disabled ? 'cursor-not-allowed opacity-50' : '';
  return (
    <button
      className={`py-1 px-3 rounded-lg ${activeClass} ${disabledClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

function DepartmentSection() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(departmentHeads.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = departmentHeads.slice(startIndex, startIndex + itemsPerPage);

  function handlePageClick(pageNumber: number | string) {
    if (pageNumber === currentPage) {
      return;
    }

    if (pageNumber === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (typeof pageNumber === 'number') {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <section className="mx-auto p-6">
      <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
        {slicedData.map((head, index) => (
          <div key={head.name + head.role + index} className="px-1">
            <DepartmentsCard {...head} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav className="flex space-x-2">
          <PaginationButton
            label={<img src={prevPagination} />}
            onClick={() => handlePageClick('prev')}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index}
              label={String(index + 1)}
              onClick={() => handlePageClick(index + 1)}
              active={currentPage === index + 1}
            />
          ))}
          <PaginationButton
            label={<img src={nextPagination} />}
            onClick={() => handlePageClick('next')}
            disabled={currentPage === totalPages}
          />
        </nav>
      </div>
    </section>
  );
}

export default DepartmentSection;

const departmentHeads: DepartmentsCardProps[] = [
  {
    title: 'Department of Technology and Innovations (DoTI)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: 'https://linkedin.com' },
      { name: 'twitter', url: 'twitter' }
    ]
  },
  {
    title: 'Department of Product (DoP)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Sales and Digital Marketing',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Foreign Affairs ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Technology and Innovations (DoTI)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: 'https://linkedin.com' },
      { name: 'twitter', url: 'twitter' }
    ]
  },
  {
    title: 'Department of Product (DoP)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Sales and Digital Marketing',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Foreign Affairs ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Technology and Innovations (DoTI)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: 'https://linkedin.com' },
      { name: 'twitter', url: 'twitter' }
    ]
  },
  {
    title: 'Department of Product (DoP)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Sales and Digital Marketing',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Foreign Affairs ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Technology and Innovations (DoTI)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: 'https://linkedin.com' },
      { name: 'twitter', url: 'twitter' }
    ]
  },
  {
    title: 'Department of Product (DoP)',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Sales and Digital Marketing',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  },
  {
    title: 'Department of Foreign Affairs ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "We are responsible for developing and executing the organisation's strategic technology plan...",
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Bobby Shawn',
    role: 'Ambassador, USAF',
    location: 'California',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' }
    ]
  }
];
