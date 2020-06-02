connect_class = 'full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view'
connect_buttons = document.getElementsByClassName(connect_class)
for(var cb in connect_buttons) {
if(connect_buttons[cb].getAttribute('data-control-name') == 'invite') {
connect_buttons[cb].click()
}
}
