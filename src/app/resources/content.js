import { InlineCode } from '@/once-ui/components'

const person = {
   firstName: 'Top Raised',
   lastName: 'Flooring',
   get name() {
      return `${this.firstName} ${this.lastName}`
   },
   role: 'Raised Static Floor',
   avatar: '/images/avatar.jpg',
   location: 'Asia/Dubai', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
   languages: ['English', 'Chinese'], // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
   display: true,
   title: <>Subscribe to {person.firstName}'s Newsletter</>,
   description: (
      <>
         I occasionally write about design, technology, and share thoughts on
         the intersection of creativity and engineering.
      </>
   ),
}

const social = [
   // Links are automatically displayed.
   // Import new icons in /once-ui/icons.ts
   {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/once-ui-system/nextjs-starter',
   },
   {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/company/once-ui/',
   },
   {
      name: 'X',
      icon: 'x',
      link: '',
   },
   {
      name: 'Email',
      icon: 'email',
      link: 'mailto:adraisedflooring@gmail.com',
   },
]

const home = {
   label: 'Home',
   title: `${person.name}'s Portfolio`,
   description: `Portfolio website showcasing my work as a ${person.role}`,
   headline: <>Raised Flooring Atop </>,
   subline: (
      <>
         Raised Flooring Atop want to be number <InlineCode>ONE</InlineCode>,
         Provider of
         <br /> Raised Flooring Solution in Asia based in Dubai, China and
         Singaport.
         <br /> We're expert in Global Export All over the world.
      </>
   ),
}

const about = {
   label: 'About',
   title: 'About Us',
   description: `Meet ${person.name}, ${person.role} from ${person.location}`,
   tableOfContent: {
      display: true,
      subItems: true,
   },
   avatar: {
      display: true,
   },
   calendar: {
      display: true,
      link: 'https://cal.com',
   },
   intro: {
      display: true,
      title: 'Introduction',
      description: (
         <>
            Raised Flooring Atop FLOOR MAKING CO., LTD. is a integrated
            enterprise concern with designing, researching, manufacturing,
            servicing. From early 1980s, She has committed herself to develop,
            produce and market raised access floor systems. Kehua adhere to
            integrity, top quality, strict management, innovation and
            development in the past twenty years; Our pragmatic and innovative
            attitude win our customers’ praise so that the "KEHUA" became the
            anti-static raised floor industry trustworthy brand suppliers.
         </>
      ),
   },
   work: {
      display: true, // set to false to hide this section
      title: 'Our Projects',
      experiences: [
         {
            company: 'China telecom cloud Part',
            timeframe: '2002',
            role: 'Anti StaticRaised Floor',
            achievements: [
               <>
                  We provide them with the need of raised flooring atop need in
                  the best way possible so they can make fortune.
               </>,
               <>
                  Best Way to make the Atop Raised FLooring in the Dubai and
                  gulf Content
               </>,
            ],
            images: [
               // optional: leave the array empty if you don't want to display images
               {
                  src: '/images/projects/project-01/cover-01.jpg',
                  alt: 'Raised Flooring  Atop ',
                  width: 16,
                  height: 9,
               },
            ],
         },
         {
            company: 'China Civil Activation',
            timeframe: '2018 - 2022',
            role: 'Lead Flooring Manager ',
            achievements: [
               <>
                  China civil activation park need our services for their
                  project in raised flooring solution in dubai{' '}
               </>,
               <>
                  Atop Raised Flooring make their look in the project of their
                  studies and help them gain insight about project
               </>,
            ],
            images: [],
         },
      ],
   },
   studies: {
      display: true, // set to false to hide this section
      title: 'Studies',
      institutions: [
         {
            name: 'University of Jakarta',
            description: <>Studied software engineering.</>,
         },
         {
            name: 'Build the Future',
            description: <>Studied online marketing and personal branding.</>,
         },
      ],
   },
   technical: {
      display: true, // set to false to hide this section
      title: 'Technical skills',
      skills: [
         {
            title: 'Raised Floor ',
            description: (
               <>
                  Ability to provide comapnies with best Raised Floor solution
                  they need for their environment.
               </>
            ),
            images: [
               {
                  src: '/images/projects/project-01/cover-02.jpg',
                  alt: 'Raised Flooring Atop Projects',
                  width: 16,
                  height: 9,
               },
               {
                  src: '/images/projects/project-01/cover-03.jpg',
                  alt: 'Project image',
                  width: 16,
                  height: 9,
               },
            ],
         },
         {
            title: 'Static Raised Flooring',
            description: (
               <>
                  Building Anti Static Raised Flooring Solution for our customer
                  Happines
               </>
            ),
            images: [
               {
                  src: '/images/projects/project-01/cover-04.jpg',
                  alt: 'Project image',
                  width: 16,
                  height: 9,
               },
            ],
         },
      ],
   },
}

const blog = {
   label: 'Blog',
   title: 'Writing about Raised Flooring and tech...',
   description: `Read what ${person.name} has been up to recently`,
   // Create new blog posts by adding a new .mdx file to app/blog/posts
   // All posts will be listed on the /blog route
}

const work = {
   label: 'Work',
   title: 'My projects',
   description: `Design and dev projects by ${person.name}`,
   // Create new project pages by adding a new .mdx file to app/blog/posts
   // All projects will be listed on the /home and /work routes
}

const gallery = {
   label: 'Gallery',
   title: 'My photo gallery of Raised Flooring Atop',
   description: `A photo collection by ${person.name}`,
   // Images from https://pexels.com
   images: [
      {
         src: '/images/gallery/img-01.jpg',
         alt: 'image',
         orientation: 'vertical',
      },
      {
         src: '/images/gallery/img-02.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-03.jpg',
         alt: 'image',
         orientation: 'vertical',
      },
      {
         src: '/images/gallery/img-04.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-05.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-06.jpg',
         alt: 'image',
         orientation: 'vertical',
      },
      {
         src: '/images/gallery/img-07.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-08.jpg',
         alt: 'image',
         orientation: 'vertical',
      },
      {
         src: '/images/gallery/img-09.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-10.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-11.jpg',
         alt: 'image',
         orientation: 'vertical',
      },
      {
         src: '/images/gallery/img-12.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-13.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
      {
         src: '/images/gallery/img-14.jpg',
         alt: 'image',
         orientation: 'horizontal',
      },
   ],
}

export { person, social, newsletter, home, about, blog, work, gallery }
