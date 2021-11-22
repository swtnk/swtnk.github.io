
const generateExperince = (data) => {
    let experience = '';
    data.forEach(element => {
        experience += `<div class="content mt-0">
            <h6 class="duration float-end small">September 2021 - Present</h6>
            <h6>${element.title}</h6>
            <h6>${element.company} <span class="text-muted">${element.location}</span></h6>
            <ul>
                ${ element.description.map(item => `<li class="small">${item}</li>`).join('') }
            </ul>
        </div>`
    });
    return experience;
}

const resume_builder = (jsonData, element) => {
    element = document.querySelector(element);
    if (!element) {
        return false;
    }
    if (jsonData.length === 0) {
        return;
    } else {
        if (jsonData.hasOwnProperty('experience')) {
            let resume = `
            <div class="resume">
                <!-- <h1 class="text-center">Resume</h1> -->
                <page size="A4">
                    <div class="resume-header d-flex align-items-center justify-content-center">
                        <div class="text-center">
                            <h1 class="text-white"><span class="firstname">Swetank</span> <span class="lastname">Subham</span></h1>
                            <h6 class="mt-0 mb-1"><a class="text-white" href="tel:+919110090019">+91 9110 09 0019</a></h6>
                            <h6 class="mt-0 mb-1">
                                <a class="text-white mt-0 mb-1" href="mailto:swetanksubham.r@gmail.com">swetanksubham.r@gmail.com</a>
                                <p class="text-white mt-0 mb-1 d-inline-block">&bull;</p>
                                <a class="text-white mt-0 mb-1" href="https://swetanksubham.com/">swetanksubham.com</a>
                                <a class="text-white d-block mt-0" href="https://www.linkedin.com/in/swetank-subham/" target="_blank">linkedin.com/in/swetank-subham</a>
                            </h6>
                        </div>                                    
                    </div>
                    <div class="intro">
                        <div class="container-fluid p-4">
                            <div class="row">
                                <div class="col-9 text-justify">
                                    <p class="small">
                                    <strong>Software Engineer</strong>/<strong>Developer </strong>, with around <strong>10 months</strong> (internship)
                                    +<strong>
                                        <script>
                                            months = moment(new Date()).diff(moment("2019-07-01", "YYYY-MM-DD"), 'months');
                                            document.write(Math.floor(months / 12) + ' year(s) ');
                                            if (months % 12 > 0) {
                                                document.write('</strong> and <strong>' + (months % 12) + ' month(s)');
                                            }
                                        </script>
                                    </strong> years of experience in Software <strong>Back-End Development</strong> and <strong>Management</strong>, which includes several web apps and scripts. I describe myself as a life-long learner, implementer and <strong>Data Science</strong> enthusiast. I prefer smart work but always there for hard work if required.
                                    </p> 
                                    </div>
                                <div class="col-3">
                                    <img class="png-shadow about-photo" src="./static/media/images/swetank.png" alt="Swetank">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details">
                        <div class="container-fluid">
                            <div class="row" style="border-top: 0.5px solid #000;">
                                <div class="col-8" style="border-right: 0.5px solid #000;">
                                    <h2 class="mt-2 section-header">Experience</h2>
                                    <div class="container-fluid ps-0">
                                        <div class="row ps-0">
                                            <div class="timeline ps-0 pe-0 pt-0">
                                                <div class="line">
                                                    <div class="line-content" id="employment-section">
                                                        ${ generateExperince(jsonData.experience) }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                            </div>
                        </div>
                    </div>
                </page>
            </div>
            `
            element.innerHTML = resume;
        }
    }
}

export default resume_builder;