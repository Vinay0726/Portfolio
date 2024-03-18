let btn_exp = document.getElementById(`btn_exp`);
let btn_edu = document.getElementById(`btn_edu`);
let btn_skills = document.getElementById(`btn_skills`);

let exp = document.getElementById(`exp`);
let edu = document.getElementById(`edu`);
let skills = document.getElementById(`skills`);

btn_exp.addEventListener(`click`, () => {
  exp.style.display = `block`;
  edu.style.display = `none`;
  skills.style.display = `none`;
});

btn_edu.addEventListener(`click`, () => {
  exp.style.display = `none`;
  edu.style.display = `block`;
  skills.style.display = `none`;
});

btn_skills.addEventListener(`click`, () => {
  exp.style.display = `none`;
  edu.style.display = `none`;
  skills.style.display = `block`;
});
