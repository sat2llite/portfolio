const ctx = document.getElementById("myChart").getContext("2d");

const barChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [95],
        backgroundColor: ["rgb(52, 52, 52)"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        circumference: [342],
      },
    ],
  },
  options: {
    responsive: true,
    cutout: [140],
  },
});

const ctx02 = document.getElementById("myChart02").getContext("2d");

const barChart02 = new Chart(ctx02, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [90],
        backgroundColor: ["rgb(52, 52, 52)"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        cutout: [140],
        circumference: [324],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctx03 = document.getElementById("myChart03").getContext("2d");

const barChart03 = new Chart(ctx03, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [90],
        backgroundColor: ["rgb(52, 52, 52)"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        cutout: [140],
        circumference: [324],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctx04 = document.getElementById("myChart04").getContext("2d");

const barChart04 = new Chart(ctx04, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [70],
        backgroundColor: ["rgb(52, 52, 52)"],
        borderColor: ["rgba(0, 0, 0, 0)"],
        cutout: [140],
        circumference: [252],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var inView = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemTop <= docViewBottom && elemBottom >= docViewTop;
}

$(window).scroll(function () {
  if (isScrolledIntoView("#charts")) {
    if (inView) {
      return;
    }
    inView = true;
    new Chart(document.getElementById("charts").getContext("2d")).doughnut(
      data
    );
  } else {
    inView = false;
  }
});
