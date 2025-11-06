const saleToggleBtn = document.getElementById('sale-toggle');
const aboutBlock = document.querySelector('.sale .products-card__about');

const bestsellerToggleBtn = document.getElementById('bestseller-toggle');
const aboutBestsellerBlock = document.querySelector('.bestseller .products-card__about');

const recommendationToggleBtn = document.getElementById('recommendation-toggle');
const aboutRecommendationBlock = document.querySelector('.recommendation .products-card__about');

const saleSelect = document.querySelector('.sale-select');
const breakpoint = window.matchMedia('(min-width: 920px)');

const initSaleToggle = () => {
  if (!saleToggleBtn || !aboutBlock) {
    return;
  }

  saleToggleBtn.addEventListener('click', () => {
    aboutBlock.classList.toggle('products-card__about--open');
    saleToggleBtn.classList.toggle('slider-toggle--open');
  });
};

const initBestsellerToggle = () => {
  if (!bestsellerToggleBtn || !aboutBestsellerBlock) {
    return;
  }

  bestsellerToggleBtn.addEventListener('click', () => {
    aboutBestsellerBlock.classList.toggle('products-card__about--open');
    bestsellerToggleBtn.classList.toggle('slider-toggle--open');
  });
};

const initRecommendationToggle = () => {
  if (!recommendationToggleBtn || !aboutRecommendationBlock) {
    return;
  }

  recommendationToggleBtn.addEventListener('click', () => {
    aboutRecommendationBlock.classList.toggle('products-card__about--open');
    recommendationToggleBtn.classList.toggle('slider-toggle--open');
  });
};


const changeTabIndex = () => {
  if (breakpoint.matches) {
    saleSelect.tabIndex = -1;
  } else {
    saleSelect.tabIndex = 0;
  }
};
changeTabIndex();

breakpoint.addEventListener('change', () => changeTabIndex());

export { initSaleToggle, initBestsellerToggle, initRecommendationToggle };
