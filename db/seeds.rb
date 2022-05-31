GREETINGS = [
  {
    :text => 'Hello'
  },
  {
    :text => 'How are you?'
  },
  {
    :text => "What's up?"
  },
  {
    :text => 'How have you been?'
  },
  {
    :text => 'You good?'
  }
]

GREETINGS.each do |greeting|
  Greeting.create(text: greeting[:text])
end