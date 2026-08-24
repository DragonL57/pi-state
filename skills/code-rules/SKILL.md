---
name: code-rules
description: Engineering guardrails distilled from 13 classic software books (Clean Code, Clean Architecture, DDD, Refactoring, Release It!, Designing Data-Intensive Applications, …). Load whenever writing or reviewing code, making architecture decisions, refactoring legacy code, modeling domains, or discussing scalability / distributed design.
---
# Design guardrails — distilled, not restated (13 books)

Generic style-guide context never converts a near-miss to a pass and only costs tokens per turn (Khatri 2026, arXiv:2607.27250). Below is the polarity-transformed residue of 13 classic engineering books, distilled from [ciembor/agent-rules-books](https://github.com/ciembor/agent-rules-books): negative constraints — the only rule class measured individually beneficial (Zhang et al. 2026, arXiv:2604.11088) — plus operational procedures and triggers. Full distillation: `~/Documents/agent-rules-books-strict-guidelines-2026-08-12.md`; per-book decision rules: `~/Documents/rules-obey-original-2026-08-07.md`. Repository-specific design and operational facts (architecture notes, test-suite cost warnings, forbidden commands) belong in AGENTS.md files and skills — the only context channels with demonstrated or plausible effect.

## I. Universal working discipline (Pragmatic Programmer, Clean Code, Code Complete)

**Do**

- Do treat cleanliness as part of delivery: leave touched code cleaner within scope.
- Do keep one authoritative representation per system fact; derive, generate, or validate everything else from it.
- Do shorten feedback loops — relevant tests, automated checks, visible failures — before late expensive surprises.
- Do automate repetitive, error-prone, easy-to-forget work (build, test, lint, format, deploy, release) and version the automation.
- Do own the outcome: surface tradeoffs, risks, and uncertainty instead of blaming tools, frameworks, or schedule pressure.
- Do debug from reproduced facts: observe, isolate, explain, fix, verify — never guess.
- Do break work into small, verifiable increments; integrate often so partial work does not rot.
- Do fix or visibly contain small quality decay (broken windows) before it becomes normal.

**Do not**

- Do not add mess because the schedule is tight or a rewrite is promised.
- Do not duplicate knowledge — each business rule, validation, mapping, calculation, or schema has one owner.
- Do not write functions with hidden side effects; a function that answers must not mutate behind the reader's back.
- Do not mix setup, validation, computation, and side effects in one function; split the phases.
- Do not add boolean flags, output parameters, or grab-bag argument lists; model the concept instead.
- Do not use comments to narrate code; use them only for rationale, constraints, contracts, warnings, or non-obvious facts.
- Do not depend on code that works for reasons nobody can explain; prove the behavior with data first.
- Do not leak resources — release every acquisition on success and failure paths, preferably in reverse acquisition order.
- Do not hard-code volatile decisions (vendors, platforms, environments, policies) before evidence justifies the commitment.
- Do not silently continue from corrupted or impossible state; fail visibly with diagnostic context.
- Do not tune performance without requirements and measurement; measure before and after, one change at a time.
- Do not let shared mutable state, globals, ambient context, or temporal coupling hide — they must earn themselves and be made visible.

## II. Design, abstraction, architecture (APoSD, Clean Architecture, Clean Code)

**Do**

- Do use reduced complexity as the primary success metric: cognitive load, change amplification, hidden dependencies, facts a reader must hold at once.
- Do prefer deep modules — small, semantic interfaces hiding meaningful internal complexity.
- Do keep dependencies pointing inward: business policy must not import frameworks, databases, web handlers, or vendor types.
- Do pass plain request/response models across use-case boundaries — never web requests, ORM rows, or framework contexts.
- Do hide volatile decisions, internal representation, storage shape, protocols, and performance hacks inside the owning module.
- Do treat design as continuous work: a first working patch is not done if it worsens future changeability.
- Do pick generality at the right level: isolate rare special cases from the common path instead of polluting it.

**Do not**

- Do not add wrappers, facades, helpers, layers, patterns, options, or arguments that add names without reducing reader burden — prove each hides more complexity than it adds.
- Do not let controllers, endpoints, adapters, presenters, or gateways own business decisions — keep them humble translators.
- Do not treat a diagram, a package name, a service split, or a shared `common` folder as an enforced boundary.
- Do not design interfaces around how the implementation works; design around what callers need to know.
- Do not add speculative abstractions, one-caller overfitting, vague generality, or just-in-case interfaces.
- Do not let test convenience force shallow or leaky interfaces.
- Do not normalize architectural debt: keep compromises at the outermost layer, document them, preserve a path to separation.
- Do not merge unrelated use cases or eliminate duplication when sharing would couple actors, change reasons, or release pressure.

## III. Refactoring & legacy code (Refactoring, Refactoring.Guru, Working Effectively with Legacy Code)

**Do**

- Do preserve observable behavior during refactoring; isolate behavior changes from structural changes.
- Do work in small, reversible, buildable, testable, reviewable steps; split patches too large to reason about locally.
- Do establish a safety net before risky refactoring — characterization tests where behavior is unclear.
- Do diagnose the smell before choosing the technique; prefer the smallest treatment that directly reduces it.
- Do refactor the current blocking smell, not every smell in sight; stop when the requested change is easy.
- Do follow the legacy loop: identify the change point → check protection → characterize → find or create the smallest seam → break the blocking dependency → change behavior → refactor locally.
- Do use sprout/wrap moves when direct edits are risky; fold temporary structure into better design once tests support it.
- Do treat any area without trustworthy tests as legacy code; do not start with rewrite or module-wide cleanup.
- Do keep temporary seams labeled with a cleanup obligation; remove them once safer structure exists.

**Do not**

- Do not disguise a feature, migration, or redesign as cleanup.
- Do not delete a failing test to finish cleanup.
- Do not rewrite when the next small behavior-preserving transformation recovers control.
- Do not check in exploratory restructuring used only for understanding.
- Do not expand hidden dependencies to break a seam; use the smallest seam that allows substitution, sensing, or interception.
- Do not mistake test-only seams, wrappers, subclass tricks, or build tricks for design improvement by themselves.
- Do not create wrappers, parameter objects, interfaces, or hierarchy variants without a real concept or client.
- Do not change public signatures, constructors, or externally reachable APIs without a compatibility check or transition path.
- Do not broaden cleanup into unrelated areas; stop at the diagnosed smell and report the next one separately.

## IV. Domain modeling (DDD, DDD Distilled, Implementing DDD)

**Do**

- Do define every Bounded Context explicitly before interpreting terms, modules, services, persistence, or integrations.
- Do keep one Ubiquitous Language per context across code, tests, commands, events, documents, and conversations.
- Do put the most modeling effort into the Core Domain; keep supporting and generic subdomains simpler.
- Do make Aggregates the immediate consistency boundary: small, one root, modified through the root, referenced by identity, one per transaction by default.
- Do use immutable, self-validating Value Objects when primitives hide domain meaning.
- Do publish Domain Events only for meaningful past-tense business facts.
- Do choose context relationships deliberately (Shared Kernel, Anticorruption Layer, Open Host Service, Published Language, Conformist, Separate Ways…) and test boundary translations.
- Do keep Application Services as use-case coordinators; never let them become the real domain model.

**Do not**

- Do not apply full tactical DDD to simple CRUD, generic subsystems, or mainly technical problems.
- Do not let persistence, UI, frameworks, integration formats, or DDD vocabulary replace an implementation-driving model.
- Do not share domain classes across contexts; translate at the boundary instead of leaking foreign language.
- Do not expose Aggregate internals or arbitrary setters; route invariant-changing behavior through the root.
- Do not modify several Aggregates in one transaction or load large object graphs without listing the immediate invariants that require it.
- Do not let repositories become generic CRUD, table-shaped, or row-returning; they are Aggregate access points.
- Do not let controllers, helpers, or services carry business decisions; move the rule into the domain or name the missing concept.
- Do not use Event Sourcing unless the event sequence is the right persistence model, replay is deterministic, and event meaning is versioned.
- Do not let a term imported from another context silently mean something else — rename or qualify it.
- Do not call something an Anticorruption Layer unless real translation exists.

## V. Enterprise application architecture (Patterns of Enterprise Application Architecture)

**Do**

- Do make responsibility ownership explicit: presentation, workflow, domain logic, data source, transactions, concurrency, integration stay separated.
- Do choose the business-logic pattern by force: Transaction Script for short independent simple flows, Domain Model for significant rules, invariants, identity, or collaboration.
- Do use a Service Layer for application operations, orchestration, and explicit transaction boundaries.
- Do keep transaction ownership explicit, short, and out of hidden helpers and remote-call spans.
- Do use Identity Map (one object per identity per scope) and Unit of Work (one logical commit) where identity and write coordination matter.
- Do put DTOs and Remote Facades only at remote or cross-layer boundaries; they are transport structures, not domain models.

**Do not**

- Do not let the framework, ORM, database schema, or transport shape choose the design.
- Do not let lower layers reach into presentation concerns; reject pass-through layering theater.
- Do not scatter SQL, mapping, transaction ownership, lock acquisition, or saves across callers — centralize in the smallest repository, mapper, gateway, Unit of Work, or service boundary.
- Do not let lazy loading, duplicate in-memory identities, hidden auto-persistence, or N+1 behavior surprise loops or serializers.
- Do not distribute objects or services by default; when remote, budget latency, serialization, versioning, and partial failure.
- Do not let vendor payloads or serialization code shape internal domain design.
- Do not leave session state with unclear owner, lifetime, storage location, security, scaling, or cleanup behavior.

## VI. Production reliability (Release It!)

**Do**

- Do put explicit, intentional time limits on every outbound call and wait; no infinite waits.
- Do bound retries (count and total time) with backoff or jitter; retry only when the operation is safe for caller and provider.
- Do isolate dependency and workload failures with circuit breakers, fast failure, bulkheads, and separate resource pools.
- Do design overload behavior explicitly: finite queues, backpressure, demand limits, load shedding of lower-value work before core functions collapse.
- Do validate external input and dependency responses before they affect state, caches, queues, or downstream systems.
- Do build observability into boundaries and failure points: structured context, correlation IDs, latency, error, saturation, queue depth, health, version, configuration.
- Do make startup, health checks, migrations, and operational automation restartable, auditable, observable, and recoverable.

**Do not**

- Do not rely on library defaults for timeouts, retries, or connection handling.
- Do not retry validation errors or permanent failures.
- Do not hold locks or expensive connections across slow remote calls.
- Do not default to huge in-memory batches; stream or paginate large payloads.
- Do not let one outage consume all threads, connections, or workers.
- Do not let malformed data poison caches, queues, or downstream systems.
- Do not treat the passing happy path as production readiness — design the failure semantics, demand limits, and diagnosis surface before production defines them for you.
- Do not synchronize job retries, create cache dogpiles, or concentrate demand in time without deliberate design.

## VII. Data-intensive systems (Designing Data-Intensive Applications)

**Do**

- Do make source of truth, consistency expectation, durability point, and visibility point explicit on every write path.
- Do treat crashes, partial writes, duplicate work, timeouts, and stale reads as normal inputs.
- Do make commands, jobs, and events safe under retry and replay: deduplication keys, naturally idempotent transitions, or an explicit transactional recovery contract.
- Do preserve only the ordering the business logic actually needs; scope it per key, stream, or partition.
- Do design schemas, APIs, messages, and events as evolving contracts across old readers, old writers, old data, and rolling upgrades.
- Do treat caches, indexes, search copies, read models, and denormalized fields as derived data with explicit propagation, lag, observability, and rebuild paths.
- Do align service boundaries with data ownership and update semantics.

**Do not**

- Do not design distributed data behavior as if every write, read, queue, cache, replica, and clock were local, ordered, fresh, and exactly-once.
- Do not conflate accepted, persisted, applied, and durable success — know which one you have.
- Do not casually split one tightly consistent business concept across services, or put chatty cross-service joins on hot paths.
- Do not use linearizability, total order broadcast, or consensus where the coordination problem does not truly require agreement.
- Do not let unrebuildable projections, schema drift, or hidden source-of-truth ownership go unobserved.
- Do not allow exactly-once wishful thinking; state the fault model for network, clocks, leaders, and partitions.

## Trigger rules (activate only when touching the risky area)

- When adding a module, layer, service, wrapper, facade, pattern, option, callback, or argument → prove it hides more complexity than it adds.
- When a change spreads across many files or reviewers must reconstruct hidden dependencies → look for missing information hiding, shallow modules, or complexity pushed to callers.
- When the same edit appears a third time → remove the duplication through clearer ownership, not another copy.
- When adding behavior → first ask what structural friction blocks the change; refactor before the feature only when it makes the feature safer or simpler.
- When fixing a bug in unclear code → characterize the current failure first; refactor only enough to make the fix visible.
- When tests are absent or weak → make the smallest structural move that improves testability before broader cleanup.
- When rewriting feels tempting → choose the next small behavior-preserving transformation that recovers control.
- When a seam is magical, temporary, public-for-test, or sensing-only → attach a cleanup obligation and remove it once safer structure exists.
- When terminology is ambiguous, inconsistent, or repeatedly translated → sharpen the Ubiquitous Language and rename before adding behavior.
- When a request wants to load and mutate a large graph or several Aggregate roots → revisit the invariant boundary; ask whether eventual consistency is acceptable.
- When a framework annotation, ORM row, vendor SDK, transport format, or schema enters core policy → move translation outward.
- When an adapter bypasses a use case or infrastructure is both imported by and importing inward code → restore the boundary.
- When an outbound call, queue consume, resource checkout, or thread wait is added → define timeout, retry eligibility, retry bounds, fallback, validation, and caller-survival behavior.
- When a queue, buffer, pool, cache, or collection-returning API is added → define capacity, full behavior, cleanup, staleness, pacing, pagination, and saturation monitoring.
- When a schema, API, message, event, enum, or status meaning changes → plan compatibility for old readers, old writers, old stored data, and rollout.
- When retries, jobs, consumers, queues, or replayable batch work are added → prove duplicate, replay, ordering, retention, side-effect, and recovery safety.
- When routing reads to replicas or using async replication → identify read-your-writes, monotonic-read, staleness, and failover expectations before allowing the read.
- When domain behavior appears in controllers, views, SQL scripts, DTOs, or serialization code → move it to the owning layer or justify the exception explicitly.
- When cleanup keeps expanding → stop at the diagnosed smell and report the next smell separately.

## Final checklist (after any significant change)

- Did the change reduce total complexity — not just get smaller?
- Are behavior changes, structural changes, and test updates separated where practical?
- Is there a safety net (test, characterization, or explicit verification gap record) around the changed behavior?
- Do names and APIs carry meaning without narration, and does one concept have one term inside its context?
- Is every boundary explicit and enforced in code — not in a diagram, folder name, or package name?
- Are timeouts, retries, resource cleanup, and failure semantics explicit and bounded?
- Is the source of truth identified, with derived data having a rebuild or repair path?
- Is the touched area cleaner or explicitly contained?
