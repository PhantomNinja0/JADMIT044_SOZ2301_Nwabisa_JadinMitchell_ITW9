const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const icon4 = document.getElementById('icon4');
const icon5 = document.getElementById('icon5');
const icon6 = document.getElementById('icon6');

const hiddenDiv1 = document.getElementById('s1');
const hiddenDiv2 = document.getElementById('s2');
const hiddenDiv3 = document.getElementById('s3');
const hiddenDiv4 = document.getElementById('s4');
const hiddenDiv5 = document.getElementById('s5');
const hiddenDiv6 = document.getElementById('s6');

const shownDiv = document.getElementById('def');

icon1.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv1.style.display = 'block';
  shownDiv.style.display = 'none';
});

icon1.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv1.style.display = 'none';
  shownDiv.style.display = 'block';
});


icon2.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv2.style.display = 'block';
  shownDiv.style.display = 'none';
});

icon2.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv2.style.display = 'none';
  shownDiv.style.display = 'block';
});


icon3.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv3.style.display = 'block';
  shownDiv.style.display = 'none';
});

icon3.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv3.style.display = 'none';
  shownDiv.style.display = 'block';
});


icon4.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv4.style.display = 'block';
  shownDiv.style.display = 'none';
});

icon4.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv4.style.display = 'none';
  shownDiv.style.display = 'block';
});


icon5.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv5.style.display = 'block';
  shownDiv.style.display = 'none';
});

icon5.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv5.style.display = 'none';
  shownDiv.style.display = 'block';
});


icon6.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv6.style.display = 'block';
  shownDiv.style.display = 'none';
});

icon6.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv6.style.display = 'none';
  shownDiv.style.display = 'block';
});
