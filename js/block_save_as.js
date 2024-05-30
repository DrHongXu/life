window.onload = function () {
  // Block certain keyboard shortcuts
  document.onkeydown = function (e) {
    e = e || window.event;

    // Block F12
    if (e.keyCode == 123) {
      return false;
    }
    // Block Ctrl+Shift+I
    else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      return false;
    }
    // Block Shift+F10
    else if (e.shiftKey && e.keyCode == 121) {
      return false;
    }
    // Block Ctrl+S (Save As)
    else if (e.ctrlKey && e.keyCode == 83) {
      e.preventDefault();
      return false;
    }
    // Block Ctrl+C (Copy)
    else if (e.ctrlKey && e.keyCode == 67) {
      return false;
    }
  };

  // Block right-click context menu
  document.oncontextmenu = function () {
    return false;
  };

  // Block text selection (Copy action)
  document.onselectstart = function () {
    return false;
  };
};