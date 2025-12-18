---
layout: default
title: Posts
permalink: /blog/
---

<section class="content-section">
  <div class="container">
    <h2>All Posts</h2>
    <p>Thoughts on software engineering, career, and life in general.</p>
    
    <ul class="features">
      {% for post in site.posts %}
      <li>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="footnote">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
