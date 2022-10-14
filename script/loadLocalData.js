function loadLocalData(){
    renderJobs()
    let userData       = JSON.parse(localStorage.getItem("WebWomen:selectedJobs"))
    selectedjobsArr    = userData
    renderSelectedJobs(userData)
    selectedjobsArr.forEach(job => {
        updateButtonForSelectedJob(job.id)
    })
}
loadLocalData()

function updateButtonForSelectedJob(jobId){
    let button = document.querySelector(`[data-job-id="${jobId}"]`)
    button.dataset.isSelected = "true"
    button.innerText = "Remover Candidatura"
}