var selectedjobsArr = []

function addEventJobButton(button){
    button.addEventListener("click", (e) => {

        if(e.target.dataset.isSelected === "false"){
        let job = jobsData.find(job => job.id === Number(e.target.dataset.jobId))
        e.target.dataset.isSelected = "true"
        e.target.innerText = `Remover Candidatura`
        selectedjobsArr.push(job)
        localStorage.setItem("WebWomen:selectedJobs", JSON.stringify(selectedjobsArr))  
    }
    else{
       let job = e.target.dataset.jobId
       removeJob(job)
       e.target.innerText = "Candidatar"
       localStorage.setItem("WebWomen:selectedJobs", JSON.stringify(selectedjobsArr))
       e.target.dataset.isSelected = "false"
    }
    renderSelectedJobs()
    })
}

function renderSelectedJobs(array = selectedjobsArr){
    const selectedJobUl     = document.getElementById("selectedjobs")
    selectedJobUl.innerHTML = ""
    if(array.length === 0){
        selectedJobUl.innerHTML = `
        <div class="no-job flex-column">
            <span class="font-size-text-2 font-color_grey-2">Você ainda não aplicou para nenhuma vaga</span>
            <img src="./assets/img/no-items.svg" alt="no-items">
        </div>`
    }
    array.forEach(job => {

    let jobCard        = document.createElement("li")
    let jobCardHeader  = document.createElement("div")
    let jobTitle       = document.createElement("h2")
    let jobButtonTrash = document.createElement("button")
    let jobInformate   = document.createElement("div")
    let jobCompany     = document.createElement("span")
    let jobCity        = document.createElement("span")

    jobCard.classList           = "flex-column"
    jobCardHeader.classList     = "flex gap-trash justify-between"
    jobInformate.classList      = "info flex"
    jobTitle.classList          = "font-size-4 font-color_grey-1"
    jobButtonTrash.classList    = "button-trash"
    jobCard.dataset.selectedjob = job.id

    jobTitle.innerText          = `${job.title}`
    jobCompany.innerText        = `${job.enterprise}`
    jobCity.innerText           = `${job.location}`
    jobButtonTrash.innerText    = ``
    jobButtonTrash.dataset.selectedjob = job.id
    addTrashEvent(jobButtonTrash)

    jobCard.append(jobCardHeader, jobInformate)
    jobCardHeader.append(jobTitle, jobButtonTrash)
    jobInformate.append(jobCompany, jobCity )
    selectedJobUl.append(jobCard)
})
}

function removeJob(job){
    selectedjobsArr = selectedjobsArr.filter(item => item.id !== Number(job))

}

function addTrashEvent(button){
    button.addEventListener("click", (e) => {
       let jobId = e.target.dataset.selectedjob
       console.log(e.target)
       removeJob(jobId)
       renderSelectedJobs()
       updateButtonForUnselectedJob(jobId)
    })
    
}
function updateButtonForUnselectedJob(jobId){
    let button = document.querySelector(`[data-job-id="${jobId}"]`)
    button.dataset.isSelected = "false"
    button.innerText = "Candidatar"
}