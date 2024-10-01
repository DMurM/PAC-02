function selectChat(contactName) {
    document.getElementById('selectedUserName').textContent = contactName;
    document.getElementById('selectedUserPic').src = 'public/images/default_profile_pic.png'; 
    document.getElementById('messagesContainer').innerHTML = `
        <div class="message received">
            <p>Hey, I'm ${contactName}!</p>
        </div>
        <div class="message sent">
            <p>Hello, ${contactName}! How are you?</p>
        </div>
        <div class="message received">
            <p>I'm fine tank you, and how are you?</p>
        </div>
    `;
}

//Select first chat to default
window.onload = function() {
    const firstContact = document.querySelector('.contact'); 
    if (firstContact) {
        const contactName = firstContact.querySelector('h3').textContent;
        selectChat(contactName); 
    }
};
