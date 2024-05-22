
document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.getElementById('activity-input');
    var text = input.value;
    if (text.trim()) {
        var thread = document.createElement('div');
        thread.classList.add('thread');
        thread.textContent = text;
        document.getElementById('activity-threads').appendChild(thread);
        input.value = '';
    }
});
