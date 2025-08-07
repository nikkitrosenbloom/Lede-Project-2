var config = {
    style: 'mapbox://styles/nikkidancer917/cmcnji0yn00gf01s0h4qzhq21',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoibmlra2lkYW5jZXI5MTciLCJhIjoiY21iemx1bWJyMGxhMDJpcHkzdGdkNzg2YSJ9.bikobHGgxc4Sd73vID_2UA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'NYC Public Art Installations',
    subtitle: 'How are public art installations distributed across New York City?',
    byline: 'By Nikki Rosenbloom',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro-screen',
            alignment: 'center',
            hidden: false,
            title: 'NYC Public Art Installations',
            description: `
                <div class="intro-text">
                    <p>New York City's streets aren't just for walking; they're an evolving canvas. Since 2008, the city has commissioned over 500 public art installations, adding bursts of color, culture, and commentary to the urban landscape. But where exactly are these works being placed, and why? This story maps their distribution and explores how intentional (or not) that placement may be, especially in relation to public schools.</p>
                </div>
            `,
            class: 'intro-style--solid',
            location: {
              center: [-74.0059, 40.7128],
              zoom: 9,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: null,
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: [] 
          },          
        {
            id: 'qgis-screenshot',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './assets/Public-Art-Map2.png',
            description: 'This map shows the different program initiatives by the NYC Department of Transporation since the pandemic, from 2021-2025. There are 7 programs, organized by color. While the points cluster naturally in denser areas, there are distinct pockets that stick out – particularly in lower Manhattan, downtown Brooklyn, and parts of the Bronx. The green highlighted areas are pedestrian plazas, home to many of the installations through BIDs, or Business Improvement Districts. The majority of artworks fall under the "Arterventions" category, as it represents nonprofit organizations and professional artists who have been commissioned to create temporary or permanent installations in public spaces.',
            class: 'intro-style',
            location: {
                center: [-74.0059, 40.7128],
                zoom: 9,
                pitch: 0,
                bearing: 0
              },
            mapAnimation: null,
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'nyc-art-installations',
                    opacity: 0,
                    duration: 2000
                }  
            ],
            onChapterExit: []
        },
        {
            id: 'overview-map',
            alignment: 'left',
            hidden: false,
            title: 'Where is the art?',
            description: 'From this angle, you can clearly view the cluster in lower Manhattan and downtown Brooklyn. The art is heavily saturated in tourist-heavy neighborhoods, like Flatiron, Union Square, Dumbo, and Times Square. The nonprofits representing these areas comprise the overwhelming majority of installations from the past four years. These two boroughs are home to major transit hubs, cultural destinations, and photo opps, but is visibility the only motivation behind these choices? Let’s look at some of the art pieces in these areas.',
            location: {
                center: [-74.034, 40.717],
                zoom: 9.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'nyc-art-installations',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                    layer: 'nyc-public-schools',  // or 'nyc-pedestrian-plazas'
                    opacity: 0,
                    duration: 0
                  },
                  {
                    layer: 'nyc-pedestrian-plazas',  // or 'nyc-pedestrian-plazas'
                    opacity: 0,
                    duration: 0
                  },
                  {
                    layer: 'kelp-parade',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'dot-school-art',
                    opacity: 0,
                    duration: 0
                  }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'kelp-parade',
            alignment: 'left',
            hidden: false,
            title: 'Kelp Parade, 2024',
            image: './assets/kelp 3.jpg',
            description: 'Several art pieces are commissioned by NYC DOT for environmental awareness. Artists Amanda Thackray and Wendell Jeffrey brought a kelp forest to life using flags made by 24 recycled plastic bags. It was an act of "environmental stewardship and oceanic resilience," according to Thackray. This parade involved a handful of people who walked through the Flatiron districts with these ecofriendly flags. This was specifically for Car Free Earth Day.',
            location: {
                center: [-73.991, 40.741],
                zoom: 15.88,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-pedestrian-plazas',
                    opacity: 1,
                    duration: 2000
                    },
                    {
                        layer: 'nyc-public-schools',  // or 'nyc-pedestrian-plazas'
                        opacity: 0,
                        duration: 0
                      },
                      {
                        layer: 'nyc-pedestrian-plazas',  // or 'nyc-pedestrian-plazas'
                        opacity: 1,
                        duration: 2000
                      },
                      {
                        layer: 'kelp-parade',
                        opacity: 1,
                        duration: 1000
                    },
                    {
                        layer: 'highlight-circle-layer',
                        visibility: 'none'
                },
                {
                    layer: 'dot-school-art',
                    opacity: 0,
                    duration: 4000
                  }
            ],
            onChapterExit: [
                {
                    layer: 'kelp-parade',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'dumbo-asphalt',
            alignment: 'left',
            hidden: false,
            title: '"Primary Directional"',
            image: './assets/dumbo-asphalt.jpg',
            description: 'Dumbo BID is responsible for the majority of art installations in the past four years. The BID is proactive about displaying art, either on the side of the Manhattan Bridge, on the pedestrian plazas, or on the streets. This art piece is called "Primary Directional," by Liz Collins. It is an asphalt mural that remained on the plaza for 7 months.',
            location: {
                center: [-73.989, 40.703],
                zoom: 16.70,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                        layer: 'nyc-public-schools', 
                        opacity: 0,
                        duration: 0
                      },
                      {
                        layer: 'nyc-pedestrian-plazas', 
                        opacity: 1,
                        duration: 1000
                      },
                      {
                        layer: 'kelp-parade',
                        opacity: 0,
                        duration: 1000
                    },
                    {
                        layer: 'highlight-circle-layer',
                        opacity: 1,
                        duration: 2000,
                        visibility: 'visible'
                      },
                      {
                        layer: 'dot-school-art',
                        opacity: 0,
                        duration: 4000
                      }
            ],
            onChapterExit: [
                {
                        layer: 'highlight-circle-layer',
                        visibility: 'none'
                }
            ]
        },
        {
            id: 'dumbo-projection-project',
            alignment: 'left',
            hidden: false,
            title: 'Projection Art',
            image: './assets/dumbo-projection-1.jpeg',
            description: 'Dumbo BID launched a cultural initiative called the Dumbo Projection Project, which gives artists an opportunity to project their artworks on the side of the Manhattan Bridge. The art is projected from dusk until 11 P.M. every day for anywhere from days to months at a time.',
            location: {
                center: [-73.989, 40.703],
                zoom: 16.70,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kelp-parade',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'highlight-circle-layer',
                    visibility: 'none'
            },
            {
                layer: 'dot-school-art',
                opacity: 0,
                duration: 4000
              }
            ],
            onChapterExit: []
        },
        {
            id: 'fat-boy-sculpture',
            alignment: 'right',
            hidden: false,
            title: 'Sculptures in Dumbo',
            image: './assets/Leonard Ursachi fat boy dumbo artervention.jpeg',
            description: 'A fun and honorable mention is this sculpture placed right in the heart of Dumbo in 2022. Artist Leonard Ursachi sculpted this "Fat Boy" as a bunker sculpture, to allude to his time spent in communist Romania, where bunkers covered the landscape.',
            location: {
                center: [-73.986, 40.703],
                zoom: 16.70,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kelp-parade',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'highlight-circle-layer',
                    visibility: 'none'
            },
            {
                layer: 'dot-school-art',
                opacity: 0,
                duration: 4000
              }
            ],
            onChapterExit: []
        },
        {
            id: 'public-schools',
            alignment: 'left',
            hidden: false,
            title: 'NYC Public Schools',
            description: 'Where are public schools in relation to the art installations? Are they in the same neighborhoods? Each purple dot represents a public school.',
            location: {
                center: [-74.034, 40.717],
                zoom: 9.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-pedestrian-plazas',
                    opacity: 0,
                    duration: 2000
                    },
                    {
                        layer: 'nyc-art-installations',
                        opacity: 0,
                        duration: 0
             },
                {
                    layer: 'kelp-parade',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'nyc-public-schools',
                    opacity: 1,
                    duration: 4000
                  },
                  {
                    layer: 'dot-school-art',
                    opacity: 0,
                    duration: 4000
                  }

            ],
            onChapterExit: []
        },
        {
            id: 'NYC DOT School Safety',
            alignment: 'right',
            hidden: false,
            title: 'NYC DOT School Safety Unit',
            description: 'As you can see, there are only 4 art installations intended for school exposure. Three of these artworks were on display in 2022, and the fourth in 2023. All of them were only up for one school year. Though it is technically equitable, with one installation in every borough except Staten Island, it is not clear why these locations or installations were chosen. But it is clear that the objective of the DOT is to create more pedestrian-friendly spaces.',
            location: {
                center: [-73.877, 40.753],
                zoom: 10.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-public-schools',
                    opacity: 1,
                    duration: 4000
                  },
                {
                    layer: 'dot-school-art',
                    opacity: 1,
                    duration: 1000
                  },
                  {
                    layer: 'nyc-art-installations',
                    opacity: 0,
                    duration: 0
         },

            ],
            onChapterExit: []
        },
        {
            id: 'School Art 1',
            alignment: 'right',
            hidden: false,
            image: './assets/school asphalt mural.jpg',
            title: 'What exactly are these art installations by schools?',
            description: 'In Brooklyn, artist Craig Anthony Miller painted an asphalt mural next to Fresh Creek School.',
            location: {
                center: [-73.894, 40.654],
                zoom: 17.62,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-public-schools',
                    opacity: 1,
                    duration: 4000
                  },
                {
                    layer: 'dot-school-art',
                    opacity: 1,
                    duration: 1000
                  },
                  {
                    layer: 'nyc-art-installations',
                    opacity: 0,
                    duration: 0
         },

            ],
            onChapterExit: []
        },
        {
            id: 'School Art 2',
            alignment: 'left',
            hidden: false,
            image: './assets/birds eye view.jpg',
            description: 'In the Bronx, Mary Carter Talb painted "Birds Eye View" to create a pedestrian-only space outside of Horseshoe Playground and the Bronx Regional High School.',
            location: {
                center: [-73.899, 40.824],
                zoom: 15.94,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nyc-public-schools',
                    opacity: 1,
                    duration: 4000
                  },
                {
                    layer: 'dot-school-art',
                    opacity: 1,
                    duration: 1000
                  },
                  {
                    layer: 'nyc-art-installations',
                    opacity: 0,
                    duration: 0
         },

            ],
            onChapterExit: []
        },
        {
            id: 'outro-screen',
            alignment: 'left',
            hidden: false,
            title: 'Zooming Out',
            description: `
                <div class="outro-text">
                    <p>NYC's public art installations are synonymous with the urban fabric. Tourist areas are saturated with projections, murals, and sculptures, especially on holidays, like Car Free Earth Day. Each work marks the intersection of culture, policy, and public life in the city. How do we define access to art? And what role does the city play in shaping our experience with it?</p>
                </div>
            `,
            location: {
                center: [-74.034, 40.717],
                zoom: 9.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'nyc-art-installations',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                    layer: 'nyc-public-schools',
                    opacity: 0,
                    duration: 0
                  },
                  {
                    layer: 'nyc-pedestrian-plazas',
                    opacity: 1,
                    duration: 2000
                  },
                  {
                    layer: 'kelp-parade',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'dot-school-art',
                    opacity: 0,
                    duration: 4000
                  }
            ],
            onChapterExit: []
          }
    ]
};
