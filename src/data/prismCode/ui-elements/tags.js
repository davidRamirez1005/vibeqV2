export let
    defaultTags = {
        script: `
    <span class="tag tag-default mt-1 mb-1">Default</span>
    <span class="tag tag-dark mt-1 mb-1 ms-1">Dark</span>
    <span class="tag tag-primary mt-1 mb-1 ms-1">Primary</span>
    <span class="tag tag-success mt-1 mb-1 ms-1">Success</span>
    <span class="tag tag-info mt-1 mb-1 ms-1">Info</span>
    <span class="tag tag-warning mt-1 mb-1 ms-1">Warning</span>
    <span class="tag tag-danger mt-1 mb-1 ms-1">Danger</span>`
    },
    pillTags = {
        script: `<span class="tag tag-default tag-pill mt-1 mb-1 ms-1">Default</span>
    <span class="tag tag-dark tag-pill mt-1 mb-1 ms-1">Dark</span>
    <span class="tag tag-primary tag-pill mt-1 mb-1 ms-1">Primary</span>
    <span class="tag tag-success tag-pill mt-1 mb-1 ms-1">Success</span>
    <span class="tag tag-info tag-pill mt-1 mb-1 ms-1">Info</span>
    <span class="tag tag-warning tag-pill mt-1 mb-1 ms-1">Warning</span>
    <span class="tag tag-danger tag-pill mt-1 mb-1 ms-1">Danger</span>`
    },
    defaultTagsAddon = {
        script: `<div class="tags">
    <span class="tag tag-default">
      One
      <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
    </span>
    <span class="tag tag-default">
      Two
      <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
    </span>
    <span class="tag tag-default">
      Three
      <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
    </span>
    <span class="tag tag-default">
      Four
      <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
    </span>
  </div>`
    };