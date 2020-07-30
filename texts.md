---
layout: blank
title: Texts
description: 
permalink: /texts/
---

<h3 style="font-family: Raleway; margin-bottom: 20px">Academic articles</h3>

  {% for item in site.data.cv.academic_articles %}
  {% if item.year != 'Under review' and item.year != 'Forthcoming' %}
  {% if item.journal %}
  {{ item.authors }}. {{ item.year }}. {% if item.doi %}[{{ item.title }}](https://doi.org/{{ item.doi }}).{% elsif item.link %}[{{ item.title }}]({{ item.link }}).{% else %}{{ item.title }}.{% endif %} *{{ item.journal }}*. {% if item.volume %}{{ item.volume }}{% endif %}{% if item.number %}({{ item.number }}){% endif %}{% if item.pages %} : {{ item.pages }}{% endif %}{% if item.volume or item.number or item.pages %}.{% endif %}{% if item.year == 'In press' and item.accepted %} Accepted: {{ item.accepted }}{% endif %}{% if item.online %} Online: {{ item.online }}.{% endif %}
  {% elsif item.collection %}
  {{ item.authors }}. {{ item.year }}. {% if item.doi %}[{{ item.title }}](https://doi.org/{{ item.doi }}).{% elsif item.link %}[{{ item.title }}]({{ item.link }}).{% else %}{{ item.title }}.{% endif %} In {{ item.editors }}, *{{ item.collection }}* {% if item.pages %} (pp. {{ item.pages }}){% endif %}, {{ item.place }}: {{ item.publisher }}.
  {% endif %}
  {% endif %}
  {% endfor %}

<h3 style="font-family: Raleway; margin-bottom: 20px">Other articles</h3>

  {% for item in site.data.cv.other_articles %}
  {{ item.authors }}. {{ item.date }}. {% if item.link %}[{{ item.title }}]({{ item.link }}).{% else %}{{ item.title }}.{% endif %} *{{ item.publisher }}*.
  {% endfor %}

<h3 style="font-family: Raleway; margin-bottom: 20px">Conferences</h3>

  {% for item in site.data.cv.conferences %}
  {{ item.authors }}. {{ item.month }} {{ item.year }}. {% if item.link %}[{{ item.title }}]({{ item.link }}).{% else %}{{ item.title }}.{% endif %}{% if item.event %} {{ item.event }}{% endif %}{% if item.topic %}{% if item.event %},{% endif %} *{{ item.topic }}*{% endif %}{% if item.event or item.topic %}.{% endif %} {{ item.status }} at {{ item.venue }}, {{ item.place }}.
  {% endfor %}

<h3 style="font-family: Raleway; margin-bottom: 20px">Other</h3>

  {% for item in site.data.cv.books %}
  {% if item.type == 'Drama' or item.type == 'Translation' %}
  {{ item.authors }}. {{ item.year }}. {% if item.link %}[{{ item.title }}]({{ item.link }}).{% else %}{{ item.title }}.{% endif %} {{ item.place }}: {{ item.publisher }}. {% if item.isbn %} ISBN: {{ item.isbn }}.{% endif %} {{ item.type }}.
  {% endif %}
  {% endfor %}
