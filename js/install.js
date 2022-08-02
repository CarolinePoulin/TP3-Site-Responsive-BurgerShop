let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

/** Event handler for beforeinstallprompt event.
 * Saves the event & shows install button.
 * @ param {Event} evt
 */

function saveBeforeInstallPromptEvent(evt) {
    // CODELAB: Add code to save event & show the install button
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

/** Event handler for buInstall - Does the PWA installation.
 * @ param {Event} evt
 */

function installPWA(evt) {
    // CODELAB: Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribut('hidden', true);

    // CODELAB: Log user response to prompt.
    deferredInstallPrompt.userChoice
    .then((choice) => {
        if (choice,outcome === 'accepted') {
            console.log("L'usager a installé la PWA via mon boutton.", choice);
        } else {
            console.log("L'usager a refusé d'installer la PWA.", choice);
        }
        deferredInstallPrompt = null;
    });
}

// CODELAB: Add event listener for appinstalled event

/** Event handler for appinstalled event.
 * Log the installation to analytics or save the event somehow.
 * @ param {Event} evt
 */

function logAppInstalled(evt) {
    // CODELAB: Add code to log the event
    console.log("L'usager a installé la PWA via les ... de Chrome.")
}