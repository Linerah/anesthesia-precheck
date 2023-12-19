function changeTab(tabId) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName('tab-content');
    for (const content of tabContents) {
        content.style.display = 'none';
    }

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';

        // Scroll to the selected tab content
        selectedTab.scrollIntoView({ behavior: 'smooth' });
    }
}