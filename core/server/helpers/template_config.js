// # Content Helper
// Usage: `{{content}}`, `{{content words="20"}}`, `{{content characters="256"}}`
//
// Turns content html into a safestring so that the user doesn't have to
// escape it or tell handlebars to leave it alone with a triple-brace.
//
// Enables tag-safe truncation of content by characters or words.

var proxy = require('./proxy'),
  _ = require('lodash'),
  downsize = require('downsize'),
  SafeString = proxy.SafeString;

module.exports = function template_config(context, options) {
  let config = {
    'land-see-hero': {
      'hero-carousel': [
        {
          'layout-classes': 'land-see-hero-left absolute',
          'id': 'land-see-hero-left',
          'classes': 'land-see-hero-carousel',
          'width': '1290',
          'height': '680',
          'layout': 'responsive',
          'on-action': 'slideChange:AMP.setState({selectedSlide: event.index})',
          'hero-slide': [
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Bold Coast Cottage',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/maine.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Interiors',
              'post-category-url': 'stories.amp.html?category=interiors#land-see-interiors',
              'post-title': 'Bold Coast Cottage in Main',
              'post-copy': 'My travels in Main have taken me to many destinations<br />not in the standard visitor’s guide.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-bottom',
                  'alt-text': 'Designer Kim Myeong',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/shoe-designer.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Fashion',
              'post-category-url': 'stories.amp.html?category=fashion#land-see-fashion',
              'post-title': 'Designer Kim Myeong',
              'post-copy': 'Relatively new to the industry, footwear designer Kim Myeong uses a unique<br />mix of color, texture, and material to make her shoes the must-haves of this year.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Skykomish River Valley ',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/paul-summers.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Design',
              'post-category-url': 'stories.amp.html?category=design#land-see-design',
              'post-title': 'Nature\'s Inspiration',
              'post-copy': 'Habitant lobortis dolor, dictumst feugiat pede diam, minim turpis ut, quam<br />sociosqu egestas sed lorem auctor dui. Venenatis deserunt nulla.'
            }
          ]
        },
        {
          'layout-classes': 'land-see-hero-main mx-auto',
          'id': 'land-see-hero-main',
          'classes': 'land-see-hero-carousel',
          'media-query': '(min-width: 40.06rem)',
          'width': '1290',
          'height': '680',
          'layout': 'responsive',
          'on-action': 'slideChange:AMP.setState({selectedSlide: event.index})',
          'hero-slide': [
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-bottom',
                  'alt-text': 'Designer Kim Myeong',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/shoe-designer.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Fashion',
              'post-category-url': 'stories.amp.html?category=fashion#land-see-fashion',
              'post-title': 'Designer Kim Myeong',
              'post-copy': 'Relatively new to the industry, footwear designer Kim Myeong uses a unique<br />mix of color, texture, and material to make her shoes the must-haves of this year.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Skykomish River Valley ',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/paul-summers.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Design',
              'post-category-url': 'stories.amp.html?category=design#land-see-design',
              'post-title': 'Nature\'s Inspiration',
              'post-copy': 'Habitant lobortis dolor, dictumst feugiat pede diam, minim turpis ut, quam<br />sociosqu egestas sed lorem auctor dui. Venenatis deserunt nulla.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Bold Coast Cottage',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/maine.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Interiors',
              'post-category-url': 'stories.amp.html?category=interiors#land-see-interiors',
              'post-title': 'Bold Coast Cottage in Main',
              'post-copy': 'My travels in Main have taken me to many destinations<br />not in the standard visitor’s guide.'
            }
          ]
        },
        {
          'layout-classes': 'land-see-hero-main mx-auto',
          'id': 'land-see-hero-main-small',
          'classes': 'land-see-hero-carousel',
          'media-query': '(max-width: 40rem)',
          'width': 'auto',
          'height': '570',
          'layout': 'fixed-height',
          'on-action': 'slideChange:AMP.setState({selectedSlide: event.index})',
          'hero-slide': [
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Designer Kim Myeong',
                  'width': 'auto', 'height': 278, 'layout': 'fixed-height',
                  'src': '../../img/land-see/content/shoe-designer-centered.jpg'
                }
              ],
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Fashion',
              'post-category-url': 'stories.amp.html?category=fashion#land-see-fashion',
              'post-title': 'Designer<br />Kim Myeong',
              'post-copy': 'Relatively new to the industry, footwear designer Kim Myeong uses a unique mix of color, texture, and material to make her shoes the must-haves of this year.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image',
                  'alt-text': 'Skykomish River Valley ',
                  'width': 'auto', 'height': 278, 'layout': 'fixed-height',
                  'src': '../../img/land-see/content/paul-summers.jpg'
                }
              ],
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Design',
              'post-category-url': 'stories.amp.html?category=design#land-see-design',
              'post-title': 'Nature\'s Inspiration',
              'post-copy': 'Habitant lobortis dolor, dictumst feugiat pede diam, minim turpis ut, quam sociosqu egestas sed lorem auctor dui. Venenatis deserunt nulla.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Bold Coast Cottage',
                  'width': 'auto', 'height': 278, 'layout': 'fixed-height',
                  'src': '../../img/land-see/content/maine.jpg'
                }
              ],
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Interiors',
              'post-category-url': 'stories.amp.html?category=interiors#land-see-interiors',
              'post-title': 'Bold Coast Cottage in Main',
              'post-copy': 'My travels in Main have taken me to many destinations not in the standard visitor’s guide.'
            }
          ],
          'hero-progress-carousel': {
            'button': [
              {
                'on-action': 'tap:AMP.setState({selectedSlide: 0})',
                'spacing-classes': 'px0',
                'image': [
                  {
                    'classes': 'land-see-progress-indicator land-see-selected-slide',
                    'dynamic-classes': 'selectedSlide == 0 ? \'land-see-progress-indicator land-see-selected-slide\' : \'land-see-progress-indicator\'',
                    'alt-text': 'Go to slide 1',
                    'width': 7, 'height': 7, 'layout': 'fixed',
                    'src': '../../img/land-see/structure/carousel-progress-indicator.svg'
                  }
                ]
              },
              {
                'on-action': 'tap:AMP.setState({selectedSlide: 1})',
                'spacing-classes': 'px1',
                'image': [
                  {
                    'classes': 'land-see-progress-indicator',
                    'dynamic-classes': 'selectedSlide == 1 ? \'land-see-progress-indicator land-see-selected-slide\' : \'land-see-progress-indicator\'',
                    'alt-text': 'Go to slide 2',
                    'width': 7, 'height': 7, 'layout': 'fixed',
                    'src': '../../img/land-see/structure/carousel-progress-indicator.svg'
                  }
                ]
              },
              {
                'on-action': 'tap:AMP.setState({selectedSlide: 2})',
                'spacing-classes': 'px0',
                'image': [
                  {
                    'classes': 'land-see-progress-indicator',
                    'dynamic-classes': 'selectedSlide == 2 ? \'land-see-progress-indicator land-see-selected-slide\' : \'land-see-progress-indicator\'',
                    'alt-text': 'Go to slide 3',
                    'width': 7, 'height': 7, 'layout': 'fixed',
                    'src': '../../img/land-see/structure/carousel-progress-indicator.svg'
                  }
                ]
              }
            ]
          }
        },
        {
          'layout-classes': 'land-see-hero-right absolute',
          'id': 'land-see-hero-right',
          'classes': 'land-see-hero-carousel',
          'width': '1290',
          'height': '680',
          'layout': 'responsive',
          'on-action': 'slideChange:AMP.setState({selectedSlide: event.index})',
          'hero-slide': [
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Skykomish River Valley ',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/paul-summers.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Design',
              'post-category-url': 'stories.amp.html?category=design#land-see-design',
              'post-title': 'Nature\'s Inspiration',
              'post-copy': 'Habitant lobortis dolor, dictumst feugiat pede diam, minim turpis ut, quam<br />sociosqu egestas sed lorem auctor dui. Venenatis deserunt nulla.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-top',
                  'alt-text': 'Bold Coast Cottage',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/maine.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Interiors',
              'post-category-url': 'stories.amp.html?category=interiors#land-see-interiors',
              'post-title': 'Bold Coast Cottage in Main',
              'post-copy': 'My travels in Main have taken me to many destinations<br />not in the standard visitor’s guide.'
            },
            {
              'image': [
                {
                  'classes': 'cover land-see-hero-image land-see-cover-position-bottom',
                  'alt-text': 'Designer Kim Myeong',
                  'width': 1290, 'height': 680, 'layout': 'responsive',
                  'src': '../../img/land-see/content/shoe-designer.jpg'
                }
              ],
              'post-classes': 'absolute',
              'post-url': 'kim-myeong.amp.html',
              'post-button-text': 'Read More',
              'post-category': 'Fashion',
              'post-category-url': 'stories.amp.html?category=fashion#land-see-fashion',
              'post-title': 'Designer Kim Myeong',
              'post-copy': 'Relatively new to the industry, footwear designer Kim Myeong uses a unique<br />mix of color, texture, and material to make her shoes the must-haves of this year.'
            }
          ]
        }
      ]
    },
    'land-see-story-carousel': {
      'title': 'Popular',
      'height': 450,
      'list-src': './api/popular.json',
      'observer': {
        'action': 'enter:popularSlideIn.start'
      }
    },
    'summer-sale-cta': {
      'background-animation': {
        'svg-image': [
          {
            'classes': 'land-see-background-image-left',
            'svg': '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 690 551\' overflow=\'visible\'><path fill=\'#add8bf\' d=\'M345.048 0l-.032.051-.033-.051L0 550.606h690.031z\'/></svg>'
          },
          {
            'classes': 'land-see-background-image-right',
            'svg': '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 491 392\' overflow=\'visible\'><path fill=\'#fcdcd4\' d=\'M491.354 0h-280.98v.004H0l210.374 335.771v.005l35.301 56.34.001-.001.004.006 35.3-56.34v-.015z\'/></svg>'
          }
        ]
      },
      'url': '#',
      'image': [
        {
          'classes': 'mt3 mb3',
          'alt-text': 'Summer Sale!',
          'media-query': '(min-width: 611px)',
          'width': 813, 'height': 342, 'layout': 'responsive',
          'src': '../../img/land-see/content/summer-sale-lg.gif',
          'src-placeholder': '../../img/land-see/content/summer-sale-lg.jpg'
        },
        {
          'classes': 'mt3 mb3',
          'alt-text': 'Summer Sale!',
          'media-query': '(min-width: 361px) and (max-width: 610px)',
          'width': 610, 'height': 342, 'layout': 'responsive',
          'src': '../../img/land-see/content/summer-sale-md.gif',
          'src-placeholder': '../../img/land-see/content/summer-sale-md.jpg'
        },
        {
          'classes': 'mt4 mb4',
          'alt-text': 'Summer Sale!',
          'media-query': '(max-width: 360px)',
          'width': 329, 'height': 348, 'layout': 'responsive',
          'src': '../../img/land-see/content/summer-sale-sm.gif',
          'src-placeholder': '../../img/land-see/content/summer-sale-sm.jpg'
        }
      ]
    },
    'land-see-recent': {
      'title': 'Recent Stories',
      'recent-stories': [
        {
          'image': [
            {
              'classes': 'cover',
              'alt-text': 'Studio Serif, interior.',
              'width': 409, 'height': 305, 'layout': 'responsive',
              'src': '../../img/land-see/content/studio-310px.jpg'
            }
          ],
          'post-classes': 'land-see-pre-animate land-see-post-item land-see-post-item-wide land-see-post-featured col land-see-recent',
          'post-url': 'kim-myeong.amp.html',
          'post-category': 'Design',
          'post-category-url': 'stories.amp.html?category=design#land-see-design',
          'post-title': 'Office Tour: Studio Serif',
          'post-copy': 'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.'
        },
        {
          'image': [
            {
              'classes': 'cover',
              'alt-text': 'Build a killer outfit.',
              'width': 409, 'height': 370, 'layout': 'responsive',
              'src': '../../img/land-see/content/retail-shop-370px.jpg'
            }
          ],
          'post-classes': 'land-see-pre-animate land-see-post-item land-see-post-item-wide land-see-post-featured col land-see-recent',
          'post-url': 'kim-myeong.amp.html',
          'post-category': 'Fashion',
          'post-category-url': 'stories.amp.html?category=fashion#land-see-fashion',
          'post-title': 'New Textile & Basics Shop Opens in Soho',
          'post-copy': 'Everyone’s wardrobe needs the well-fitting, structured, and neutral basics to provide the start for the building of a killer outfit.'
        },
        {
          'image': [
            {
              'classes': 'cover',
              'alt-text': 'Feel the sand on your feet, not your wardrobe weight.',
              'width': 409, 'height': 370, 'layout': 'responsive',
              'src': '../../img/land-see/content/travel-accessories-outfits-2-400px.jpg'
            }
          ],
          'post-classes': 'land-see-pre-animate land-see-post-item land-see-post-item-wide col col-6 land-see-recent',
          'post-url': 'kim-myeong.amp.html',
          'post-category': 'Fashion',
          'post-category-url': 'stories.amp.html?category=fashion#land-see-fashion',
          'post-title': 'How to Pack Light When Traveling',
          'post-copy': 'Whether it’s a short weekend getaway or an extended holiday, choosing carefully from your accessories can help lighten your load while expanding your repertory.'
        },
        {
          'image': [
            {
              'classes': 'cover',
              'alt-text': 'Epression of aesthetics.',
              'width': 409, 'height': 305, 'layout': 'responsive',
              'src': '../../img/land-see/content/timeless-design-350px.jpg'
            }
          ],
          'post-classes': 'land-see-pre-animate land-see-post-item land-see-post-item-wide col col-6 land-see-recent',
          'post-url': 'kim-myeong.amp.html',
          'post-category': 'Design',
          'post-category-url': 'stories.amp.html?category=design#land-see-design',
          'post-title': 'Timeless Design: A History of Watches',
          'post-copy': 'A fashionable timepiece is as much a bold statement of one’s individuality, an expression of aesthetics, as it is an implement of progress.'
        }
      ],
      'accent-animation': {
        'svg-image': {
          'classes': 'land-see-recent-accent-image',
          'svg': '<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'44\' height=\'35\' viewBox=\'0 0 44 35\' overflow=\'visible\'><path fill=\'#3D6458\' d=\'M43.535 34.74H0L21.767 0z\'/></svg>'
        }
      }
    },
    'story-categories': {
      'section': [
        {
          'title': 'Arts & Culture',
          'observer': {
            'action': 'enter:accordionSlideIn.start'
          },
          'classes': 'land-see-stories land-see-arts-culture',
          'expanded': 'expanded',
          'list-src': './api/arts-culture-accordion.json',
          'height': 430
        },
        {
          'title': 'Design',
          'classes': 'land-see-stories land-see-design',
          'list-src': './api/design-accordion.json',
          'height': 495
        },
        {
          'title': 'Fashion',
          'classes': 'land-see-stories land-see-fashion',
          'list-src': './api/fashion-accordion.json',
          'height': 460
        },
        {
          'title': 'Interiors',
          'classes': 'land-see-stories land-see-interiors',
          'list-src': './api/interiors-accordion.json',
          'height': 430
        }
      ]
    },
    'instagram-cta': {
      'url': 'https://www.instagram.com/lifeatgoogle/',
      'image': [
        {
          'classes': 'mt3 mb3',
          'alt-text': 'Instagram, follow us!',
          'media-query': '(min-width: 608px)',
          'width': 813, 'height': 270, 'layout': 'responsive',
          'src': '../../img/land-see/content/instagram-cta-lg.gif',
          'src-placeholder': '../../img/land-see/content/instagram-cta-lg.png'
        },
        {
          'classes': 'mt3 mb3',
          'alt-text': 'Instagram, follow us!',
          'media-query': '(min-width: 361px) and (max-width: 607px)',
          'width': 607, 'height': 282, 'layout': 'responsive',
          'src': '../../img/land-see/content/instagram-cta-md.gif',
          'src-placeholder': '../../img/land-see/content/instagram-cta-md.png'
        },
        {
          'classes': 'mt4 mb4',
          'alt-text': 'Instagram, follow us!',
          'media-query': '(max-width: 360px)',
          'width': 328, 'height': 210, 'layout': 'responsive',
          'src': '../../img/land-see/content/instagram-cta-sm.gif',
          'src-placeholder': '../../img/land-see/content/instagram-cta-sm.png'
        }
      ]
    }
  };
  
  Object.defineProperty(context, 'theme', {
    value: config
  });
  
  console.log('DUMPING CONTEXT theme prop ---------------');
  console.log(JSON.stringify(context.theme));
  
  return context.theme
};
