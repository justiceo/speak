
import { Logger } from "../logger";

const log = new Logger("background-script");
const uninstallUrl = "https://justiceo.github.io/speak/uninstall.html";
const welcomeUrl = "https://justiceo.github.io/speak/welcome.html";

const onInstalled = (details: chrome.runtime.InstalledDetails) => {
  // On fresh install, open page how to use extension.
  if (details.reason === "install") {
    chrome.tabs.create({
      url: welcomeUrl,
      active: true,
    });
  }

  // Set url to take users upon uninstall.
  chrome.runtime.setUninstallURL(uninstallUrl, () => {
    if (chrome.runtime.lastError) {
      log.error("Error setting uninstall URL", chrome.runtime.lastError);
    }
  });
};
chrome.runtime.onInstalled.addListener(onInstalled);
