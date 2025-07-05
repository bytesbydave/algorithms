# Front-End Engineering Interview Prep

## Building a Responsive, Accessible Web Page with HTML5, CSS3, and JavaScript

### Semantic Markup

- Use semantic HTML5 elements (`<h1>`, `<header>`, `<p>`, `<footer>`) for meaningful structure and accessibility.
- Prefer relative font units (`em`, `rem`, `%`) for better scalability.
- Ensure proper heading hierarchy and use ARIA labels where necessary.

### Responsive Design

- Use CSS3 media queries to adapt layouts for different devices.
- Set breakpoints based on content needs, not just device sizes. Use `min-width` or `max-width` as appropriate.
- **Example:**

```

@media screen and (max-width: 600px) {
body {
font-size: 1.1em;
}
}

```

- Mobile-first: Start with the smallest screen and enhance for larger devices.

### Accessibility Best Practices

- Ensure sufficient color contrast for readability.
- Use descriptive `alt` attributes for images.
- Use responsive images with `srcset` and `sizes` attributes.
- **Note:** SVGs may cause screen reader issues—test thoroughly.

### Images

- Use responsive images:

```

```

- Choose formats (JPEG, WebP, SVG) based on use case and accessibility.

---

## Common Performance Bottlenecks in Front-End Development

- **Large JavaScript Bundles:** Use code splitting and tree shaking.
- **Blocking Analytics/Ads:** Load scripts asynchronously or defer them.
- **Heavy Images:** Optimize and use modern formats.
- **Unoptimized CSS:** Remove unused CSS and use critical CSS for above-the-fold content.

---

## Key Benefits of Using TypeScript in Large-Scale Applications

- **Improved Code Understanding:** Explicit interfaces aid collaboration.
- **Editor Support:** IntelliSense provides autocompletion and inline type info.
- **Early Error Detection:** Type safety catches bugs during development.

---

## Describe a project where you used React? What were some of the challenges you faced and how did you overcome it?

**Challenges:**

- Large shared components, multiple engineers, merge conflicts.
- Risk of inconsistent component behavior.

**Solutions:**

- Break components into small, pure, reusable functions.
- Prioritize critical issues.
- Clear ownership and communication.

---

## Tooling: Webpack, npm, Yarn

- **Webpack:** Handles bundling, code splitting, asset optimization. Minimal config unless needed.
- **npm/Yarn:** Manage dependencies, scripts, and versions.
- **Artifactory:** Store custom/public packages securely.
- **Dependabot:** Automate dependency updates and security patches.

---

## What is your approach to Managing Dependencies & Optimizing Build Performance

- Use npm/Yarn for dependency management.
- Store packages in a private registry (e.g., Artifactory).
- Use Dependabot/GitHub Actions for automated updates and security.

---

## Designing Scalable and Maintainable Front-End Architectures

- Break UI into small, reusable components.
- Support variants via props or slots.
- Prefer composition over inheritance.
- Separate logic and presentation.
- Document components and usage.

---

## MVC Pattern in Modern Front-End

- **Model:** State management (e.g., Redux).
- **View:** UI components (React/Vue).
- **Controller:** Component logic, hooks, or methods.

---

## Describe a time you had to Refactor a Legacy Codebase. What was your strategy?

- **Why:** Modernize, improve maintainability, address technical debt, keep it alive?
- What sort of refactor? like changing class to components?
- **How:** Remove unused code, convert class to functional components, eliminate duplication, update dependencies.

---

## WordPress in Headless/Integrated Architectures

- Used CMS as APIs (REST/GraphQL).
- Used Sitecore as an API at Comcast
- Kibo as an integrated architecture - pivoting to headless architecture

---

## Ensuring Performance and Security on Salesforce.com Marketing Sites

- Use Lighthouse for audits.
- Implement CORS and Content Security Policy (CSP).
- Enforce HTTPS, use web application firewalls, keep dependencies updated.
- Enable OAuth and follow OWASP Top 10.

---

## Staying Current with Web Standards

- Research tasks as needed and read documentation.
- Engage in professional communities and follow browser/standards updates.

---

## You notice a significant drop in performance on a key landing page. Walk us through how you would identify and resolve the issue. Diagnosing and Resolving Performance Drops. What tools or metrics will you use?

- Use monitoring tools (Kibana, logs) to identify spikes in errors or load times.
- Confirm tracking codes are intact and filters
- Collaborate with other teams to rule out network/back-end issues
- Check logs to see any recent changes
- Validate fixes with metrics, profiling tools, and user feedback.

---

## Designing Reusable UI Components

- Make components data-agnostic; accept data/render logic via props.
- Use render props or slots for customization.
- Separate data fetching from presentation.
- Add type safety and write tests.
- Document usage and provide examples.

### Ensuring Performance and Maintainability

- Break into modules; use memoization to optimize rendering.
- Keep APIs simple and well-typed.
- Lazy load heavy subcomponents.
- Maintain clear documentation and add tests.

---

### Evaluating Legacy Frameworks: Refactor, Rewrite, or Leave As-Is

- Consider user base, feature development, performance, error rates, business needs.
- Weigh value and risk of refactoring vs. rewriting or maintaining.

### How would you implement CI/CD?

1. Set up version control
- Establish branching strategies (feature branches, main/master) to organize development and code reviews

2. Automate Build Process
- configue a build automation tool (Jenkins, GitLab, Github Actions) to automatically compile and package code when changes are made to the repository

3. Integrate Automated Testing
- Integrate tests into CI pipeline, so they run after each build

4. Continuous Integration
- Set up to trigger builds and tests automatically on code commits

5. Continuous Delivery/Deployment
- Automate deployment process to staging and production environments using tools like Docker, Kubernetes
- ensure the application is always in a deployable state, but require a manual trigger for Prod

6. Monitor and Secure pipeline
- implement monitoring and logging to track deployments and system health
