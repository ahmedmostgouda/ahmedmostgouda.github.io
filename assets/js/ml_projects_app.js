const POSTS_PER_PAGE = 6;
let currentPage = 0;

const projects = [
  "covid_detection_post",
  "lung_segmentation_post",
  "brainDL_sem3_post",
  "atlas_sem3_post",
  "histo_sem3_post",
  "dermo_sem3_post",
  "chest_sem3_post",
  "brats_sem2_post",
  "mammo_sem2_post",
  "fuzzy_sem2_post",
  "heart_sem1_post",
  "cocacola_sem1_post",
];

const totalPages = Math.ceil(projects.length / POSTS_PER_PAGE);

function renderPage(page) {
  const container = $("#posts-container");
  container.empty();

  projects
    .slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE)
    .forEach(id => {
      $("<article>")
        .load(`projectsposts/${id}.html`)
        .appendTo(container);
    });

  currentPage = page;

  renderTitle(page)
  renderPagination();
}

function renderTitle(page) {
  // Update title
  $("#pageTitle").text(
    `Machine/Deep Learning Projects (page ${page + 1}/${totalPages}):`
  );
}

function renderPagination() {
  const pagination = $("#pagination");
  pagination.empty();

  // Previous (ONLY if not on first page)
  if (currentPage > 0) {
    $("<a>")
      .addClass("previous")
      .attr("href", "#")
      .text("Previous")
      .on("click", e => {
        e.preventDefault();
        renderPage(currentPage - 1);
      })
      .appendTo(pagination);
  }

  // Page numbers
  for (let i = 0; i < totalPages; i++) {
    $("<a>")
      .addClass("page")
      .toggleClass("active", i === currentPage)
      .attr("href", "#")
      .text(i + 1)
      .on("click", e => {
        e.preventDefault();
        renderPage(i);
      })
      .appendTo(pagination);
  }

  // Next (ONLY if not on last page)
  if (currentPage < totalPages - 1) {
    $("<a>")
      .addClass("next")
      .attr("href", "#")
      .text("Next")
      .on("click", e => {
        e.preventDefault();
        renderPage(currentPage + 1);
      })
      .appendTo(pagination);
  }
}

$(document).ready(function () {
  renderPage(0);
});
