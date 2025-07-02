document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const query = document.getElementById("searchBox").value;
  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
});
