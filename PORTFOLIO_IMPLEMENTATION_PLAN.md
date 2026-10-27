# Portfolio Implementation Plan --- Aderik "Adi"

> **Purpose:** Build a polished, minimalist, corporate-style personal
> portfolio for Aderik “Adi” Bermas, a current BSIT student specializing in Software
> Development, using React + Vite and Claude Code.
>
> **Status:** Planning baseline. Project descriptions, personal details,
> links, metrics, education dates, and achievements must be verified
> before publication. Do not invent claims or use placeholder content in
> the final production site.

***

## 1. Product vision

Create a long-term professional home for Aderik “Adi” Bermas that presents him
as a developing **full-stack software developer**. The site should
communicate technical credibility, clear thinking, reliability, and care
for implementation---not visual effects for their own sake.

The portfolio is intended for a personal professional identity over
time, while remaining suitable for internship and junior developer
opportunities. It should show not only what Adi built, but also the
problem, his specific contribution, the technical decisions, and the
current state of each project.

### Design principles

1. **Professional over decorative.** Content and project evidence take
   priority over visual effects.
2. **Warm and restrained.** Use a warm cream/green palette, not pure
   default white and not gradients.
3. **Readable at every size.** Prioritize typography, line length,
   whitespace, contrast, and mobile layout.
4. **Evidence over claims.** Describe only skills and contributions Adi
   can explain and substantiate.
5. **Project-led storytelling.** Treat MediTrack and the CRM as case
   studies, not just image tiles.
6. **Fast and maintainable.** Prefer a small, understandable React
   codebase over unnecessary libraries.
7. **Accessible by default.** Semantic HTML, keyboard access, visible
   focus, reduced-motion support, and meaningful image alternatives.
8. **Expandable.** New projects, work experience, certifications, and
   achievements should be easy to add later.

## 2. Confirmed requirements and items to verify

### Confirmed from planning

* Display name: **Aderik “Adi” Bermas**
* Preferred homepage headline: **"Aderik B. Software Developer |
  BSIT"**
* Positioning: **Full-stack developer**
* Visual direction: **Hybrid corporate + technical**
* Palette direction: **Cream/warm white + deep forest green + soft
  gray**
* No gradient colors.
* Include a professional photo.
* Sections: Projects, About, Skills, Resume, Contact, Experience,
  Education.
* Primary projects to consider: MediTrack and CRM.
* Stack: React + Vite.
* Features requested: GitHub links, live demos where genuinely available, SEO/social previews, and an email-only public contact method. The CRM currently has source code on GitHub but no live demo. Repository: <https://github.com/Adk-gh/SM_CRM>
* Hosting provider/domain: undecided.

### Existing project context available, but verify before publishing

**MediTrack** has been described as a cross-platform health record
management system with health analytics and an announcements module for
the Pamantasan ng Lungsod ng San Pablo clinic. The known implementation
context includes a React frontend, an Express/Node backend, Supabase
integration, authentication and role-aware workflows, medical/dental
records and consultations, announcements, and a separately deployed OCR
service. The project has also used Vite and has been deployed on Render.

Do not imply that every module is complete, publicly accessible,
production-ready, or solely authored by Adi. Verify his role, team
contributions, current live URL, repository visibility, screenshots, and
which modules are safe to demonstrate. Avoid exposing patient data,
credentials, API keys, private source, or sensitive system details.

The CRM is a completed academic project whose source code is available at <https://github.com/Adk-gh/SM_CRM>; it currently has no live demo. The supplied CV lists React.js, Tailwind CSS, Firebase, and Chart.js, and describes team work on customer profiles, support tickets, login, real-time database updates, responsive UI, and charts. Confirm the repository URL, exact project name, database choice, feature status, and Aderik’s individual contribution before publishing these details.

### Required before launch

* CV/resume or confirmed equivalent information.
* Official education wording and expected graduation date (public name preference is Aderik “Adi” Bermas).
* Project repository URLs and current live-demo URLs, if public.
* Accurate contribution statement for each project, especially team
  projects.
* Current skills that Adi can explain in an interview.
* Professional photo file and permission to publish it.
* Public contact email confirmed: `itsmeaderik@gmail.com`. Confirm professional profile links.
* Confirm whether the CV may be downloaded publicly and review it for unnecessary personal information.
* Confirm whether the email form should use a provider/service or a
  small backend/serverless endpoint.
* Choose hosting and domain after the first working build.

**Do not block the initial layout on missing content.** Use clearly
labeled development placeholders locally, then replace them before
launch. Never invent project metrics, employment, awards, certificates,
dates, or user counts.

## 2A. Current decisions and content confidence

### Confirmed by Aderik

* Public name: **Aderik “Adi” Bermas**.
* MediTrack contribution scope: **frontend and backend**. This does not establish that every project feature was personally implemented.
* CRM status: **completed project; source code is on GitHub; no live demo currently**.
* Public contact preference: **email only**. The public email address `itsmeaderik@gmail.com` has since been confirmed directly by Aderik.
* Framework: React + Vite.
* Visual direction: minimalist corporate + technical; warm cream, forest green, and soft gray; **no gradients**.

### Content confidence matrix

| Item                                | Current basis                                                    | Publication rule                                                                                                                           |
| ----------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Public name                         | Confirmed directly by Aderik                                     | Use Aderik “Adi” Bermas consistently.                                                                                                      |
| MediTrack role                      | Aderik confirms frontend and backend contribution                | Describe role broadly as frontend/backend; verify feature-level ownership before listing specific contributions.                           |
| MediTrack stack/features/deployment | Supplied CV and prior project context                            | Verify current state and personal contribution; mark uncertain details for review.                                                         |
| CRM status                          | Confirmed directly by Aderik                                     | Say completed academic project with GitHub source code; no live demo.                                                                      |
| CRM stack/features                  | Supplied CV                                                      | Treat as provisional until checked against repository and Aderik’s recollection.                                                           |
| CRM repository URL                  | Supplied by Aderik: <https://github.com/Adk-gh/SM_CRM>           | Test that it is publicly accessible before launch.                                                                                         |
| Public email                        | Confirmed by Aderik: `itsmeaderik@gmail.com`; email-only contact | Use this address for the public email link; test any form delivery before claiming it works.                                               |
| Education wording/dates             | Supplied CV; Aderik confirms he has not graduated                | Clearly label the BSIT as in progress/current student. Verify institution/program spelling and expected graduation date before adding one. |
| Photo, public résumé, screenshots   | Not yet approved for publication                                 | Use only supplied/approved assets; redact sensitive information.                                                                           |

When writing the portfolio, label content internally as **Confirmed**, **From CV—verify**, or **Awaiting confirmation**. These labels are editorial workflow markers and should not appear on the finished public website. Do not turn an unverified claim into polished copy without verification.

## 3. Visual design system

### Palette

Use CSS custom properties so the palette can be tuned in one place.

***

Token                     Initial value           Intended use

***

`--color-bg`              `#F4F1E9`               Main warm cream
background

`--color-surface`         `#FBFAF6`               Cards and raised
content surfaces

`--color-text`            `#202722`               Primary text

`--color-muted`           `#626B64`               Secondary text; verify
contrast

`--color-primary`         `#234B3B`               Deep forest green for
links, buttons,
selected states

`--color-primary-hover`   `#193B2E`               Hover/active green

`--color-border`          `#D8DCD4`               Dividers and card
borders

`--color-soft-green`      `#E4EAE2`               Small highlight
surfaces

`--color-focus`           `#9A6B36`               Visible keyboard focus
outline
-------

These are initial values, not immutable brand requirements. Test
text/background combinations for WCAG AA contrast before launch. Do not
use color alone to convey status.

### Typography

* Use a clean, professional sans-serif family with good readability.
* Prefer a system font stack initially to avoid external font requests
  and improve loading.
* Use a restrained type scale: large but not oversized hero heading,
  clear section headings, comfortable body copy.
* Keep paragraphs at a readable line length; avoid full-width blocks
  of dense text.
* Use uppercase labels sparingly, with adequate letter spacing.
* No animated typing headline, oversized display gimmicks, or
  excessive italic text.

### Layout and components

* Centered content container with a consistent maximum width
  (approximately 1120--1200px).
* Responsive spacing scale implemented as CSS variables.
* Thin borders, subtle corner radius, no heavy shadows, and no
  glassmorphism.
* Grid-based project cards with consistent image ratios and text
  alignment.
* One primary button style and one secondary/text-link style.
* Header with name/wordmark, anchor navigation, and a clear
  contact/resume action.
* Mobile navigation must be keyboard-accessible and usable at narrow
  widths.
* Use simple hover/focus states. Any transitions should be subtle and
  respect `prefers-reduced-motion`.
* **No gradients, autoplay media, cursor-follow effects,
  scroll-jacking, or unnecessary parallax.**

### Image direction

* Use Adi's actual professional photo, ideally a clear
  head-and-shoulders image with neutral lighting and a calm
  background.
* Do not generate or substitute a fake portrait for the real person.
* Use real project screenshots or deliberately designed, truthful
  mockups. Redact sensitive information.
* Provide local image assets with sensible dimensions, compression,
  and descriptive alternative text.
* If a project has no safe screenshot, use a typographic project panel
  rather than a fabricated product screenshot.

## 4. Information architecture

### Navigation

Recommended order: **Home · Projects · About · Experience · Skills ·
Education · Contact**.

Keep Resume accessible as a prominent button/link rather than
necessarily making it a full navigation section. On mobile, collapse
navigation accessibly.

### Page structure

#### 1. Home / hero

* Name: **Aderik “Adi” Bermas**. Confirm whether the hero headline should use the requested wording “Aderik B. Software Developer | BSIT” or a more natural full-name headline.
* Headline: "Aderik B. Software Developer | BSIT" is the requested
  starting wording. Review the final wording so it reads naturally and
  accurately.
* Supporting copy: 1--2 concise sentences explaining the kinds of
  software Adi builds and the value he brings. Write only after
  reviewing his CV and project contributions.
* Professional photo.
* Primary CTA: "View Projects".
* Secondary CTA: "Get in Touch" or "View Résumé".
* Optional small row of verified links: GitHub, LinkedIn, résumé.
* Avoid unsupported claims such as "expert", "industry-leading", or
  "years of experience" unless verified.

#### 2. Featured projects

Start with MediTrack and the CRM, subject to verification. Each card
should include: - Project name and status (e.g., academic project, in
development, deployed---only if true). - One-line problem/value
statement. - Adi's role, not just the team's role. - A small set of
relevant technologies actually used. - A genuine screenshot or safe
visual. - Links only where available: case study, live demo, repository.

The project card should lead to a dedicated detail page or a
well-structured case-study section. Prefer separate routes such as
`/projects/meditrack` only if routing is useful; for a small site, a
single homepage with dedicated project sections may be sufficient.
Decide during Phase 2 based on actual content volume.

#### 3. Project case-study template

Use the same structure for each project: 1. Overview and status. 2.
Problem or need. 3. Intended users and context (avoid exposing
confidential information). 4. Adi's responsibilities and team context.
5\. Key features actually implemented. 6. Technical architecture at a
safe, high level. 7. Important engineering decisions and trade-offs. 8.
Challenges and how they were addressed. 9. Outcome, evidence, or lessons
learned. 10. Stack and links.

For MediTrack, possible areas to verify and describe include role-aware
workflows, health-record handling, consultations, announcements,
database integration, and deployment. Mention OCR only if Adi's
contribution and the feature status are confirmed. Do not expose real
patient records or private operational details.

For the CRM, present it as a completed academic project with a GitHub source-code link only. Do not show a live-demo link unless a deployment is created and tested. Its CV-listed purpose, features, and stack are provisional until the repository and personal contribution are checked.

#### 4. About

A short first-person introduction: - Current BSIT/Sofware Development
background (confirm official program wording). - Areas of interest and
kinds of systems being built. - Approach to learning, collaboration, and
solving problems. - A personal detail only if Adi wants one and it
supports a professional introduction.

Avoid a long autobiography or generic phrases like "passionate tech
enthusiast" without evidence.

#### 5. Experience

* Show employment, internships, freelance work, volunteer work, or
  meaningful team/project responsibilities only if accurate.
* If there is no formal work experience yet, use a clearly named
  "Relevant Experience" or "Project Experience" section rather than
  implying employment.
* Include organization, role, dates, and 2--4 evidence-based bullets
  only when confirmed.
* Never invent employers or dates.

#### 6. Skills

Group skills by category, for example: - Languages - Frontend - Backend
and APIs - Databases and cloud services - Tools and workflow

Include only technologies Adi has used and can discuss. The known
MediTrack context suggests React, JavaScript, Node.js/Express, Supabase,
SQL-related database work, Git, and deployment tools may be relevant,
but confirm current proficiency and personal contribution before
listing. Do not use percentage/progress bars or arbitrary
"expert/intermediate" scores. Prefer evidence-linked skills.

#### 7. Education

* Institution, official degree/program name, relevant dates, and
  expected graduation date only after confirmation.
* Include relevant coursework, academic distinctions, or organizations
  only if real and desired.
* Do not publish student identifiers or other sensitive education
  records.

#### 8. Résumé

* A visible, accessible résumé link.
* Store a sanitized public PDF in `public/` with a stable filename
  such as `resume.pdf`.
* Confirm that the file is intended for public distribution and
  contains no private home address or unnecessary personal data.
* If no CV has been supplied yet, show no fake download link; use a
  development placeholder until a real PDF is provided.

#### 9. Contact

* Clear invitation to contact Adi.
* Verified public email and optional GitHub/LinkedIn links.
* Email form fields: name, email, subject (optional), message.
* Client-side validation plus server-side/provider validation.
* Loading, success, and failure states that are announced accessibly.
* Spam protection appropriate to the selected provider; do not expose
  secret keys in client code.
* If no email provider/backend is configured, use a clear email link
  rather than a nonfunctional form.

#### 10. Footer

* Name, current year, and selected professional links.
* Small, restrained footer; no unnecessary quotes, counters, or
  decorative widgets.

## 4B. MediTrack: user-confirmed major feature contributions

Aderik has identified the following three areas as major features he worked on. Treat these as **user-confirmed contribution areas** for the draft portfolio. Before launch, verify implementation details against the code, confirm library/runtime versions, and ensure screenshots or architecture diagrams contain no patient information, secrets, or private infrastructure details. Do not invent measured business outcomes.

### Feature 1 — AI and automation: student ID OCR verification

**Core contribution described by Aderik:** Integrated a Python OCR service using PaddleOCR, exposed through a Flask API, with the Node.js backend to validate student IDs during registration.

**Technical draft (preferred for backend / AI-oriented applications):**

> Integrated a Python-based OCR service using PaddleOCR and a Flask API with the Node.js backend to automate student ID validation during registration.

**Impact-oriented draft (use only if the workflow behavior is verified):**

> Built an OCR-assisted student ID verification workflow to reduce reliance on manual ID checking during registration and streamline the onboarding process.

**Keywords:** Multi-service architecture, PaddleOCR, Flask API, Python, Node.js, OCR, automated verification.

**Verification notes:** Confirm whether OCR verification is fully automatic or assists a user who reviews the result; whether matching is against a typed ID, database value, or another source; how failures/timeouts are handled; and whether this flow is active in the current build. Do not claim a measured reduction in registration time or error rate unless there is evidence.

### Feature 2 — Cross-platform architecture and deployment

**Core contribution described by Aderik:** The application is intended to support web, desktop, and mobile access, using React with Electron for desktop and Capacitor for mobile packaging.

**Technical draft (preferred for architecture-oriented applications):**

> Contributed to a cross-platform health record system built with React, using Electron for the desktop application and Capacitor to package the experience for mobile devices.

**Impact-oriented draft (only describe deployments that have actually been built and tested):**

> Helped extend a shared React application across web, desktop, and mobile delivery targets, adapting the experience for clinic staff and student users.

**Keywords:** Cross-platform deployment, React, Electron, Capacitor, responsive design, shared frontend.

**Verification notes:** Confirm the exact React version (React 19 was supplied in the draft but should be checked against `package.json`/lockfile), which modules/platforms are currently functional, whether Electron and Capacitor builds were successfully produced, and which platforms are deployed versus only configured. Avoid saying “deployed across Web, Desktop, and Mobile” unless all three targets are actually deployed and testable. Describe role-specific audiences only if the current product supports that distinction.

### Feature 3 — Medical workflow and relational data validation

**Core contribution described by Aderik:** Implemented a multi-phase medical examination workflow (history followed by clinical examination) and appointment scheduling, using Zod schema validation and Supabase/PostgreSQL data storage.

**Technical draft (preferred for backend / full-stack applications):**

> Implemented a structured, multi-stage medical examination workflow and appointment scheduling, using Zod for input validation and Supabase PostgreSQL to persist related application data.

**Impact-oriented draft (describe as a design goal unless measured results exist):**

> Digitized a multi-stage medical examination workflow, organizing medical-history and clinical-examination data in a consistent process to support clearer recordkeeping and retrieval.

**Keywords:** Workflow digitization, business logic, state management, Zod validation, relational database design, PostgreSQL, appointment scheduling.

**Verification notes:** Confirm the exact sequence and names of examination stages, where Zod validation is applied, the relevant data relationships, and whether “state management” refers to a specific implementation that can be explained in an interview. Do not claim that errors or retrieval time were reduced by a measured amount without test results or before/after measurements.

### Recommended MediTrack case-study order

1. Start with a concise project overview and Aderik's frontend/backend role.
2. Feature the **OCR verification pipeline** as the technical hook.
3. Explain the **cross-platform delivery architecture**, distinguishing configured targets from verified builds/deployments.
4. Explain the **medical examination and appointment workflow** as the business-logic example.
5. Close with challenges, trade-offs, lessons learned, and only evidence-backed outcomes.

Use the technical drafts as the safer initial copy. The impact-oriented versions are alternatives, not permission to claim quantified improvements. If no metrics exist, focus on the capability implemented and the problem it is designed to address.

### Suggested case-study visual evidence

* A sanitized diagram: React client(s) → Node.js API → database, with the Flask/PaddleOCR service shown as a separate OCR component. Confirm the actual request flow before drawing it.
* A redacted example of the OCR registration flow using synthetic/non-real student ID data only.
* A screenshot of the examination workflow populated with mock data, not real patient records.
* A platform/build overview only for targets that have actually been tested.

These visuals should be based on the actual implementation; do not create fake screenshots that imply unfinished features are working.

## 4A. Expandability: add future projects without redesigning the site

**Requirement:** The portfolio must remain easy to extend as Aderik completes more projects. Adding a project should be a content/data task, not a component rewrite.

### Implementation rule

* Keep project content in one central file such as `src/data/projects.js` (or `projects.ts` if TypeScript is selected).
* Each project is one object with a stable `slug`, `title`, short summary, status, role, project type/date when verified, technology list, optional image paths and alt text, optional case-study content, and optional links.
* Model links explicitly: GitHub repository, live demo, case-study route, and/or screenshots. Omit absent links entirely; never render fake buttons or `#` destinations.
* The reusable `ProjectCard` and project listing should render from the project array. Do not hard-code one component per project or special-case MediTrack/CRM in the layout.
* Use a shared case-study template driven by each project's content. If a project does not yet have a full case study, show only the available approved fields.
* Store images under a predictable path such as `src/assets/projects/<project-slug>/`; optimize images and check for secrets, personal data, or confidential information before committing.
* Add optional fields defensively so a project without a demo, image, repository, or date still renders cleanly.
* Keep sorting/order intentional, e.g. a `featured` flag and `order` value, rather than relying on accidental array behavior.

### Future-project workflow

1. Create a new project image folder if screenshots are available and approved.
2. Add one new project object to the central project data file.
3. Include only verified details and the links that actually exist.
4. Add a case-study page/content only when there is enough material; otherwise the card can link directly to the repository.
5. Run lint/build checks and test the new card on mobile and desktop.
6. Verify links, image alt text, and public-data safety before deploying.

**Acceptance test:** Adding a third project should require no edits to `ProjectCard`, the project grid, or shared case-study layout. A developer should be able to add future projects by following a short README section titled “Adding a Project.”

## 5. Technical decisions

### Recommended baseline

* React + Vite.
* JavaScript or TypeScript: ask Claude Code to inspect Adi's
  preference and choose TypeScript if he is comfortable maintaining
  it; otherwise use JavaScript consistently. Do not mix without a
  reason.
* React Router only if dedicated project routes are justified by the
  content.
* Plain CSS with custom properties and reusable class conventions,
  unless a utility framework is explicitly chosen after checking the
  existing environment.
* ESLint and a formatter if the starter project does not already
  provide consistent linting/formatting.
* Git for version control.
* No database or user accounts for the portfolio unless a real
  requirement emerges.
* Keep secrets out of `VITE_*` variables: Vite exposes those values to
  client-side code.
* Keep the portfolio independent from MediTrack's backend. Do not
  reuse its credentials, private APIs, production database, or
  authentication system.

### Suggested project structure

```text
adi-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── resume.pdf                 # Add only after the public CV is approved
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── projects/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ContactForm.jsx
│   ├── data/
│   │   ├── projects.js              # Single source of truth for all project cards/case studies
│   │   └── portfolio.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── components.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example                  # Only if public configuration is needed
├── .gitignore
├── CLAUDE.md
├── index.html
├── package.json
└── README.md
```

Claude Code may adjust this structure if the project starter or selected
router calls for it. Avoid creating files that have no clear purpose.

## 6. Phase-by-phase implementation plan

**Execution rule:** Complete one phase at a time. At the end of each
phase, run its checks, summarize changed files and decisions, list
unresolved questions, and stop for review. Do not start the next phase
until the current phase passes its acceptance criteria or Adi explicitly
approves a documented exception.

### Phase 0 --- Inspect the environment and establish project boundaries

**Goal:** Understand the existing workspace before making changes.

Tasks: 1. Inspect the current directory, existing files, package
manager, Node version, and Git status. 2. If the directory contains an
existing project, do not overwrite it. Summarize its structure and ask
before destructive changes. 3. Confirm whether this should be a new
standalone portfolio repository. 4. Check installed Node.js and npm
versions. 5. Identify available CV, photo, project screenshots, and
links without assuming they are present. 6. Do not copy secrets or
configuration from MediTrack or CRM into this portfolio.

Acceptance criteria: - Existing files are preserved. - A concise
workspace report is produced. - Any potentially destructive operation is
approved before execution. - Missing content is recorded as a content
checklist, not fabricated.

### Phase 1 --- Content audit and professional positioning

**Goal:** Establish an accurate source of truth for the portfolio
content.

Tasks: 1. Request/review the CV. 2. Confirm the public name, official
degree/program wording, institution, expected graduation date, and
public contact details. 3. Confirm the MediTrack public links, status, team context, and Aderik’s personal contributions. For CRM, use the supplied repository URL <https://github.com/Adk-gh/SM_CRM>; record status as completed/source-code-only/no live demo unless updated. 4. Create
a content matrix with fields: item, confirmed fact, source/evidence,
publication approval, and outstanding question. 5. Draft a short
professional introduction and project summaries from verified
information. 6. Identify any confidential information that must not
appear publicly. 7. Mark all unknown metrics as omitted; never estimate
them.

Deliverables: - `docs/CONTENT_AUDIT.md` - Verified project facts and a
list of assets still needed. - Draft homepage copy for approval.

Acceptance criteria: - No invented employment, dates, results, metrics,
skills, or project claims. - Team contributions are distinguished from
individual contributions. - The content audit clearly separates
confirmed, unverified, and intentionally omitted details.

### Phase 2 --- Wireframes and visual system

**Goal:** Agree on the site's hierarchy before building all components.

Tasks: 1. Define palette tokens based on cream, forest green, and soft
gray. 2. Establish typography, spacing, widths, borders, button states,
focus states, and image ratios. 3. Create simple desktop and mobile
wireframes for the homepage and project case-study presentation. 4.
Define navigation and mobile behavior. 5. Decide whether project case
studies need dedicated routes. 6. Review contrast, hierarchy, and
content density. 7. Explicitly exclude gradients and decorative effects
that do not improve usability.

Deliverables: - `docs/DESIGN_SPEC.md` - Wireframe descriptions or simple
in-repository wireframes if helpful. - Approved component and responsive
behavior list.

Acceptance criteria: - The layout reads as corporate + technical, not a
generic animated template. - Warm background and green accent are
consistent. - Desktop and mobile layouts are both specified. - The
professional photo and project imagery have clear intended placements.

### Phase 3 --- Initialize React + Vite

**Goal:** Create a clean, runnable project.

Tasks: 1. Initialize React + Vite in the approved directory. 2. Choose
JavaScript or TypeScript consistently. 3. Install only necessary
dependencies. 4. Configure linting and formatting as appropriate. 5. Add
semantic HTML app shell, global styles, design tokens, and responsive
container utilities. 6. Add initial page title and favicon placeholder.
7\. Create a README with setup, development, build, and preview commands.
8\. Initialize or verify Git and ensure `.env`, secrets, build outputs,
and private assets are ignored as appropriate.

Acceptance criteria: - The development server starts successfully. - The
production build succeeds. - Linting succeeds, if configured. - No
unrelated files have been changed. - Dependencies are justified and
minimal.

### Phase 4 --- Build the shared layout and responsive navigation

**Goal:** Establish the site's reusable frame.

Tasks: 1. Implement Header, navigation, buttons, section headings, and
Footer. 2. Use semantic landmarks and logical heading order. 3. Make the
mobile navigation usable by keyboard and screen reader. 4. Add visible
focus indicators and clear hover/active states. 5. Ensure navigation
anchors scroll to the right sections without hiding headings under a
sticky header. 6. Add a skip-to-content link if appropriate. 7. Test at
narrow mobile, tablet, laptop, and wide desktop sizes.

Acceptance criteria: - Navigation works with keyboard and pointer. - No
horizontal overflow at small widths. - Focus indicators are visible. -
The header is restrained and does not dominate the page. - No gradients
are present.

### Phase 5 --- Build the homepage and content sections

**Goal:** Implement the full portfolio content in a coherent order.

Suggested build order: 1. Hero with approved name, headline, supporting
copy, photo, and calls to action. 2. Featured project cards. 3. About.
4\. Experience. 5. Skills. 6. Education. 7. Résumé action. 8. Contact. 9.
Footer.

Tasks: - Use reusable components and data-driven project cards. Project entries must live in one central file (for example, `src/data/projects.js`) so future projects can be added by appending an object and supplying approved assets/links, not by editing the card component or duplicating layout code. - Keep
copy concise and evidence-based. - Add real photo and project
screenshots only after they are supplied and approved. - Use descriptive
alt text; mark purely decorative images appropriately. - Make missing
external links visibly absent rather than pointing to `#` or dummy
URLs. - Ensure every CTA has a real destination or is disabled/omitted
until configured.

Acceptance criteria: - All requested sections exist. - Content hierarchy
is clear. - No lorem ipsum, fake metrics, fake testimonials, fake
badges, or invented credentials remain. - Buttons and links work. - The
site remains usable without animations.

### Phase 6 --- Create MediTrack and CRM case studies

**Goal:** Demonstrate engineering ability and personal contribution.

Tasks for each project: 1. Confirm its name, purpose, status, and
audience. 2. State Adi's role and team contributions precisely. 3.
Explain the problem, approach, key features, architecture at a safe
level, challenges, and lessons. 4. List only technologies actually used
and understood by Adi. 5. Add sanitized screenshots and alt text. 6. Add
repository/demo links only after testing them. 7. Label
unavailable/private repositories honestly. 8. Check screenshots for
personal information, secrets, access tokens, real records, and
sensitive data. 9. Keep the writing understandable to recruiters and
technically meaningful to developers.

MediTrack verification checklist: - Confirm project title and official
institution naming. - Confirm which features were implemented by Adi and
which by teammates. - Confirm which modules are complete and which are
prototypes/in progress. - Confirm what can be shown publicly. - Verify
the deployed URL and its current behavior. - Do not disclose
credentials, database schemas that should remain private, patient
information, or internal operational details.

CRM verification checklist: - Repository supplied: <https://github.com/Adk-gh/SM_CRM>; test public access and inspect the README/package files before launch. - Confirm exact project name, use case, feature list, stack, and individual contribution. - CV-listed features may be used as the initial draft, but do not claim sole ownership of team deliverables. - Do not reuse MediTrack descriptions for CRM. - No live demo button unless a deployment is created and tested.

Acceptance criteria: - Every project claim is verifiable. - Individual
contribution is distinguishable from team effort. - No private data or
secrets appear. - All project links have been tested. - Case studies
describe decisions and learning, not just feature lists.

### Phase 7 --- Résumé, contact form, and external links

**Goal:** Make it easy for visitors to learn more and contact Adi.

Tasks: 1. Add the approved public PDF résumé and test the download/open
behavior. 2. Confirm GitHub and any other professional profile URLs. 3.
Implement the contact form only after choosing its delivery mechanism.
4\. Prefer a reputable form provider or a minimal serverless/backend
endpoint. 5. Keep private API keys server-side; never put secrets in
Vite-exposed environment variables. 6. Validate fields, show
loading/success/error states, handle failure gracefully, and add
proportionate spam protection. 7. Test delivery to the intended inbox
and check spam-folder behavior. 8. Provide a `mailto:` fallback if
useful. 9. Do not claim the form works until a real end-to-end
submission has been tested.

Acceptance criteria: - Résumé is the intended public version and
contains no unnecessary sensitive data. - Social/repository links are
correct. - Contact form delivery is verified end to end, or the site
uses a clearly functional email link instead. - No secrets are present
in source control or the built client bundle.

### Phase 8 --- SEO, accessibility, performance, and quality assurance

**Goal:** Prepare the site for public use.

SEO tasks: - Set a unique, accurate page title and meta description. -
Set canonical URL after a domain is chosen. - Add Open Graph and
social-sharing metadata with a real preview image. - Add a favicon. -
Configure `robots.txt` and sitemap if appropriate for the final
deployment. - Ensure link text and headings are descriptive. - Avoid
publishing personal details that are not intended to be public.

Accessibility tasks: - Check semantic landmarks and heading hierarchy. -
Test keyboard navigation and focus visibility. - Check text contrast
against WCAG AA targets. - Test labels, validation, and announcements
for form status. - Ensure image alternatives are meaningful. - Respect
`prefers-reduced-motion`. - Test at 200% zoom and with a narrow
viewport.

Performance tasks: - Compress and size images appropriately. - Lazy-load
below-the-fold imagery where appropriate. - Avoid unnecessary animation
and heavy dependencies. - Check browser console and network errors. -
Run Lighthouse or equivalent checks when available.

Manual QA checklist: - \[ ] Homepage and every section render
correctly. - \[ ] Desktop, tablet, and mobile layouts work. - \[ ] No
horizontal overflow. - \[ ] All internal navigation links work. - \[ ]
All external links are correct and open as intended. - \[ ] GitHub and
live-demo links work. - \[ ] Résumé file loads correctly. - \[ ]
Contact submission works end to end, or the fallback email link works. -
\[ ] Images load and have appropriate alt text. - \[ ] No fake content
or unfinished placeholder is visible. - \[ ] No secrets or private
information appear in the repository or build. - \[ ] Production build
and lint checks pass. - \[ ] Browser console has no unexplained errors.

Acceptance criteria: - Critical accessibility and functionality issues
are resolved. - All links and forms have been tested. - Production build
passes. - Any known limitation is documented rather than hidden.

### Phase 9 --- Choose hosting and deploy

**Goal:** Publish the portfolio reliably.

Hosting decision: - **Vercel** is a good default for a static React +
Vite portfolio and simple deployment from Git. - **Render Static Sites**
is also suitable, particularly if Adi prefers to keep deployment
alongside existing Render-hosted projects. - **GitHub Pages** can work
for a static portfolio, but base paths and routing require attention. -
A custom domain is optional and can be added after the first deployment.

Tasks: 1. Choose the host based on ease of use, free-tier terms, domain
plans, and any form backend. 2. Push the approved project to a new
repository. 3. Configure build command (usually `npm run build`) and
output directory (`dist`) as required by the host. 4. Set environment
variables only if needed, and keep secrets server-side. 5. Configure
custom domain and HTTPS if desired. 6. Test the deployed URL on mobile
and desktop. 7. Verify the social preview, résumé download, image paths,
form delivery, and all external links. 8. Confirm that refresh/deep
links work if routing is enabled.

Acceptance criteria: - A public HTTPS URL is available. - The production
build is deployed successfully. - Critical paths work on the actual
deployed site. - No local-only URLs or development placeholders
remain. - The repository README explains how to maintain and redeploy
the site.

### Phase 10 --- Final review and ongoing maintenance

**Goal:** Make the portfolio trustworthy and easy to keep current.

Tasks: 1. Review the entire site as a recruiter and as a developer. 2.
Ask Adi to verify every personal and technical claim. 3. Confirm
permission to publish the photo, résumé, screenshots, and links. 4.
Record any future enhancements separately rather than expanding scope
without need. 5. Add a short update guide for new projects and skills.
6\. Recheck external links and form delivery periodically.

Acceptance criteria: - Adi approves the public content. - All known
issues are fixed or explicitly accepted. - A repeatable update and
deployment process is documented.

## 7. Claude Code working agreement

Create a root-level `CLAUDE.md` containing the following rules (adapt
paths and scripts to the actual repository):

```Markdown
# Claude Code Instructions — Adi's Portfolio

## Product goal
Build a professional, minimalist, corporate + technical portfolio for Aderik
“Adi”, a BSIT Software Development student presenting as a developing full-stack
software developer.

## Non-negotiable design constraints
- Warm cream background, forest-green accent, soft gray and charcoal text.
- No gradients.
- No excessive animations, animated typing, parallax, cursor effects, or
  decorative interactions without a clear usability purpose.
- Prefer typography, spacing, alignment, borders, and real project evidence.
- Mobile-first and accessible.

## Accuracy and privacy
- Never invent skills, experience, dates, awards, results, metrics, or project
  features.
- Distinguish individual work from team work.
- Treat unverified details as questions, not facts.
- Never expose API keys, credentials, patient records, private data, or secrets.
- Do not copy MediTrack credentials or private backend configuration.

## Engineering
- Inspect existing files before editing.
- Make focused changes and avoid unrelated refactors.
- Use reusable React components and consistent CSS tokens.
- Keep dependencies minimal and explain why a new dependency is needed.
- Use semantic HTML, keyboard support, visible focus, and reduced-motion support.
- Never leave broken `#` links or pretend a form is operational.
- Keep secrets out of client-side Vite environment variables.
- Do not overwrite user files or perform destructive operations without approval.

## Phase workflow
- Work on only the current approved phase.
- Before editing, state the goal and files likely to change.
- After implementation, run relevant checks and report the results honestly.
- Summarize changed files, decisions, test results, and remaining blockers.
- Stop for review at each phase boundary.
- Do not claim a test passed unless it was actually run and passed.

## Completion standard
A feature is done only when it works at desktop and mobile sizes, has accurate
content, handles relevant error states, and has passed its stated checks.
```

## 8. How to work with Claude Code

1. Create a new, dedicated folder/repository for the portfolio.
2. Save this plan as `PORTFOLIO_IMPLEMENTATION_PLAN.md` at the
   repository root.
3. Add `CLAUDE.md` using the working agreement above.
4. Open the folder in VS Code and start Claude Code in that directory.
5. Ask it to perform **Phase 0 only**. Have it inspect and report
   before changing files.
6. Review the output, then approve the next phase explicitly.
7. Keep the plan and `CLAUDE.md` updated if a decision changes.
8. Commit after each approved phase so you can revert mistakes safely.

### Suggested first prompt for Claude Code

```text
Read PORTFOLIO_IMPLEMENTATION_PLAN.md and CLAUDE.md in full.

We are beginning Phase 0 only. Inspect the current workspace, its files, package
manager, Node/npm versions if available, and Git status. Do not build the site
yet, do not install dependencies, do not overwrite files, and do not perform
destructive actions.

Report:
1. What exists in the workspace.
2. Whether it appears to be a new or existing project.
3. What needs confirmation before setup.
4. Any risks or conflicts with the plan.
5. A proposed next step for approval.

Do not proceed to Phase 1 or later until I explicitly approve it.
```

## 9. Recommended initial deployment decision

Start with a static React + Vite site and defer the final host decision
until the production build works. Vercel is the simplest default to
evaluate first; Render Static Sites is a sensible alternative. The
contact form may influence the final choice depending on the selected
provider, but it should not require a full custom backend unless there
is a real need.

Do not add a database, authentication, admin dashboard, blog CMS, or
complex animation system to the initial version. Those would increase
maintenance without being necessary for the stated goal.

## 10. Final pre-launch checklist

* [ ] CV reviewed and public version approved.
* [x] Preferred public name recorded as Aderik “Adi” Bermas.
* [ ] Confirm exact homepage headline wording.
* [ ] Education wording and dates verified; ensure the BSIT is shown as in progress and do not imply graduation.
* [ ] MediTrack role and features verified.
* [x] CRM GitHub URL supplied: <https://github.com/Adk-gh/SM_CRM>; verify public access before launch. Project remains source-code-only unless a live demo is built and tested.
* [ ] CRM details and individual contribution verified.
* [ ] Skills verified against real experience.
* [ ] Professional photo approved.
* [ ] Project screenshots reviewed for sensitive information.
* [ ] GitHub and demo links tested.
* [ ] Résumé download tested.
* [x] Public email confirmed: `itsmeaderik@gmail.com`; email-only contact preference recorded. Test the email link or form before launch.
* [ ] No gradients or unnecessary effects.
* [ ] Responsive and accessibility checks completed.
* [ ] SEO/social metadata checked.
* [ ] Production build passes.
* [ ] Deployment tested over HTTPS.
* [ ] No secrets or private information exposed.
* [ ] Adi approves the final published content.

***

## Open questions to resolve when assets are available

These are the remaining content decisions that cannot be settled reliably from the current planning answers and supplied CV:

1. **CV:** Which education details, skills, experience, and accomplishments from the CV are current and approved for publication?
2. **MediTrack:** What did Adi personally implement, what did the team
   implement, and which public links/screenshots can be shared?
3. **CRM:** The repository URL is <https://github.com/Adk-gh/SM_CRM>. Confirm repository access, exact public project name, and which parts Aderik personally implemented. The current status is completed source code on GitHub with no live demo.
4. **Contact:** Public email is confirmed as `itsmeaderik@gmail.com`; email is the only desired public contact method. Choose a form provider only if a contact form is preferred over a direct email link.
5. **Public identity and education:** The preferred public name is Aderik “Adi” Bermas. Aderik is still a BSIT student and has not graduated. Confirm whether the homepage headline should retain “Aderik B. Software Developer | BSIT,” and verify official program wording and expected graduation date before publishing one.
6. **Deployment:** Does Adi want a custom domain, or is a free hosted
   subdomain sufficient for the first release?

Until those details are confirmed, Claude Code should build the
structure and styling but must not fabricate final personal content.

***

# CV Addendum — Verified Portfolio Content

This addendum incorporates information from the CV supplied by Aderik. Treat it as the initial content source, and confirm details with Aderik before publishing. Do not invent missing information.

## Professional positioning

The CV describes Aderik as a current Bachelor of Science in Information Technology student specializing in Software Development; Aderik confirms he has not graduated, with hands-on web application experience using React.js, Node.js, Express.js, Supabase, and PostgreSQL. It specifically mentions authentication, role-based access control, database-driven applications, and deployment.

Use **Aderik “Adi” Bermas** as the preferred public display name. The requested homepage headline, **“Aderik B. Software Developer | BSIT”**, can remain the headline if it reads naturally alongside that name. A concise supporting statement may be drafted from the CV summary, then approved by Aderik.

## Featured project 1: MediTrack Health Record Management System

**CV details**

* Role: Programmer
* Context: Capstone project
* Dates: April 2026–Present
* Technologies listed: React.js, Node.js, Supabase, PostgreSQL, Python
* CV-described contributions:
  * Developed a health record management system for secure storage and management of patient data.
  * Implemented authentication and role-based access control to restrict access to sensitive patient information.
  * Built the frontend with React.js and integrated Supabase/PostgreSQL for data management.
  * Deployed the application on Render.

**Portfolio treatment:** Make MediTrack the lead case study. Explain the problem, Aderik’s specific contribution, relevant technical decisions, and what he learned. Aderik has clarified his role spans both frontend and backend. Confirm which specific features he personally built, current project status, and public demo/repository links. The broader project context includes areas such as consultations, announcements, health analytics, medical/dental workflows, and OCR, but these must not be attributed to Aderik without confirmation. Never expose real patient data, secrets, credentials, or private operational information.

## Featured project 2: Customer Relationship Management System (CRM)

**CV details**

* Role: Programmer
* Context: System Integration Project (SIA)
* Dates: November 2025–December 2025
* Technologies listed: React.js, Tailwind CSS, Firebase (Hosting, Firestore/Realtime Database), Chart.js
* CV-described contributions:
  * Collaborated with a team on a CRM web application for customer profiles and support tickets.
  * Set up login and real-time database updates using Firebase.
  * Designed a responsive interface with React and Tailwind CSS.
  * Added Chart.js visualizations for customer activity and trends.

**Confirmed status:** The CRM project is completed, and its source code is available on GitHub; there is no live demo at present. **Portfolio treatment:** Use this as the second case study to demonstrate experience in a different application domain. Link to the GitHub repository only after the URL and repository visibility are verified. Do not show a “Live Demo” button unless a working deployment is created and tested. Screenshots can be captured by running the project locally, if it can still be run. Confirm the exact project name, which Firebase database was used, and the division of work among team members. Do not claim sole ownership of team deliverables.

## Education

The CV lists:

* **Bachelor of Science in Information Technology** — Dalubhasaan ng Lungsod ng San Pablo, 2023–present.
* **Technical-Vocational — Information Communication Technology** — Crecencia Drusila Lopez Senior High School, 2021–2023.

Confirm the official spelling of the institution and program names and whether to display an expected graduation date. Until verified, use “BS Information Technology student” or “Bachelor of Science in Information Technology (in progress).”

## Skills and strengths listed in the CV

Technical skills:

* React.js, Tailwind CSS, Node.js, Express.js
* HTML, CSS, JavaScript, Python
* SQL, PostgreSQL, Firebase, Supabase
* Git, GitHub
* Basic troubleshooting and IT support
* Microsoft Word, Excel, and PowerPoint

Soft skills:

* Organization and task management
* Written and verbal communication
* Attention to detail and confidentiality
* Customer service and client support
* Teamwork, collaboration, and interpersonal skills

Languages listed: English and Tagalog.

Only include skills Aderik is comfortable explaining in an interview. Avoid arbitrary skill percentage bars and unsupported proficiency labels. Prefer linking skills to the project work that demonstrates them.

## Privacy and contact details

The CV contains a phone number, a residential address, and `itsmeaderik@gmail.com`. Aderik has confirmed that `itsmeaderik@gmail.com` is the public contact email and that contact should be email-only. Do not publish the phone number or full residential address by default. Review a public-safe résumé PDF for unnecessary personal information before placing it in the site's `public/` folder.

## Updated remaining questions

Confirmed planning choices: use **Aderik “Adi” Bermas** as the preferred public name; describe him as a **current BSIT student who has not graduated**; present MediTrack as work across both frontend and backend while checking feature-level ownership; use **`itsmeaderik@gmail.com`** as the email-only public contact; and describe the CRM as a completed academic project with source code at <https://github.com/Adk-gh/SM_CRM> but no live demo currently. The site must support adding future projects through a central data file without changing reusable UI components.

1. Which MediTrack features did Aderik personally implement, and which were implemented by teammates? His contribution scope is confirmed as frontend and backend, but feature-level ownership remains unverified. Which modules are complete and safe to demonstrate?
2. The CRM repository URL supplied by Aderik is <https://github.com/Adk-gh/SM_CRM>; confirm it is publicly accessible and verify the exact project display name.
3. Public contact email is confirmed as `itsmeaderik@gmail.com`; choose a contact-form provider only if using a form instead of a direct email link.
4. Is the uploaded CV approved for public download as-is, or should a public-safe version be prepared?
5. Is a free hosted subdomain sufficient for the first launch, or does Aderik want a custom domain?

Until these details are confirmed, Claude Code may build the layout and components but must not invent personal claims, project results, dates, or working links.

## Portfolio copy recommendations — current draft direction

**Hero name:** Aderik “Adi” Bermas

**Headline:** Keep “Aderik B. Software Developer | BSIT” as the requested starting point, but review it before launch because it may read more naturally as “Software Developer · BSIT Student.” Do not silently replace the requested wording; obtain approval.

**Provisional supporting copy (approve before publication):** “I’m a BSIT student focused on software development, building web applications across frontend interfaces, backend services, and database-driven workflows.” This is based on the CV and confirmed frontend/backend scope, but should be approved by Aderik.

**MediTrack card:** “A cross-platform health record management system developed as a capstone project. My contribution spans frontend and backend development.” Confirm exact features, team split, and current deployment before adding specifics.

**CRM card:** “A completed academic CRM project available as source code on GitHub.” Add technologies and feature bullets only after verifying them. Use a **GitHub repository** link only; omit the live-demo button until a deployment exists and is tested.

**Contact:** Use `itsmeaderik@gmail.com` as the only public contact channel. If no email-delivery service is configured and tested, use a functional `mailto:` link rather than a decorative or nonfunctional form. Do not publish the CV phone number or residential address by default.

**Unverified details must remain marked for confirmation in the working documents:** CRM repository accessibility and exact public name; feature-level contribution boundaries on both projects; current MediTrack deployment and public-safe modules; official institution/program spellings; expected graduation date; public résumé/photo/screenshots approval; and hosting/domain choice. The public email and CRM repository URL have been supplied by Aderik.

***

## Planning Update — October 27, 2026

The following clarifications were supplied directly by Aderik and supersede older open questions in this document:

* **Public name:** Aderik “Adi” Bermas.
* **Student status:** Currently a BSIT student; has not graduated. The portfolio must not describe him as a graduate or imply the degree is complete.
* **MediTrack:** Contribution spans frontend and backend. Use the features listed in the supplied CV as the draft content basis, while distinguishing project/team features from personal ownership where needed.
* **CRM repository:** <https://github.com/Adk-gh/SM_CRM>
* **CRM status:** Completed academic project; source code only at present, with no live demo. Do not show a live-demo button unless a deployment is later created and tested.
* **Public contact:** `itsmeaderik@gmail.com`; email only. Do not expose phone or home address by default.
* **Maintainability:** New projects must be addable through a central data file, with reusable project cards and case-study templates. Adding a project should not require rewriting shared components.

### Still requiring confirmation

* The official institution/program spelling and expected graduation date.
* Whether the CRM repository is publicly accessible and its final display title.
* The exact boundaries of Aderik’s individual contributions to each CV-listed project feature.
* Approved professional photo, public résumé PDF, and safe project screenshots.
* Current public MediTrack repository/demo links and what may be shown publicly.
* Professional profile links and hosting/domain choice.

## Planning Update — MediTrack feature details supplied by Aderik

Aderik has now identified three major MediTrack contribution areas for the portfolio draft:

1. **OCR-based student ID verification:** PaddleOCR in a Python/Flask service integrated with the Node.js backend.
2. **Cross-platform architecture:** React application targeting web, Electron desktop, and Capacitor mobile.
3. **Medical workflow logic:** Multi-phase medical examinations and appointment scheduling, with Zod validation and Supabase/PostgreSQL.

Use the draft descriptions in Section 4B. Feature ownership is treated as supplied by Aderik, while implementation state, exact versions, deployment status, workflow details, and measurable impact remain verification items. In particular, do not state that registration time, error rates, or record retrieval time were reduced unless Aderik can support that claim with measurements or documented evaluation.
