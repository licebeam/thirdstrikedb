import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const taunts = () => {
  return (
    <Layout>
      <SEO title="Character Health Values" />
      <h1>Personal Action Information</h1>
      <h6>
        {" "}
        (Commonly abbreviated as "PA") A taunt that gives your character a stat
        bonus in either attack power, defense, stun ability, etc. The bonus is
        different for each character and only lasts until the round is over.
      </h6>
      <div>
        <b>Alex:</b>
        <p>
          Unheld taunt - Increases damage for the next hit/combo by 9.4% for the
          first taunt and 6.3% for each additional taunt. Maximum: 6 taunts,
          37.5% bonus.
        </p>
        <p>
          Held taunt - Increases damage for the next hit/combo or throw by 6.3%
          per extra arm turn. Maximum: 8 turns, 50% bonus.
        </p>

        <b>Gouki:</b>
        <p>
          Increases damage for the next hit/combo by 43.8% and increases stun
          damage for the next hit/combo by 28.1%. One taunt is the maximum.
        </p>

        <b>Chun-Li:</b>
        <p>
          Chun-Li: Yawn (happens 100% of the time) - Increases stun recovery
          rate by 10% for the first yawn and an additional 21% for the second
          yawn. Lasts the whole round. Maximum 2 yawns, 33% bonus. Shoulder tap
          (happens 21% of the time) - Increases defense by 18.8%. Lasts for the
          whole round. Maximum one shoulder tap. Neck stretch (happens 38% of
          the time) - Increases damage for the next hit/combo by 31.3%. Maximum
          one neck stretch. Back stretch (happens 15% of the time) - Increases
          defense by 31.3% (more than the shoulder tap) for the whole round.
          Also increases damage for the next hit/combo by 31.3%. Maximum one
          back stretch
        </p>
      </div>
    </Layout>
  )
}

export default taunts
