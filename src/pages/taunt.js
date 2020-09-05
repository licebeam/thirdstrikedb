import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const taunts = () => {
  return (
    <Layout>
      <SEO title="Character Health Values" />
      <h1>Personal Actions - unformatted</h1>
      <div>
        Personal Action (Commonly abbreviated as "PA") A taunt that gives your
        character a stat bonus in either attack power, defense, stun ability,
        etc. The bonus is different for each character and only lasts until the
        round is over. Alex: Unheld taunt - Increases damage for the next
        hit/combo by 9.4% for the first taunt and 6.3% for each additional
        taunt. Maximum: 6 taunts, 37.5% bonus. Held taunt - Increases damage for
        the next hit/combo or throw by 6.3% per extra arm turn. Maximum: 8
        turns, 50% bonus. Akuma: Increases damage for the next hit/combo by
        43.8% and increases stun damage for the next hit/combo by 28.1%. One
        taunt is the maximum. Chun-Li: Yawn (happens 100% of the time) -
        Increases stun recovery rate by 10% for the first yawn and an additional
        21% for the second yawn. Lasts the whole round. Maximum 2 yawns, 33%
        bonus. Shoulder tap (happens 21% of the time) - Increases defense by
        18.8%. Lasts for the whole round. Maximum one shoulder tap. Neck stretch
        (happens 38% of the time) - Increases damage for the next hit/combo by
        31.3%. Maximum one neck stretch. Back stretch (happens 15% of the time)
        - Increases defense by 31.3% (more than the shoulder tap) for the whole
        round. Also increases damage for the next hit/combo by 31.3%. Maximum
        one back stretch. Dudley: Increases damage for the next hit/combo by 25%
        if a rose is thrown. Like Sean, there's no bonus if the rose isn't
        actually thrown. One taunt is the maximum. Elena: Increases stun damage
        for the next hit/combo by 18.8% per taunt. Maximum 4 taunts, 75% bonus.
        Hugo: Unheld taunt - Increases damage for the next hit/combo by 18.8%
        (maximum 1 taunt). Also increases defence for the rest of the round by
        6.3% per taunt (maximum 4 taunts, 25% bonus). Held taunt - Increases
        damage for the next hit/combo/throw by 25%. One taunt is the maximum.
        Poison - No bonus. Ibuki: Increases damage for the next hit/combo/throw
        by 43.8% only if she gets the leapfrog. Otherwise you get nothing.
        Maximum one taunt. Ken: Increases damage for the next hit/combo by
        31.3%. One taunt is the maximum. Makoto: Part 1 - Increases damage for
        the next hit/combo by 31.3% per taunt. Maximum 2 taunts, 62.5% damage.
        Part 2 - Replaces a second Part 1 taunt. One two-part taunt is the
        maximum. Part 3 - Increases stun recovery rate by 10% for the first full
        taunt and an additional 21% for the second full taunt. Lasts the whole
        round. Maximum 2 full taunt, 33% bonus. Hayate taunt - No bonus. Necro:
        Increases damage for the next hit/combo by 31.3%. Holding the taunt does
        nothing bonus-wise. One taunt is the maximum. Oro: Recovers stun by
        600-800% as the taunt is held longer. Q: Increases defense for the whole
        round by 12.5% (maximum 3 taunts, 37.5% bonus). Also increases stun
        recovery rate for the whole round by 10% (one taunt is the maximum).
        Remy: Increases stun damage for the next hit/combo by 18.8% per taunt.
        Maximum 4 taunts, 75% bonus. Ryu: Increases stun recovery rate by 10%
        for the first taunt and an additional 21% for the second taunt. Lasts
        the whole round. Maximum 2 taunts, 33% bonus. Sean: Increases stun
        damage for the next hit/combo by 12.5% per ball thrown. If Sean throws
        nothing (ie. another ball on the screen), there is no bonus. Maximum 3
        balls thrown, 37.5% bonus. Twelve: It turns you invisible for a while.
        Urien: Increases damage for the next hit/combo by 31.3%. One taunt is
        the maximum. Yang: Increases damage for the next hit/combo by 31.3% and
        increases damage for the next throw by 6.3%. One taunt is the maximum.
        Yun: Unheld taunt (works for held too) - Increases damage for the next
        hit/combo by 6.4% for each taunt/hat twirl. Maximum 8 taunts/twirls, 50%
        bonus. Held taunt only - Increases damage for the next throw by 6.3% for
        the first extra twirl and 3.1% for every additional twirl. Maximum 7
        extra twirls, 25% bonus.
      </div>
    </Layout>
  )
}

export default taunts
