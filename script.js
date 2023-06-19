const data = {
  Languages: ["Javascipt", "Typescript"],
  Frameworks: ["Angular", "Vue", "Sveltte", "NextJS"],
  Companies: ["Google", "Meta", "Vercel"],
};

const showTabContent = (content, contentContainer) => {
  contentContainer.replaceChildren([]);
  content.map((data) => {
    const div = document.createElement("DIV");
    div.textContent = data;
    contentContainer.appendChild(div);
  });
};

const toggleActiveTab = (activeTabIndex, contentContainer, data) => {
  tabs.map((tab, index) => {
    if (activeTabIndex === index) {
      tab.classList.add("active");
      showTabContent(data, contentContainer);
    } else tab.classList.remove("active");
  });
};
const getTabsFromData = (data) => {
  if (JSON.stringify(data) !== "{}") {
    return Object.keys(data).map((name, index) => {
      const tab = document.createElement("SPAN");
      tab.textContent = name;
      tab.classList.add("tab-button");
      return tab;
    });
  }
  return [];
};
const showTabs = (container, tabs, contentContainer, data) => {
  if (tabs?.length) {
    tabs.map((tab, index) => {
      tab.addEventListener("click", () => {
        toggleActiveTab(index, contentContainer, Object.values(data)[index]);
      });
      container.appendChild(tab);
    });
  }
};

const tabs = getTabsFromData(data);
const tabButtonsContainer = document.getElementsByClassName(
  "tab-buttons-container"
);
const contentContainer = document.getElementsByClassName("content-container");

if (tabButtonsContainer?.length && contentContainer?.length) {
  showTabs(tabButtonsContainer[0], tabs, contentContainer[0], data);
  toggleActiveTab(0, contentContainer[0], Object.values(data)[0]);
}
