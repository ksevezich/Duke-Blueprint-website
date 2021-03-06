import React from 'react'
import classes from './SponsorsPage.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'
// import lifelock from 'static/sponsors/lifelock.png'
// import google from 'static/sponsors/google.png'
// import coinbase from 'static/sponsors/coinbase.png'
// import esri from 'static/sponsors/esri.png'
// import zoho from 'static/sponsors/zoho.png'
// import fb from 'static/sponsors/fb.png'
// import microsoft from 'static/sponsors/microsoft.png'
// import optum from 'static/sponsors/optum.png'
// import appian from 'static/sponsors/appian.png'
import pratt from 'static/sponsors/pratt.png'

// import twitter from 'static/sponsors/twitter.png'
// import cs from 'static/sponsors/cs.png'
// import qualtrics from 'static/sponsors/qualtrics.png'
// import colab from 'static/sponsors/colab.png'
// import cerner from 'static/sponsors/cerner.png'
// import particle from 'static/sponsors/particle.png'
// import stickermule from 'static/sponsors/stickermule.png'
// import dps from 'static/sponsors/dps.png'
import dsg from 'static/sponsors/dsg.png'
import dtci from 'static/sponsors/nicholas-school-environment.png'
import nse from 'static/sponsors/ODARLogo.png'
import dukeie from 'static/sponsors/DukeIEtemp.png'
import xlabs from 'static/sponsors/conservationxlabs.png'
import bennett from 'static/Bennett_Aerospace_Inc_Logo.png'
import evezich from 'static/The_Evezich_Family.png'
// import acm from 'static/sponsors/acm.jpg'
// import consensys from 'static/sponsors/consensys.png'

class SponsorsPage extends React.Component {

  constructor () {
    super()
    this.state = {
      sponsorsUrls: ['https://nicholas.duke.edu/', 'http://www.dukestudentgovernment.com',
        'http://pratt.duke.edu', 'http://conservationxlabs.com/home', 'bennettaerospace.com',
        'https://entrepreneurship.duke.edu', 'http://sites.nicholas.duke.edu/odar/', 'tlecc.net'],
      windowWidth: window.innerWidth,
      imageUrls: [dtci, dsg, pratt, xlabs, bennett, dukeie, nse, evezich],
      sizes: [3, 3, 3, 3, 2, 3, 2, 1],
      title: 'SPONSORS',
      aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed' +
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      sponsorButtonText: 'Sponsor Us'
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize (event) {
    this.setState({windowWidth: window.innerWidth})
  }

  renderSponsors () {
    let mapArray = []
    if (this.state.windowWidth < 600) {
      mapArray = [0]
    } else if (this.state.windowWidth < 1000) {
      mapArray = [0, 1]
    } else {
      mapArray = [0, 1, 2]
    }
    return (
      mapArray.map(mod => {
        return this.sponsorsColAtMod(mod, mapArray.length)
      })
    )
  }

  sponsorsColAtMod (mod, divisor) {
    return (
      <Col xs={12 / divisor} key={mod}>
        {this.state.imageUrls.map((url, index) => {
          if (index % divisor === mod) {
            return <SponsorsItem key={index}
              imageUrl={url}
              sponsorUrl={this.state.sponsorsUrls[index]}
              size={this.state.sizes[index]} />
          }
        })}
      </Col>
    )
  }

// <p className={classes.sponsorsText}>
//   {this.state.aboutText}
// </p>

  render () {
    return (
      <div>
        <div className={classes.sponsors}>
          <div>
            <h1 className={classes.header}>{this.state.title}</h1>
            <br />
            <a className={classes.link} href={'mailto:sponsorship@dukeblueprint.com'}>
              <button className={classes.homeButton}> {this.state.sponsorButtonText} </button>
            </a>
            <div className={classes.section}>
              <div className={classes.logobox}>
                <Row>
                  {this.renderSponsors()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SponsorsPage
