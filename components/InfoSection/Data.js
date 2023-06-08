import imgOne from '../../images/pizza1.png';
import imgTwo from '../../images/oven1.png';
import imgThree from '../../images/landscape.png';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Our Mission',
    headLine: 'We make delicious, authentic pizzas using only the best ingredients, while providing friendly and exceptional service.',
    description: 'Our passion for pizza drives us to create authentic and unique recipes that honor our rich history and Italian heritage.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: imgOne,
    alt: 'imgOne',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Our History',
    headLine: 'Founded by Italian immigrants with history to tell',
    description: 'Our pizza restaurant was founded by a group of Italian immigrants who came to the United States in the early 1900s. They brought with them traditional recipes and a passion for pizza, which they shared with their new community. Over the years, our restaurant has become a beloved institution, known for our delicious pizzas and warm hospitality.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: imgTwo,
    alt: 'imgTwo',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Our Values',
    headLine: 'Our values are rooted in our dedication to quality and our love of pizza.',
    description: 'We honor our Italian Heritage and tradition by using authentic recipes, cooking methods and highest-quality ingredients. We support our local community by sourcing our ingredients from local suppliers.',
    buttonLabel: 'Learn more',
    imgStart: false,
    img: imgThree,
    alt: 'imgThree',
    dark: true,
    primary: true,
    darkText: false
};