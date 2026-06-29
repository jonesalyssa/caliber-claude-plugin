---
name: caliber-copy-compression
description: Caliber Contact skill for political direct mail workflows.
---

# Caliber Versioning

Use this framework whenever creating, revising, reviewing, presenting, or delivering political creative.

The purpose is to eliminate confusion, prevent accidental overwrites, preserve creative evolution, and ensure every stakeholder knows which version is current.

A file that cannot be identified cannot be managed.

---

# Core Rule

Every version should answer:

1. What is it?
2. Who is it for?
3. Which piece is it?
4. Which revision is it?
5. Is it current?

If any answer is unclear, the naming system has failed.

---

# Naming Convention

Format:

```text
CLIENT_CANDIDATE_PIECE_V##_[DESCRIPTION]
```

Examples:

```text
Riverside_Foley_Attack01_V01
Riverside_Foley_Attack01_V02
Riverside_Foley_Attack01_V03
```

```text
Dixon_Positive01_V01
Dixon_Positive01_V02
```

```text
Calvert_Comparison03_V05
```

Never use:

```text
final.ai
final-final.ai
new-final.ai
updated.ai
mailer-new.ai
```

These file names create chaos.

---

# Version Numbers

Use:

```text
V01
V02
V03
V04
```

Not:

```text
v1
v2
v3
```

Leading zeros improve organization.

---

# Major vs Minor Versions

## Major Version

Use when:

* New concept
* New layout
* New visual metaphor
* New messaging strategy

Example:

```text
Attack01_V01
```

Evidence board concept.

```text
Attack02_V01
```

Financial corruption concept.

Different concept.

New major version.

---

## Minor Version

Use when:

* Copy changes
* Photo changes
* Color changes
* Layout refinements
* Font adjustments

Example:

```text
Attack01_V01
Attack01_V02
Attack01_V03
```

Same concept.

Improved execution.

---

# Concept Tracking

Always separate:

## Concept

What story is being told?

Examples:

* Evidence Board
* Surveillance
* Financial Corruption
* Newspaper Investigation
* Public Safety
* Local Pride

## Version

How refined is the execution?

Never confuse the two.

---

# Internal Review Workflow

Recommended progression:

```text
Concept A V01
Concept A V02
Concept A V03

Concept B V01
Concept B V02

Concept C V01
```

Do not overwrite earlier thinking.

Good ideas often come from old versions.

---

# Client Presentation Versions

When presenting to clients:

Avoid:

```text
V17
```

Clients assume something is wrong.

Instead:

Present as:

```text
Concept A
Concept B
Concept C
```

Keep internal version numbers separate.

---

# Revision Notes

Every revision should have notes.

Example:

```text
V02
- Larger headline
- Stronger contrast
- Reduced texture
- Updated bullet structure
```

```text
V03
- New photo
- Added warning stamp
- Increased readability
```

Future teams should understand changes immediately.

---

# "Completely Different" Requests

When a client requests:

"Completely different."

Create:

```text
Attack02_V01
```

Not:

```text
Attack01_V08
```

A new concept deserves a new branch.

---

# File Organization

Recommended structure:

```text
Project
│
├── Concepts
│   ├── ConceptA
│   ├── ConceptB
│   └── ConceptC
│
├── Revisions
│
├── Client Approved
│
└── Production
```

Never mix active files with approved files.

---

# Approval Status Labels

## Working

```text
WIP
```

Still being developed.

---

## Internal Review

```text
IR
```

Awaiting team review.

---

## Client Review

```text
CR
```

Sent to client.

---

## Approved

```text
APPROVED
```

Ready for production.

---

## Production

```text
PRINT
```

Final production file.

---

# Creative Direction Tracking

For every version document:

## Objective

What is this piece trying to accomplish?

---

## Audience

Who receives it?

---

## Message

What should voters remember?

---

## Contrast Frame

Which contrast strategy is being used?

Examples:

* Hero vs Villain
* Taxpayers vs Politicians
* Safety vs Danger

---

## Emotional Goal

What should voters feel?

Examples:

* Trust
* Anger
* Concern
* Confidence

---

## Concept Name

What visual metaphor drives the piece?

Examples:

* Evidence Locker
* Money Trail
* Surveillance Room
* Main Street

---

# A/B Testing Rules

Never label:

```text
Version A
Version B
```

Without documenting differences.

Instead:

```text
A - Emotional Headline
B - Direct Headline
```

Or:

```text
A - Evidence Board
B - Financial Corruption
```

Track what changed.

---

# Production Lock

Once approved:

Create:

```text
PRINT_LOCK
```

No edits.

No exceptions.

Any change becomes:

```text
PRINT_V02
```

Never modify approved production files.

---

# QA Version Review

Before approving a revision ask:

What changed?

Did it improve the objective?

Did readability improve?

Did contrast improve?

Did persuasion improve?

Did production quality improve?

If not, the revision may not be necessary.

---

# Common Versioning Failures

Avoid:

* Overwriting files
* Missing revision notes
* Unclear naming
* Multiple "final" files
* Mixing concepts
* Reusing approved production files
* Losing historical versions

Most production problems begin with bad version control.

---

# Final Rule

Every file should tell a story.

A stranger should be able to open the project folder and immediately understand:

What the piece is.

Which version is current.

What changed.

What was approved.

What is ready for production.

If they cannot, improve the versioning system.