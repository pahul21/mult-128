$(document).ready(function () {
  $('.filter-btn').click(function () {
    const filterValue = $(this).attr('data-filter');

    if (filterValue === 'all') {
      $('.menu-item').show();
    } else {
      $('.menu-item').hide();
      $('.' + filterValue).show();
    }
  });

  $('form').submit(function (e) {
    e.preventDefault();
  alert('Reservation submitted!');
  });
});
