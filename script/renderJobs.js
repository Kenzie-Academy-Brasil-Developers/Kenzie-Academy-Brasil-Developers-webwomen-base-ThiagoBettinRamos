function renderJobs(array = jobsData){
    const ul = document.getElementById("jobsList")
    ul.innerHTML = ""

    array.forEach(job => {
        let jobCard        = document.createElement("li")
        let jobCardHeader  = document.createElement("div")
        let jobTitle       = document.createElement("h2")
        let jobInformate   = document.createElement("div")
        let jobCompany     = document.createElement("span")
        let jobCity        = document.createElement("span")
        let jobDescription = document.createElement("p")
        let jobFooter      = document.createElement("div")
        let jobLabel       = document.createElement("span")
        let jobButton      = document.createElement("button")

        jobCard.classList        = "card flex flex-column"
        jobCardHeader.classList  = "flex-column gap-1-28"
        jobTitle.classList       = "font-size-3 font-color_grey-1"
        jobInformate.classList   = "info flex font-size-text-3 font-color_grey-2"
        jobDescription.classList = "info flex font-size-text-2 font-color_grey-2"
        jobFooter.classList      = "flex justify-between mobile-flex-column gap-1-28"
        jobLabel.classList       = "label font-size-text-3 font-color_grey-2"
        jobButton.classList      = "button-small font-color_grey-6"

        jobTitle.innerText       = `${job.title}`
        jobCompany.innerText     = `${job.enterprise}`
        jobCity.innerText        = `${job.location}`
        jobDescription.innerText = `${job.descrition}`
        jobLabel.innerText       = `${job.modalities[0]}`
        jobButton.innerText      = `Candidatar`
        jobButton.dataset.jobId  = job.id
        jobButton.dataset.isSelected = false
        addEventJobButton(jobButton)
        
        jobCard.append(jobCardHeader, jobDescription, jobFooter)
        jobCardHeader.append(jobTitle, jobInformate)
        jobInformate.append(jobCompany, jobCity)
        jobFooter.append(jobLabel, jobButton)
        ul.append(jobCard)


    })
    

}




