# RADIO Technique

## Overview

The RADIO technique provides a structured approach to system design interviews, focusing on Requirements, Architecture, Data, Interface, and Optimizations. This guide outlines each step with clear sections, tables, and formatting for readability.

---

## Requirements Exploration (15%)

**Goals:**

- Understand the problem and determine scope.
- Ask clarifying questions to align on expectations.

**Key Questions:**

- What are the main use cases to focus on?
- What are the unique aspects or features of the product?

**Example Clarification:**

> "Let me make sure I understand the question."

### Types of Requirements

| Type           | Description                                           | Examples                     |
| -------------- | ----------------------------------------------------- | ---------------------------- |
| Functional     | Core features and behaviors required for the project. | Posting, viewing, commenting |
| Non-functional | Desired qualities, not strictly required.             | Performance, scalability, UX |

**Gather requirements:**

- List your assumptions and confirm with the interviewer.

**Additional Questions:**

- Which devices/platforms should be supported (desktop, tablet, mobile)?
- Is offline support necessary?
- Who are the main users?

---

## Architecture / High-Level Design (20%)

**Objective:**  
Identify key components, their responsibilities, and interactions.

**Diagramming:**

- Use rectangles for components.
- Show relationships and data flow.

**Common Components:**

| Component   | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| Server      | Exposes APIs; treat as a black box.                                 |
| View        | User interface; may include client-only state.                      |
| Controller  | Handles user interactions; processes and formats data for the view. |
| Model/Store | Holds data for the application; feeds data to views.                |

**Considerations:**

- Separation of concerns: keep components modular.
- Decide where computation should occur (client vs. server).

**Example: News Feed Architecture**

![Newseed Diagram

| Component     | Responsibility                                     |
| ------------- | -------------------------------------------------- |
| Server        | Serves feed data; provides HTTP API for new posts. |
| Controller    | Manages data flow and network requests.            |
| Client Store  | Stores app-wide data, mostly server-originated.    |
| Feed UI       | Displays posts and UI for composing new posts.     |
| Feed Post     | Shows post data and interaction buttons.           |
| Post Composer | UI for creating posts.                             |

---

## Data Model (10%)

**Objective:**  
Describe data entities, their fields, and ownership.

### Types of Data

| Type              | Description                                              | Examples                   |
| ----------------- | -------------------------------------------------------- | -------------------------- |
| Server-originated | Comes from server/database; shared across devices/users. | User profiles, feed posts  |
| Client-only       | Lives only on the client; not written to the server.     | UI state, validation flags |

#### Client Data Types

| Type      | Description                          | Examples            |
| --------- | ------------------------------------ | ------------------- |
| Persisted | User input saved to server/database. | Form submissions    |
| Ephemeral | Temporary, lost on browser close.    | Current tab, errors |

**When listing fields, specify data type and source.**

### Data Model Example (News Feed)

| Source     | Entity   | Belongs To       | Fields                                              |
| ---------- | -------- | ---------------- | --------------------------------------------------- |
| Server     | Post     | Feed Post        | id, created_time, content, image, author, reactions |
| Server     | Feed     | Feed UI          | posts (list), pagination                            |
| Server     | User     | Client Store     | id, name, profile_photo                             |
| User Input | New Post | Feed Composer UI | message, image                                      |

---

## Interface Definition (API) (15%)

**Objective:**  
Define the interfaces between components, including API endpoints, parameters, and responses.

### API Types

| Aspect             | Server-Client        | Client-Client       |
| ------------------ | -------------------- | ------------------- |
| Name/Functionality | HTTP path            | JS function         |
| Parameters         | GET/POST parameters  | Function parameters |
| Return Value       | HTTP Response (JSON) | Function return     |

**Example: Server-Client API**

| Field       | Value                                                                                  |
| ----------- | -------------------------------------------------------------------------------------- |
| HTTP Method | GET                                                                                    |
| Path        | /feed                                                                                  |
| Description | Fetches feed results for a user                                                        |
| Parameters  | { size: 10, cursor: '=dnXCer' }                                                        |
| Response    | `{ pagination: { size: 10, next_cursor: 'xENENfa' }, results: [ ...post objects... ]}` |

---

## Optimizations & Deep Dive (40%)

**Focus:**  
Prioritize optimizations based on product context (e-commerce: performance, editors: concurrency).

### General Optimizations

- **Code Splitting:** Separate JS/CSS for faster loads.
- **Lazy Loading:** Load non-critical resources as needed.

### Performance

- **Throttle/Debounce:** Limit operation frequency.
- **Caching:** Store results of expensive computations or network requests.
- **On-demand Loading:** Load data/components only when needed.
- **Prefetch/Preload:** Reduce latency by loading data before it's needed.
- **Virtual Lists/Pagination:** Render only visible items to improve UX.
- **Truncate Content:** Show ellipsis or "show more" for long content.

### User Experience

- **Mobile Friendliness:** Use CSS media queries; ensure large tappable areas.
- **Error States:** Handle validation, network errors gracefully.
- **Image Handling:** Use `object-fit: contain/cover` for responsive images.
- **Optimistic Updates:** Reflect success state before network confirmation.

### Network

- **Reflect Request States:** Show loading, error, and success indicators.
- **Race Conditions:** Use flags or abort controllers to manage concurrent requests.
- **Prevent Duplicate Requests:** Disable buttons after submission.
- **Request Consolidation:** Debounce/throttle or batch requests.
- **Caching & Timeouts:** Reuse responses and handle slow/failing requests.
- **Optimistic Updates:** Revert UI if request fails.

### Accessibility (A11Y)

- Keyboard navigation
- Screen reader support
- Sufficient color contrast
- Use of ARIA roles/labels
- Alt text for images
- Tab index management

### Internationalization (i18n)

- Avoid hardcoded labels
- Support long strings
- Right-to-left language support

### Security

- **Cross-site Scripting (XSS):** Sanitize inputs, escape outputs, set CSP, avoid inline JS.
- **URL Encoding:** Use `encodeURIComponent` for user-supplied inputs in URLs.

---

**Summary Table: RADIO Technique**

| Step            | Focus Area                | Key Activities                                          |
| --------------- | ------------------------- | ------------------------------------------------------- |
| Requirements    | Scope & Use Cases         | Clarify, list, and align requirements                   |
| Architecture    | System Structure          | Diagram components, define responsibilities             |
| Data Model      | Data Entities             | List entities, fields, and data flow                    |
| Interface (API) | Communication             | Specify endpoints, parameters, and responses            |
| Optimizations   | Performance, UX, Security | Apply best practices for speed, reliability, and safety |

---

This improved format uses clear headers, tables, and bullet points for readability, providing a concise and structured reference for the RADIO technique[1][2].

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/49173011/34aa877b-b7b2-41bd-b249-85e018918efc/paste.txt
[2] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/49173011/61325be3-e12f-469a-895e-92a61998d83e/paste-2.txt
[3] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/49173011/6ff49e68-ffad-48cf-ac73-0fae63003fc6/paste-3.txt
[4] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/49173011/72e12656-e1ab-4fbb-91dd-4fe7b58b7251/paste-4.txt

---

Answer from Perplexity: pplx.ai/share
