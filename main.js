// Assemble the email address at runtime so it never appears in the served HTML.
// Address harvesters scrape the static markup over HTTP and do not run scripts;
// once assembled, the link behaves like an ordinary mailto for real visitors.
(function () {
  "use strict";

  document.querySelectorAll("a[data-user][data-domain]").forEach(function (el) {
    var address = el.dataset.user + "@" + el.dataset.domain;
    el.setAttribute("href", "mailto:" + address);
    el.setAttribute("title", address);
  });
})();
