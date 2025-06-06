# Distributed Systems

## Scenario:

- **Server 1 and Database 1**: As the user base grows, the server will become overloaded.
- **Distributed Systems**: A network of independent computers working as one coherent system.

## Key Characteristics:

### Scalability

The system’s ability to handle demand:

1. **Horizontal Scaling**: Adding more servers.
2. **Vertical Scaling**: Adding more CPU/RAM.

### Reliability

The system continues to function even when components fail.

### Availability

The amount of time a system remains operational.

### Efficiency

Measured by two main factors:

1. **Latency**: Delay in getting the first response.
2. **Throughput**: Number of operations in a given time.

**Trade-offs**: Scalability vs. Consistency.

---

## Limitations: CAP Theorem

A distributed system can only guarantee two out of three:

1. **Consistency**: All nodes have identical data, ensuring reads always reflect the most recent write.
2. **Availability**: Every request receives a response, but the response may not reflect the most recent write.
3. **Partition Tolerance**: The system continues to operate despite network partitions.

---

## Load Balancing

Distributes incoming requests across multiple servers in the distributed system. If one server goes down, the load balancer will distribute requests to available servers.

- Load balancers can be placed between:
  - Users and web servers.
  - Web servers and application servers.
  - Application servers and databases.

### Load Balancer Algorithms:

- **Least Connection Method**: Sends requests to the server with the fewest active connections.
- **Round Robin**: Cycles through a list of servers sequentially.
- **IP Hash**: Uses the client’s IP address to route traffic to a server.

### Single Point of Failure:

To prevent the load balancer from becoming a single point of failure, a standby load balancer can be added.

---

## Caching

Frequently requested data can be cached to reduce load on databases.

### Types of Caches:

- **CDN Cache**: Ideal for serving static media. CDNs cache content closer to the user, reducing latency.

### Caching Challenges:

- Maintaining data consistency and ensuring data is in sync with the source of truth.

### Cache Invalidation Strategies:

1. **Write-Through**: Data is written to both the cache and storage simultaneously, ensuring consistency but increasing latency.
2. **Write-Around**: Data bypasses the cache and goes directly to storage, preventing cache flooding but increasing read latency.
3. **Write-Back**: Data is written to the cache first and then to the database, reducing latency but risking data loss during system failures.

### Cache Eviction Policies:

- **Least Recently Used (LRU)**: Removes the least recently accessed items.
- **First In First Out (FIFO)**: Removes the oldest items first.
- **Least Frequently Used (LFU)**: Removes the least often accessed items.

---

## SQL vs. NoSQL

### SQL

- Stores data in predefined schemas.
- Each row contains all information for a record.
- Adding a new column requires updating the entire table.

### NoSQL

- More flexible data structure.

#### Four Main Types:

1. **Key-Value Store**: Redis.
2. **Document Databases**: MongoDB.
3. **Wide-Column Stores**: Cassandra.
4. **Graph Databases**: Neo4j.

### Comparison:

- **Structure**:
  - SQL: Rigid schema.
  - NoSQL: Flexible schema.
- **Querying**:
  - SQL: Uses standard structured query language.
  - NoSQL: Queries focus on collections of documents.
- **Scalability**:
  - SQL: Primarily vertical scaling; horizontal scaling via sharding.
  - NoSQL: Horizontal scaling.
- **Reliability**:
  - SQL: ACID compliant (Atomicity, Consistency, Isolation, Durability).

#### Use Cases:

- SQL: Financial applications, structured and consistent data.
- NoSQL: Large volumes of unstructured data, flexibility, and rapid development.

---

## Indexes

Improves database query performance by creating a separate data structure pointing to the location of specific data.

### Types of Indexes:

- **Primary Key Index**: Default index for primary keys.
- **Secondary Index**: For non-primary key columns.
- **Composite Index**: Created on multiple columns, useful for queries involving those columns.

### Performance Trade-offs:

- Improves read performance but may slow down write operations.

---

## Data Partitioning

When vertical scaling is no longer viable, partitioning splits the database into smaller, more manageable parts.

### Benefits:

- Improves performance, availability, and load balancing.

### Partitioning Methods:

1. **Horizontal Partitioning (Sharding)**: Divides rows of a table across multiple databases.
2. **Vertical Partitioning**: Separates features or columns into different databases.
3. **Directory-Based Partitioning**: Uses a lookup service to abstract the partitioning scheme.

### Partitioning Techniques:

- **Hash Partitioning**: Uses a hash function on a key attribute to determine the data’s partition.
- **Consistent Hashing**: Minimizes data redistribution when scaling servers. Data is distributed across a hash ring, and each server handles a portion of the hash range. Adding or removing servers requires remapping only a small fraction of data.
- **List Partitioning**: Assigns partitions based on a predefined list of values.
- **Round Robin**: Distributes data evenly in a circular order.
- **Composite Partitioning**: Combines two or more methods.

### Challenges:

- Joining data across multiple partitions.
- Rebalancing data when scaling or updating the system.

---

## Database Replication

Replication involves copying data from one database server to another to improve availability, reliability, and performance.

### Types of Replication:

1. **Master-Slave Replication**:

   - The master handles write operations, and slaves replicate the data for read operations.
   - Improves read performance and provides redundancy.

2. **Master-Master Replication**:

   - Both servers handle read and write operations.
   - Ensures high availability but requires conflict resolution mechanisms.

3. **Synchronous Replication**:

   - Data is written to the primary and replica simultaneously.
   - Ensures consistency but may introduce higher latency.

4. **Asynchronous Replication**:
   - Data is written to the primary first and then to the replica.
   - Reduces latency but risks data loss during failures.

### Benefits:

- **High Availability**: Provides failover support if the primary server goes down.
- **Load Balancing**: Distributes read requests to replicas, reducing load on the primary server.
- **Disaster Recovery**: Ensures data is backed up and available in case of hardware failure.

### Challenges:

- **Data Consistency**: Ensuring that replicas have the latest data.
- **Conflict Resolution**: Handling conflicts in master-master replication.
- **Replication Lag**: Delays in propagating changes to replicas.

### Use Cases:

- E-commerce applications for high read and write demands.
- Systems requiring low downtime and fast recovery.

Make sure you understand the question

### MD5 Checksum

Cronjob
Kuberneties
Message Queue
Kafka
What message of the file chunk is
S3 or Azure cloud storage for Presigned URL
S3 SDK and send chunks directly to the S3

Our team has been tasked with integrating a 3rd party service for displaying data
visualizations into our existing architecture. As part of the new service we’ll need
to allow users to upload data storage files. Our current architecture separates
out our frontend and backend services with a single threaded API server layer in
between for handling requests. How would you design this?

Our team has been tasked with building out a new search interface that
can be configurable by an agency based on the mockup below.

Requirements:

- Filters must be configurable by an agency
- Must be built as a single page app
- Search criteria and results should persist

Question

Our team has been assigned the task of developing a new search interface that agencies can configure to meet their specific needs.

Background

Law enforcement agencies frequently have varying requirements regarding the relevance of search filters to their operations. For instance, one agency might consider hair color a crucial filter, while another might find it less significant. Additionally, agencies often use different naming conventions for the same data types. Providing agencies with the ability to customize their search display offers them the flexibility to make these adjustments independently, eliminating the need for engineers to implement static changes for each agency.

Requirements

- Filters must be configurable by an agency
- Must be built as a single page app
- Search criteria and results should persist when changing between search pages

Things we're looking for

- Component architecture
- How the filters can be configurable (e.g what does the schema look like?)
- How is state being managed
- Proposed pagination
- Nice to haves:
  - Naming conventions
  - Collision avoidance surrounding field names
  - Sorting

Expected questions

- Is there an API for search requests?
  - A: Yes, assume the endpoint is search and it accepts an object containing the search page type (e.g people), a query, and a filters object that contains the key value pairs
- Is there a specific type of API?
  - A: Use GraphQL or REST, up to you
- How are the filters configurable?
  - A: Assume there is a tool outside of this page for the user to manage the filters, but you decide how those filters are stored/accessed from a high level

Extra Questions

- How would you integrate accessibility into this app?
- How would you breakdown the work for junior developers to work on?
- What would you estimate this work to take?
- How would you implement sharing searches?
- How would you prevent PII from being leaked via the url? [If they store data via the url]
- What type of tests would you use on this page?
- What metrics would you want to implement to ensure the page is working? Where do you think the biggest risk areas are for page failures?
- How would you improve the user experience if we had a backend issue that caused further pages to have increased latency?
  - I frame it as we need to buy the backend time to fix the root cause and address customer concerns in the short therm (allows for some more creative, not best practice solution-ing discussion and brainstorming.)
