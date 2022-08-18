import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

// USE THIS METHODE IF YOU HAVE A PORTFOLIO WITH LIVE DEMOS ---(just select the code and press CTRL + /) //

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Portfolio 1 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'Portfolio 2 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'Portfolio 3 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Portfolio 4 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'Portfolio 5 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'Portfolio 6 item name',
//     github: 'https://github.com',
//     demo: 'link of the portfolio live demos'
//   },
// ]


// const portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {
//           data.map(({id, image, title, github, demo}) => {
//             return (
//               <article key={id} className='portfolio__item'>
//               <div className="portfolio__item-image">
//                 <img src={image} alt={title}/>
//               </div>
//               <h3>This is a portfolio item title</h3>
//               <div className="portfolio__item-cta">
//                 <a href={github} className='btn' target='_blank'>Github</a>
//                 <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </article>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default portfolio

 /*-----------------------------------------*/
 // DELETE THIS IF YOU GONA USE THE LIVE DEMOS METHODE //
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Portfolio item 1</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>Portfolio item 2</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>Portfolio item 3</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>
          </div>
          <h3>Portfolio item 4</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
          <h3>Portfolio item 5</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>
          </div>
          <h3>Portfolio item 6</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio