import typewriterEffect from './helper.js';
import resume_builder from './resume.js';
(() => {
    const dataText = ['Software Developer / Engineer', 'Team Player', 'Learner', 'Data Science Enthusiast'];
    typewriterEffect('#typewriter', dataText, 100, 5000, 10000);

    const build_resume = (element) => {
        fetch('./static/app/data/resume.json').then(
            response => response.json()
        ).then(data => {
            resume_builder(data, element);
        }).catch(error => {
            console.log(error);
        });
    }

    build_resume('#resume');
})()
