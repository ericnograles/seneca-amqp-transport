/**
 * Internal literal that defines the configuration for message throttling
 * @type {{maximumMessages: number, enabled: boolean}}
 */
var config = {
  maximumMessages: 300,
  enabled: false,
  numberOfHandledMessages: 0
};

/**
 * This sets the configuration parameters for message throttling
 * @param options
 */
function initializeMessageThrottling(options) {
  config.maximumMessages = options.maximumMessages || config.maximumMessages;
  config.enabled = options.enabled || false;

  return config;
}

/**
 * Increments the internal counter of messages being handled
 */
function incrementNumberOfHandledMessages() {
  config.numberOfHandledMessages += 1;
}

/**
 * Decrements the internal counter of messages being handled
 */
function decrementNumberOfHandledMessages() {
  config.numberOfHandledMessages -= 1;
}

module.exports = {
  initializeMessageThrottling: initializeMessageThrottling,
  config: config,
  incrementNumberOfHandledMessages: incrementNumberOfHandledMessages,
  decrementNumberOfHandledMessages: decrementNumberOfHandledMessages
};
