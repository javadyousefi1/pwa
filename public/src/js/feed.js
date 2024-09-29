var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if (defferPrompt) {
    defferPrompt.prompt();
    defferPrompt.userChoice.then(res => {
      console.log("res", res)
      if (res.outcome === "dismissed") {
        console.log("notOk", err)
      } else {
        console.log("ok", res)
      }
    })

    defferPrompt = null 
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
