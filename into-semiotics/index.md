---
layout: is-default
section: into-semiotics
permalink: /into-semiotics/
title: Home
---

<p class="eyebrow">Companion to the book</p>

# Into Semiotics: An Active-Learning Companion

A free collection of **exercises, activities, and contextualized examples** that put the concepts of *Into Semiotics: Understanding Signs, Meaning, and Communication* into practice. For every chapter of the book, this companion includes **several ready-to-use activities**, most of them grounded in **Thai sociocultural contexts** and designed for use in the classroom or for independent study.

These materials address a simple question that the book raises but cannot fully resolve: *how do you actually do semiotics?* They ask students to go out, look, listen, collect, classify, argue, and create, turning abstract ideas about signs into concrete analysis of the world around them.

<div class="callout tip" markdown="1">
**How to use this site.** Browse to any chapter below. Each activity lists a type, an estimated time, the materials needed, and the exact book sections it puts into practice. Use the **Print / Save as PDF** button on any chapter page to produce a clean worksheet, or download the raw Markdown to adapt it. Instructor answer keys and discussion notes are tucked inside collapsible **Instructor notes** boxes.
</div>

## Chapters

<div class="grid">
{% assign chapters = site.pages | where: "section", "into-semiotics" | where_exp: "p", "p.chapter" | sort: "order" %}
{% for c in chapters %}
  <a class="card" href="{{ c.url | relative_url }}">
    <span class="n">{% if c.chapter == 9 %}Capstone{% else %}Chapter {{ c.chapter }}{% endif %}</span>
    <h3>{{ c.title }}</h3>
    <p>{{ c.count }} activities · {{ c.book_sections }}</p>
  </a>
{% endfor %}
</div>

## What makes these "active learning"

The activities are built around a few simple principles that research on active learning consistently supports:

- **Do, then name.** Students first collect or produce something (a photo, a recording, a message, an observation) and only then attach the technical vocabulary to it. Concepts are discovered in concrete material rather than received as definitions.
- **Local and lived.** Examples come from markets, temples, BTS platforms, LINE chats, soap operas, street signs, and product labels (the semiosphere students already inhabit) so that abstract theory lands on familiar ground.
- **Talk and defend.** Many tasks are pair or group activities that require students to justify an interpretation and hear a competing one, which is where the deepest learning happens.
- **Make and test.** Several activities ask students to *create* signs (a message to aliens, a rebranding, a chain of interpretants) and then test whether they work or not. The aim is application, not just recognition.

## For different settings

**In class:** each activity notes whether it works best individually, in pairs, or in groups, and roughly how long it takes, so it can be slotted into a lecture or seminar.

**Independent study:** activities marked for individual work include enough scaffolding and, in the instructor notes, model answers or discussion points, so self-directed learners can check their thinking.

**Assessment:** the [capstone](/into-semiotics/chapters/capstone/) offers a portfolio-style project that integrates the whole book, plus suggestions for lighter formative assessment.

See **[For instructors](/into-semiotics/for-instructors/)** for pacing, grouping, and assessment guidance, and **[About](/into-semiotics/about/)** for licensing and how to cite.
