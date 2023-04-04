import React, { Fragment, useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  function handleSubmit(e: any) {
    e.preventDefault();
  }
  const filteredData = departmentHeads.filter((head) =>
    head.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

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

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset page number when search query changes
  }

  return (
    <Fragment>
      <section className="grid grid-cols-1 md:grid-cols-2  font-poppins bg-[#E4FFEE] text-xl md:text-3xl shadow-xl  w-full text-center p-5">
        <h1 className="p-4 md:p-2">
          Explore our Departments and learn how you can get involved in our mission
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="relative p-4">
            <div className="absolute inset-y-0 left-3 md:left-20 lg:left-36 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#39B755] dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              className="bg-[#E4FFEE] text-[#39B755] placeholder:italic placeholder:text-[#39B755] focus:outline-[#39B755] focus:border-[#39B755] border-3 border-[#39B755] w-full md:w-3/5 rounded pl-10"
              type="text"
              placeholder="Search keywords e.g.  Mental, health,  Arts, culture..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </form>
      </section>
      <section className="mx-auto p-6">
        {searchQuery ? (
          <div>
            <p className="text-secondary">{slicedData.length} results found</p>
            <p className="text-bold font-poppins">
              Showing results for{' '}
              <span className="text-primary">
                <i>{searchQuery}</i>
              </span>
            </p>
          </div>
        ) : (
          ''
        )}
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
    </Fragment>
  );
}

export default DepartmentSection;

const departmentHeads: DepartmentsCardProps[] = [
  {
    title: 'Department of Language',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of Language  is responsible for  developing African \
    languages curriculum, promoting and encouraging research on indigenous languages. \
    Currently the language department is translating and transcribing data from one language to another for natural language processing initiatives.',
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
    title: 'Department of Media and Communication',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department is  responsible for overseeing the media relations,developing media strategy,managing production of shows ,including writing and distributing news releases,responding to media inquiries and maintaining media kit about the organisation in public settings and preparing executives to speak at events such as news conferences. ',
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
    title: 'Department of Artificial Intelligence',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department will design and engineer AI capabilities to fulfil their intended functions,will spearhead  research and education focused on AI in key research areas (e.g. deep learning, computer vision, natural language processing, speech recognition, big data, neural networks) and AI+X applications.',
    actionButton: 'Read more +',
    actionButtonUrl: '#',
    name: 'Dr. Rashaad Jones',
    role: 'Chief Artificial Intelligence Officer',
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
    text: 'The department will develop continental foreign policy strategy to manage and deal efficiently the relations with foreign countries, and work toward integrating the continent  as well  as ensure that Africa gets its rightful place in international institutions  like the UN bodies. It will establish  diplomatic relations  to  secure African interests and promote the welfare of people of African descent abroad.',
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
    title: 'Department of Pan Africanism and Afrocentric Education',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department will develop an educational curriculum and programs to promote Pan Africanism as a tool to empower peoples of the African diaspora with educational modes in contact and aligned  with their  rich cultural beliefs and common historical heritage.',
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
    title: 'Department of Labour',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department will be responsible to mediate and adjudicate employment and labour relations matters related to unionised workplaces. The department will safeguard and protect the interests of African workers both at home or abroad.',
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
    title: 'Department of Arts and Culture',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department is responsible for promoting, supporting, developing and protecting the arts, culture and heritage of  Africa. Promotes African culture ,organises heritage festivals to celebrate diversity of African culture  and  spearheads the development of heritage institutions.',
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
    title: 'Department of Human Rights ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department advocates for Human rights of people of African descent as enshrined under Article 55 of the UN Charter. These include the right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education, and many more.',
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
    title: 'Department of Mental Health',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department  is responsible for developing a continental mental health strategy,promoting awareness on mental health ,eradicating stigma ,advancing evidence based clinical research, increasing access to services and harnessing  technologies to meet the mental health needs of individuals of all ages; enabling them to live normal lives , work and participate effectively in their communities.',
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
    title: 'Department of Motherland  Security and Natural Resources',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The main mission of the Department of Motherland Security and Natural resources  is to protect the African continent  from all forms of threats and safeguard its natural resources from foreign exploitation or control.',
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
    title: 'Department of Industrialization and Infrastructure',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department will develop  and implement the continental Industrialization strategic plan to steer Africa into the fourth Industrial revolution, build new infrastructure, provide transportation services, and  promote the African continental free trade area  and encourage adoption of visa free policy to allow for the safe and efficient movement of people and goods across the continent.',
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
    title: 'Department of  Technology and Innovations ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "The Department of Technology and Innovations also known as DoTI is responsible for developing and executing the organisation's strategic  technology plan to steer Africa into rapid technological advancement. It's also the executive body tasked with managing and showcasing technological innovations at USAF. As a result,the decisions that DoTI makes affect not only the present generation but also the future generation. Therefore ,it's crucial that these decisions are made thoughtfully ",
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
    title: 'Department of Human Resources',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The department  of Human Resources manages the nine  main duties: talent management,volunteer recruitment and onboarding, organising social engagements,performance management, conflict resolution ,volunteer recognition, training and development, compliance, and workplace safety. An HR department provides organisational structure and the ability to meet business needs by effectively managing the volunteer  lifecycle.',
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
    title: 'Department of Agriculture',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of Agriculture provides strategic leadership on food, agriculture, natural resources,nutrition, implements the organisational strategic plan  to advance  African rural development and ensure food security  and formulate  a  continental public policy informed by the best available science, and effective management.',
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
    title: 'Department of Product',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "The Department of Product (DoP)  is in charge of defining and communicating the organisation's product strategy and oversees development of  products  throughout the software development life cycle. That includes working out what customers want, helping the organisation to build the right products and developing product marketing strategy. They also provide the product vision and leadership for the many other roles involved in developing, supporting, marketing and selling the product. That includes ensuring the product supports the company’s strategy and goals.",
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
    title: 'Department of Health ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of Health is responsible for enhancing the health and well-being of all Africans , by providing for effective health services,developing continental healthcare infrastructure ,promoting research in indigenous medicines  and by spearheading  sound, sustained advances in the sciences and research  underlying medicine,public health, and social services.',
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
    title: 'Department of Sales and Digital Marketing ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of Sales and Digital Marketing is responsible for Planning and executing marketing strategies,product pricing,tracking trends and monitoring competition,driving brand awareness and lead generation through digital channels, and that means that Digital Marketers spend their days creating, posting, or updating content, monitoring or handling social interactions and campaigns, and performing other work in an attempt to bolster USAF’s digital',
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
    title: 'Department of Commerce ',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: "The Department's mission is  to promote African Continental Free Trade Area (AfCFTA) and encourage African,Caribbean, Pacific  nations and states worldwide  to  create the enabling environment to foster  economic growth, win-win partnerships and  equal opportunity for all communities.",
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
    title: 'Department of Treasury',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of Treasury is the Organisational treasury and finance department of the United States of Africa, where it serves as an executive department.  It is responsible for  ensuring financial compliance with existing laws,management of money and financial risks in the organisation as well as allocating budgets for African development initiatives. Its priority is to ensure the  organisation has the money it needs to manage its day-to-day business obligations, while also helping develop its long term financial strategy and policies.',
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
    title: 'Department of Truth and Justice',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of  Truth and Justice  (DoTT) mission is  to  foster fair and impartial administration of justice in Africa and revisit historical injustices to encourage reconciliation,pursue legal mechanisms available  and initiate campaigns to recover looted African cultural artifacts,seeks  justice for  crimes against humanity committed  against Africans during slavery and colonialism ,advocates for reparations  as  one way  to foster a  healing process for intergenerational traumas inflicted on people of African descent and provide restitution to Africa.',
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
    title: 'Department of Defence',
    image: headofDepartment1,
    textTitle: 'What we do',
    text: 'The Department of Defence (DoD)  is tasked with developing African Security and anti-terrorism strategic plan , developing technologies to defend Africa’s sovereignty , facilitating training,modernization  and encouraging collaboration of African militaries, establishing  a new  continental defence force, with well equipped intelligence unit and state of the art technology to deter invasions or war,intervene in regional conflicts to avert coups,ensure the rule of law,secure civilians, to protect the security of the  African states and safeguard democracy.',
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
