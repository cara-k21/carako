// Portfolio data. Edit titles, media, or descriptions here; index.html reads this file.
const WORKS = [
  {
    n: "01", title: "Flower Garden", medium: "Painting",
    img: "works/01-flower-garden.jpg", thumb: "thumbs/01-flower-garden.jpg",
    text: "A garden where every flower has a face, and none of the faces are pretty in the usual way. The painting celebrates the unconventional: each flower’s freakish features are exactly what gives the garden its character and charm. I wanted the viewer to look for the “normal” one, fail to find it, and realize that the search itself was the problem."
  },
  {
    n: "02", title: "Spine Breaker", medium: "Charcoal triptych",
    img: "works/02-spine-breaker.jpg", thumb: "thumbs/02-spine-breaker.jpg",
    text: "A charcoal triptych that pushes the body into anatomically impossible forms. The figures twist past what a spine can do, and the sheer wrongness is meant to unsettle. The piece sits in the gap between the body as a physical fact and the body as it is felt from the inside, which rarely obeys anatomy."
  },
  {
    n: "03", title: "Figure Drawing", medium: "Painting, timed life-drawing session",
    img: "works/03-figure-drawing.jpg", thumb: "thumbs/03-figure-drawing.jpg",
    text: "A stylized nude painted in a single timed life-drawing session. With no time to correct, the figure kept only what I saw first: the weight of the pose and the color of the room against the skin."
  },
  {
    n: "04", title: "The Art of War", medium: "Charcoal",
    img: "works/04-the-art-of-war.jpg", thumb: "thumbs/04-the-art-of-war.jpg",
    text: "Women are taught to compete for approval quietly, through calculation rather than confrontation, and the result is a culture of strategic rivalries that nobody names. This charcoal drawing sets the expectation that women be soft, quiet, and understanding against the fierce, territorial nature of dogs. The contrast asks why female aggression is treated as less real simply because it is less visible."
  },
  {
    n: "05", title: "Deeper Forests", medium: "Mixed media: watercolor, acrylic, ink, threaded fabric",
    img: "works/05-deeper-forests.jpg", thumb: "thumbs/05-deeper-forests.jpg",
    text: "A formation of wood nymphs looms over the viewer, hung among real trees. They embody the pull and the threat of idealized beauty: captivating from a distance, intimidating up close, and dangerous to anyone who tries to become them. I built the piece in layers, painting in watercolor and acrylic, dripping ink to ground the composition, and threading fabric by hand to form the leaves, so that the surface itself would feel both delicate and overgrown."
  },
  {
    n: "06", title: "Rearranging a Ripple", medium: "Collage triptych from a colored pencil self-portrait",
    img: "works/06-rearranging-a-ripple.jpg", thumb: "thumbs/06-rearranging-a-ripple.jpg",
    text: "A collage triptych about living with facial dysmorphia, inspired by kintsugi, the Japanese practice of repairing broken ceramics with gold. All three compositions began as one realistic colored-pencil self-portrait, which I cut apart and rebuilt three different ways. The gold paint between the fragments marks the seams rather than hiding them; the reconstruction is the point."
  },
  {
    n: "07", title: "Train of Thought", medium: "Series of studies and composed scene",
    img: "works/07-train-of-thought.jpg", thumb: "thumbs/07-train-of-thought.jpg",
    text: "The piece began as a series of quick self-portraits, done by the dozen and each finished in under twenty minutes, so that instinct would outrun self-editing. Each one came out as a different persona. I then placed several of these characters together in a single enclosed room, where their interactions show how the different selves inside one subconscious coexist, argue, and somehow add up to one person."
  },
  {
    n: "08", title: "A Coming Quiet", medium: "Painting",
    img: "works/08-a-coming-quiet.jpg", thumb: "thumbs/08-a-coming-quiet.jpg",
    text: "An alien family gathers for an ordinary evening, and the strangeness of their bodies gives the viewer enough distance to look at a familiar subject fresh. The piece presents the reality of the declining fertility rate without arguing that it is good or bad. It asks the viewer to step back and consider what a family is for, and how that answer is changing."
  },
  {
    n: "09", title: "Ugly As Sin", medium: "Painting",
    img: "works/09-ugly-as-sin.jpg", thumb: "thumbs/09-ugly-as-sin.jpg",
    text: "Borrowing the visual language of Christian painting, this work critiques the old trope that ugliness signals moral corruption while conventional beauty signals goodness. The “holy” figure and the “damned” one are cast against type. The painting challenges the stereotype and asks the viewer to look past appearance to character, which is the harder and more honest way to judge anyone."
  },
  {
    n: "10", title: "Rat Race", medium: "Painting",
    img: "works/10-rat-race.jpg", thumb: "thumbs/10-rat-race.jpg",
    text: "“Rat Race” came out of frustration with how readily society celebrates superficial, meaningless distractions. The figures circle a single floating prize, dressed alike and reaching alike. The painting warns that a system built on chasing trivial rewards turns cult-like quickly, because it only works if its members give up the parts of themselves that do not fit."
  },
  {
    n: "11", title: "Thought Cake", medium: "Video, 0:34",
    video: "works/11-thought-cake.mp4", thumb: "thumbs/11-thought-cake.jpg",
    text: "Under a visual blanket of pastel, doll-like cuteness, “Thought Cake” asks a darker question: what happens to a developing sense of self when severe expectations and constant judgment are allowed to act on it. The sweetness of the surface is deliberate. It is the costume the pressure wears."
  },
  {
    n: "12", title: "Sketchbook Explorations", medium: "Sketchbook pages",
    img: "works/12-sketchbook-explorations.jpg", thumb: "thumbs/12-sketchbook-explorations.jpg",
    text: "Pages from my working sketchbooks: figure studies, color tests, thumbnails, and the first rough versions of ideas that later became finished pieces. I keep these because the decisions happen here, before anything is resolved enough to show."
  },
  {
    n: "13", title: "Hidden Roots", medium: "Block print, composed in Adobe Photoshop",
    img: "works/13-hidden-roots.jpg", thumb: "thumbs/13-hidden-roots.jpg",
    text: "Inspired by pop art, and Warhol in particular, this composition uses hair color to examine how beauty standards shift and repeat, and how futile it is to keep up with them. It critiques the commercial promise that beauty must be bought and constantly maintained. I carved the designs into a block, printed them by hand, and then brought the stamped prints into Adobe Photoshop to arrange them into the final repeating grid, so that the process itself mimicked mass production."
  },
  {
    n: "14", title: "Sparkle Line", medium: "Mixed media",
    img: "works/14-sparkle-line.jpg", thumb: "thumbs/14-sparkle-line.jpg",
    text: "Built around the idea of suburbia, “Sparkle Line” critiques the culture of domesticity and the narrowing of women’s roles to motherhood. The figures are arranged in a closed loop, pretty and contained, with the glitter doing the work that a smile usually does."
  },
  {
    n: "15", title: "Kathryn’s Toys", medium: "Still life painting",
    img: "works/15-kathryns-toys.jpg", thumb: "thumbs/15-kathryns-toys.jpg",
    text: "A still life of my friend’s childhood toys, painted as they are now rather than as they were loved. The piece sits in the nostalgia for the innocence of girlhood and in the uncomfortable feeling of leaving that part of ourselves behind, when the objects stay and the girl who needed them does not."
  },
  {
    n: "16", title: "Life Theatre", medium: "Diptych, mixed media",
    img: "works/16-life-theatre.jpg", thumb: "thumbs/16-life-theatre.jpg",
    extra: ["works/16b-life-theatre-detail.jpg"],
    text: "A diptych that stages everyday moments of young womanhood inside a small theater, with curtains, lights, and an audience implied. One panel shows the communal side of that experience and the other the private side. The theatrical frame asks how much of either is performance, and for whom."
  },
  {
    n: "17", title: "Dream Dance", medium: "Autobiographical comic",
    img: "works/17-dream-dance.jpg", thumb: "thumbs/17-dream-dance.jpg",
    text: "An autobiographical comic about dreams as a source of creative ideas and as an escape from waking life. I drew the two worlds in two distinct styles, so that the reader feels the different rules of reality and imagination before the story explains them."
  },
  {
    n: "18", title: "The Body Show Posters", medium: "Exhibition posters, set of three",
    img: "works/18-the-body-show-posters.jpg", thumb: "thumbs/18-the-body-show-posters.jpg",
    text: "Three posters made for the exhibition The Body Show, each centered on a fundamental part of the body and of experience: the mind, the heart, and the reproductive system. Seen together, the set explores how the physical body and the spiritual self share one frame without fully agreeing."
  }
];
