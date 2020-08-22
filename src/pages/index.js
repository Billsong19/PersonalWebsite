// import React from "react"
// import { Link } from "gatsby"
// import Header from "../components/header"
// export default function Home() {
//   return (
//     <div style={{ color: `purple` }}>
//             <h1>Hello Gatsby!</h1>
//             <p>What a world.</p>
//             {/* <Link to="/contact/">Contact</Link>
//             <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
//             </div>
//     );
// }

// import React from "react"
// import Layout from "../components/layout"
// export default function Home() {
//   return (
//     <Layout>
//       <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//       <p>
//         What do I like to do? Lots of course but definitely enjoy building
//         websites.
//       </p>
//     </Layout>
//   )
// }

import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}