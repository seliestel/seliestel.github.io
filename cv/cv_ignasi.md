---
layout: cv
title: cv
pdf: true
description: CV
permalink: /cv/
---

{{ site.data.cv.bio.name }}
=========================

----

>  Born {{ site.data.cv.bio.birth_date }} in {{ site.data.cv.bio.birth_place }}.

>  Academic interests: *{{ site.data.cv.interests }}*

----


Education
--------------------

{% for item in site.data.cv.education %}
  {{ item.time }} 
  :     *{{ item.degree }}, {{ item.subject }}.*

        {{ item.university }} ({{ item.place }}). 

        {{ item.details }}
{% endfor %}

Academic Employment
----------------------------------

{% for item in site.data.cv.academic_employment %}
  {{ item.time }} 
  :     *{{ item.position }}*,
         {{ item.department }}, {{ item.university }} 
         {{ item.place }}. {{ item.link }}

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

<a id="download-publist" title="Download publications" style="cursor: pointer">Publications</a>
------------------------

__*Peer-reviewed academic articles*__

{% for item in site.data.cv.academic_articles %}
  {% if item.year != 'Under review' %}
  {% if item.journal %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. *{{ item.journal }}*. {% if item.volume %}{{ item.volume }}{% endif %}{% if item.number %}({{ item.number }}){% endif %}{% if item.pages %} : {{ item.pages }}{% endif %}{% if item.volume or item.number or item.pages %}.{% endif %}{% if item.year == 'In press' and item.accepted %} Accepted: {{ item.accepted }}{% endif %}{% if item.online %} Online: {{ item.online }}.{% endif %}{% if item.doi %} doi: [https://doi.org/{{ item.doi }}](https://doi.org/{{ item.doi }}). {% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% elsif item.collection %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. In {{ item.editors }}, *{{ item.collection }}* {% if item.pages %} (pp. {{ item.pages }}){% endif %}, {{ item.place }}: {{ item.publisher }}.{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% endif %}
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
  {% if item.year == 'Under review' %}
  {% if item.journal %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. *{{ item.journal }}*. {% if item.volume %}{{ item.volume }}{% endif %}{% if item.number %}({{ item.number }}){% endif %}{% if item.pages %} : {{ item.pages }}{% endif %}{% if item.volume or item.number or item.pages %}.{% endif %}{% if item.submitted %} Submitted: {{ item.submitted }}.{% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% elsif item.collection %}
  {{ item.authors }}. {{ item.year }}. {{ item.title }}. In {{ item.editors }}, *{{ item.collection }}* {% if item.pages %} (pp. {{ item.pages }}){% endif %}, {{ item.place }}: {{ item.publisher }}.{% if item.submitted %} Submitted: {{ item.submitted }}.{% endif %}{% if item.link %} Available at [{{ item.link }}]({{ item.link }}). {% endif %}
  {% endif %}
  {% endif %}
{% endfor %}

__*Conferences*__

{% for item in site.data.cv.conferences %}
  {{ item.authors }}. {{ item.month }} {{ item.year }}. {{ item.title }}.{% if item.event %} {{ item.event }}{% endif %}{% if item.topic %}{% if item.event %},{% endif %} *{{ item.topic }}*{% endif %}{% if item.event or item.topic %}.{% endif %} {{ item.status }} at {{ item.venue }}, {{ item.place }}.{% if item.link %} Available at [{{ item.link }}]({{ item.link }}).{% endif %} {{ item.type }}.
{% endfor %}

Affiliations
----------------------------------

{% for item in site.data.cv.affiliations %}
  {{ item.time }} 
  :     *{{ item.position }}* 
         [{{ item.organization }}]({{ item.link }})

         {{ item.details }}
{% endfor %}

Grants and Awards
------------------------

__*Research grants*__
{% for item in site.data.cv.grants %}
  {{ item.dates }}
  :  {{ item.project }}. {% if item.number %} Grant number {{ item.number }}.{% endif %}{% if item.funder %} Granted by {{ item.funder }}.{% endif %}{% if item.amount %} Amount: {{ item.amount }}.{% endif %} {{ item.status }}.
{% endfor %}

__*Awards*__
{% for item in site.data.cv.awards %}
  {{ item.date }}
  :  {{ item.award }}.{% if item.reason %} Award for {{ item.reason }}.{% endif %}{% if item.funder %} Awarded by {{ item.funder }}.{% endif %}{% if item.amount %} Amount: {{ item.amount }}.{% endif %} {{ item.type }}.
{% endfor %}

Languages
------------------------

{% for item in site.data.cv.languages %}
  {{ item.name }} 
  :   {{ item.level }}{% if item.diploma %} (*{{ item.diploma }}*){% endif %}.
{% endfor %}
 
Other Skills and Diplomas
------------------------

{% for item in site.data.cv.various %}
  {{ item.item }} 
{% endfor %}

----

> Work email: <{{ site.data.cv.bio.work_email }}> • Personal email: <{{ site.data.cv.bio.personal_email }}> 

> Address: {{ site.data.cv.bio.current_address }}

> Phone: {{ site.data.cv.bio.phone }}
