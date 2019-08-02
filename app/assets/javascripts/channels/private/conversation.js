App.private_conversation = App.cable.subscriptions.create("Private::ConversationChannel", {
  connected: function() {
     // Called when the subscription is ready for use on the server

  },
  disconnected: function() {
     // Called when the subscription has been terminated by the server
  },
  received: function(data) {
     // Called when there's incoming data on the websocket for this channel
    send_message: function(message) {
      return this.perform('send_message', {
        message: message
      });
    }
  }
});

$(document).on('submit', '.send-private-message', function(e) {
  e.preventDefault();
  var values = $(this).serializeArray();
  App.private_conversation.send_message(values);
  $(this).trigger('reset');
});
