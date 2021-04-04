---
layout: cv
title: cv
pdf: true
description: CV
permalink: /cv/
---

<a id="download-bio" title="Download short bio" style="cursor: pointer">{{ site.data.cv.bio.name }}</a>
=========================

----

>  Born {{ site.data.cv.bio.birth_date }} in {{ site.data.cv.bio.birth_place }}.

<div style="margin-bottom: 0 !important;text-align: center">Academic interests:</div>
<div style="margin-top: 0 !important; font-style:italic; text-align: center">{{ site.data.cv.interests }}</div>
<br />
<div itemscope itemtype="https://schema.org/Person" style="text-align:center;"><a itemprop="sameAs" content="https://orcid.org/{{ site.data.cv.bio.orcid }}" href="https://orcid.org/{{ site.data.cv.bio.orcid }}" target="orcid.widget" rel="noopener noreferrer" style="vertical-align:top;"><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em;margin-right:.5em;" alt="ORCID iD icon">https://orcid.org/{{ site.data.cv.bio.orcid }}</a></div>

----


Degrees
--------------------

{% for item in site.data.cv.education %}
  {{ item.time }} 
  :     *{{ item.degree }}, {{ item.subject }}.*

        {{ item.university }} ({{ item.place }}). 

        {{ item.details }}
{% endfor %}

Other Education and Expertise
--------------------

{% for item in site.data.cv.other_education %}
  {{ item.time }} 
  :     *{{ item.degree }}*, {{ item.subject }}.

        {{ item.institution }} ({{ item.place }}). 

        {{ item.details }}
{% endfor %}

{% for item in site.data.cv.expertise %}
  {{ item.item }} 
{% endfor %}

Languages
------------------------

{% for item in site.data.cv.languages %}
  {{ item.name }} 
  :   {{ item.level }}{% if item.diploma %} (*{{ item.diploma }}*){% endif %}.
{% endfor %}

Academic Employment
----------------------------------

{% for item in site.data.cv.academic_employment %}
  {{ item.time }} 
  :     *{{ item.position }}*,
         {{ item.department }}, {{ item.university }} 
         ({{ item.place }}). {{ item.link }}

         {{ item.details }}
{% endfor %}

Other Employment
----------------------------------

{% for item in site.data.cv.other_employment %}
  {{ item.time }} 
  :     *{{ item.position }}*, {{ item.organization }} 
         ({{ item.place }}).{% if item.link %} {{ item.link }}{% endif %}

         {{ item.details }}
{% endfor %}

Research Funding and Grants
----------------------------------

{% for item in site.data.cv.grants %}
  {{ item.dates }}
  :  {{ item.project }}. {% if item.number %} Grant number {{ item.number }}.{% endif %}{% if item.funder %} Granted by {{ item.funder }}.{% endif %}{% if item.amount %} Amount: {{ item.amount }}.{% endif %} {{ item.status }}.
{% endfor %}

Research Supervision and Leadership
----------------------------------

{% for item in site.data.cv.supervision %}
  {{ item.dates }}
  :  {{ item.activity }}. {{ item.role }} {{ item.students }} {{ item.type }} students in the {{ item.degree }}, {{ item.institution }}. {% if item.link %} {{ item.link }}{% endif %}
{% endfor %}

{% for item in site.data.cv.leadership %}
  {{ item.dates }}
  :  {{ item.role }}, {{ item.activity }} {% if item.link %} {{ item.link }}{% endif %}
{% endfor %}


Awards and Honours
----------------------------------

{% for item in site.data.cv.awards %}
  {{ item.date }}
  :  {{ item.award }}.{% if item.reason %} Award for {{ item.reason }}.{% endif %}{% if item.funder %} Awarded by {{ item.funder }}.{% endif %}{% if item.amount %} Amount: {{ item.amount }}.{% endif %} {{ item.type }}.
{% endfor %}

Other Academic Merits
------------------------

{% for item in site.data.cv.various %}
  {{ item.item }} 
{% endfor %}


<a id="download-publist" title="Download publications" style="cursor: pointer">Publications</a>
------------------------

__*Academic (peer-reviewed journal) articles*__

{% for item in site.data.cv.academic_articles %}
  {% if item.year != 'Under review' and item.year != 'Forthcoming' %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. *{{ item.journal }}*. {% if item.volume %}{{ item.volume }}{% endif %}{% if item.number %}({{ item.number }}){% endif %}{% if item.pages %} : {{ item.pages }}{% endif %}{% if item.volume or item.number or item.pages %}.{% endif %}{% if item.year == 'In press' and item.accepted %} Accepted: {{ item.accepted }}{% endif %}{% if item.online %} Online: {{ item.online }}.{% endif %}{% if item.doi %} doi: [https://doi.org/{{ item.doi }}](https://doi.org/{{ item.doi }}). {% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% endif %}
{% endfor %}

__*Chapters in academic books*__

{% for item in site.data.cv.chapters %}
  {% if item.year != 'Under review' and item.year != 'Forthcoming' %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. In {{ item.editors }}, *{{ item.collection }}* {% if item.pages %} (pp. {{ item.pages }}){% endif %}, {{ item.place }}: {{ item.publisher }}.{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% endif %}
{% endfor %}
 
__*Academic books*__

{% for item in site.data.cv.books %}
  {% if item.type == 'Textbook' or item.type == 'Essay' %}
  {{ item.authors }}. {{ item.year }}. *{{ item.title }}*. {{ item.place }}: {{ item.publisher }}. {% if item.isbn %} ISBN: {{ item.isbn }}.{% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {{ item.type }}.{% endif %}
{% endfor %}

__*Other articles*__

{% for item in site.data.cv.other_articles %}
  {{ item.authors }}. {{ item.date }}. {{ item.title }}. *{{ item.publisher }}*. {% if item.link %} Available at [{{ item.link }}]({{ item.link }}).{% endif %}
{% endfor %}

__*Other books*__

{% for item in site.data.cv.books %}
  {% if item.type != 'Textbook' and item.type != 'Essay' %}
  {{ item.authors }}. {{ item.year }}. *{{ item.title }}*. {{ item.place }}: {{ item.publisher }}. {% if item.isbn %} ISBN: {{ item.isbn }}.{% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {{ item.type }}.{% endif %}
{% endfor %}

__*Manuscripts*__

{% for item in site.data.cv.academic_articles %}
  {% if item.year == 'Under review' or item.year == 'Forthcoming' %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. *{{ item.journal }}*. {% if item.volume %}{{ item.volume }}{% endif %}{% if item.number %}({{ item.number }}){% endif %}{% if item.pages %} : {{ item.pages }}{% endif %}{% if item.volume or item.number or item.pages %}.{% endif %}{% if item.submitted %} Submitted: {{ item.submitted }}.{% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% endif %}
{% endfor %}

{% for item in site.data.cv.chapters %}
  {% if item.year == 'Under review' or item.year == 'Forthcoming' %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. In {{ item.editors }}, *{{ item.collection }}* {% if item.pages %} (pp. {{ item.pages }}){% endif %}, {{ item.place }}: {{ item.publisher }}.{% if item.submitted %} Submitted: {{ item.submitted }}.{% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% endif %}
{% endfor %}


__*Conferences*__

{% for item in site.data.cv.conferences %}
  {{ item.authors }}. {{ item.month }} {{ item.year }}. {{ item.title }}.{% if item.event %} {{ item.event }}{% endif %}{% if item.topic %}{% if item.event %},{% endif %} *{{ item.topic }}*{% endif %}{% if item.event or item.topic %}.{% endif %} {{ item.type }}. {{ item.status }} at {{ item.venue }}, {{ item.place }}.{% if item.link %} Available at [{{ item.link }}]({{ item.link }}).{% endif %}
{% endfor %}

----

> Work email: <{{ site.data.cv.bio.work_email }}> • Personal email: <{{ site.data.cv.bio.personal_email }}> 

> Address: {{ site.data.cv.bio.current_address }}

> Phone: {{ site.data.cv.bio.phone }}

<a id="download-without-publist" title="Download without publications" style="visibility:hidden; cursor: pointer">Download without publications</a>
