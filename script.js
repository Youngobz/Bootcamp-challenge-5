$(document).ready(function () {
  var currentDate = dayjs().format("DD-MM-YYYY");
  var currentTime = dayjs().format("hh:mm:ss");

  function displayDateTime() {
    currentTime = dayjs().format("hh:mm:ss");
    $("#currentDay").text(
      ["Today's date is "] + currentDate + [" and the time is  "] + currentTime
    );
  }

  function changeColor() {
    $(".time-block").each(function () {
      var blockHour = parseInt(this.id.split("-")[1]);
      var currentHour = parseInt(dayjs().format("H"));

      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour > currentHour) {
        $(this).removeClass("past present").addClass("future");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      }
    });
  }

  function storeValue() {
    $(".saveBtn").on("click", function () {
      var description = $(this).siblings(".description").val().trim();
      var timeBlockId = $(this).parent().attr("id");
      localStorage.setItem(timeBlockId, description);
    });
  }

  function showValue() {
    $("textarea").each(function () {
      var textareaId = $(this).parent().attr("id");
      var storedValue = localStorage.getItem(textareaId);
      if (storedValue) {
        $(this).val(storedValue);
      }
    });
  }

  displayDateTime();
  storeValue();
  changeColor();
  showValue();

  // Update the current time every second
  setInterval(displayDateTime, 1000);
});
