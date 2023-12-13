$(document).ready(function () {
  // Animation Example
  $(".animated-text").fadeIn(2000);

  // Image Upload functionality
  $("#upload-area").on("dragover", function (e) {
    e.preventDefault();
    $(this).addClass("dragover");
  });

  $("#upload-area").on("dragleave", function (e) {
    e.preventDefault();
    $(this).removeClass("dragover");
  });

  $("#upload-area").on("drop", function (e) {
    e.preventDefault();
    $(this).removeClass("dragover");
    handleImageUpload(e.originalEvent.dataTransfer.files);
  });

  $("#file-input").on("change", function (e) {
    handleImageUpload(e.target.files);
  });

  function handleImageUpload(files) {
    for (const file of files) {
      displaySelectedImage(file);
    }
  }

  function displaySelectedImage(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Create an <img> element and set its src attribute
      const imgElement = $("<img>", {
        src: e.target.result,
        class: "uploaded-image",
        style: "width: 100px; height: auto;",
      });

      // Append the <img> element to a container (e.g., #selectedImages)
      $("#upload-area").html(imgElement);
    };

    // Read the selected image file as a data URL
    reader.readAsDataURL(file);
  }
});
