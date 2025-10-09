let reviewCount = localStorage.getItem('review-count');

reviewCount = reviewCount ? parseInt(reviewCount) : 0;

reviewCount++;

localStorage.setItem('review-count', reviewCount);

document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('review-counter');
    counterDisplay.textContent = `You’ve submitted ${reviewCount} review(s).`;
});