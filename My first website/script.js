const jobs = [
  {
    title: 'Senior Frontend Developer',
    company: 'Northstar Labs',
    type: 'Full-time',
    location: 'Remote',
    salary: '$120k - $150k',
    description: 'Build polished user interfaces for a fast-growing SaaS platform used by global teams.',
    initials: 'NL'
  },
  {
    title: 'Product Designer',
    company: 'Brightfield',
    type: 'Hybrid',
    location: 'New York, NY',
    salary: '$110k - $130k',
    description: 'Design intuitive features and improve the end-to-end user experience across web and mobile.',
    initials: 'BF'
  },
  {
    title: 'Data Analyst',
    company: 'Crest Analytics',
    type: 'Full-time',
    location: 'Austin, TX',
    salary: '$95k - $115k',
    description: 'Turn large datasets into actionable insights and support product and sales decisions.',
    initials: 'CA'
  },
  {
    title: 'Customer Success Manager',
    company: 'Launchpad',
    type: 'Remote',
    location: 'San Francisco, CA',
    salary: '$90k - $110k',
    description: 'Partner with customers to improve adoption, retention, and expansion across strategic accounts.',
    initials: 'LP'
  },
  {
    title: 'Backend Engineer',
    company: 'SignalWorks',
    type: 'Full-time',
    location: 'Seattle, WA',
    salary: '$130k - $160k',
    description: 'Design backend services and APIs that power scalable products for millions of users.',
    initials: 'SW'
  },
  {
    title: 'Marketing Specialist',
    company: 'Harbor Studio',
    type: 'Hybrid',
    location: 'Chicago, IL',
    salary: '$75k - $95k',
    description: 'Plan campaigns, improve content performance, and support brand growth in a creative business.',
    initials: 'HS'
  }
];

const jobList = document.getElementById('jobList');
const searchForm = document.getElementById('jobSearchForm');
const jobSearchInput = document.getElementById('jobSearch');
const locationSearchInput = document.getElementById('locationSearch');

function renderJobs(list) {
  if (!jobList) return;

  if (!list.length) {
    jobList.innerHTML = '<div class="empty-state">No jobs match your search. Try a different keyword or city.</div>';
    return;
  }

  jobList.innerHTML = list
    .map(
      (job) => `
        <article class="job-card">
          <div class="job-header">
            <div class="company-badge">${job.initials}</div>
            <span class="badge">${job.type}</span>
          </div>

          <h3>${job.title}</h3>
          <div class="company-name">${job.company}</div>

          <p>${job.description}</p>

          <div class="job-meta">
            <span>${job.location}</span>
            <span>${job.salary}</span>
          </div>

          <div class="job-footer">
            <span class="salary">${job.salary}</span>
            <button class="btn btn-primary" type="button">Apply now</button>
          </div>
        </article>
      `
    )
    .join('');
}

function filterJobs() {
  const jobKeyword = jobSearchInput.value.trim().toLowerCase();
  const locationKeyword = locationSearchInput.value.trim().toLowerCase();

  const filtered = jobs.filter((job) => {
    const matchesTitle = job.title.toLowerCase().includes(jobKeyword);
    const matchesLocation = job.location.toLowerCase().includes(locationKeyword);
    return (!jobKeyword || matchesTitle) && (!locationKeyword || matchesLocation);
  });

  renderJobs(filtered);
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  filterJobs();
});

renderJobs(jobs);
