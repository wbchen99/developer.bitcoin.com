// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import HelmetPlus from 'components/HelmetPlus'
import Hero from 'components/Hero'
import Container from 'components/Container'

import StyledLink, { SmartLink } from 'atoms/StyledLink'
import Text from 'atoms/Text'
import H3 from 'atoms/H3'
import H1 from 'atoms/H1'
import Button from 'atoms/Button'

import media from 'styles/media'
import spacing from 'styles/spacing'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const InstallCTA = styled.div`
  margin-top: ${spacing.medium};
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: max-content;
  grid-gap: ${spacing.small};
`

const PreviewLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(300px, .5fr));
  `};
`

const ItemLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  grid-auto-rows: max-content;
  grid-column: span 2;
  ${media.medium`
    grid-column: span 1;
    grid-template-rows: max-content max-content 1fr;
  `};
`

type ItemProps = {
  children: React.Node,
  to?: string,
}

const PreviewItem = ({ children, to }: ItemProps) => (
  <ItemLayout>
    {children}
    {to && (
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <StyledLink to={to}>
          <Button round>View</Button>
        </StyledLink>
      </div>
    )}
  </ItemLayout>
)

type Props = {
  location: Object,
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
    heroImage: any,
  },
}

const BadgerPage = ({ location, data }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Badger - ${data.site.siteMetadata.title}`}
      description={
        'Badger documentation, your gateway to the world of Bitcoin Cash (BCH) applications'
      }
      keywords={[
        'badger',
        'badger sdk',
        'badger wallet',
        'SLP tokens',
        'simple ledger protocol',
      ]}
      location={location}
    />
    <Hero image={data.heroImage}>
      <HeroLayout>
        <H3 primary thin>
          The easiest way to build BCH apps
        </H3>
        <H1 background>Badger SDK</H1>
        <H3 background thin>
          Your gateway to the world of Bitcoin Cash (BCH) apps
        </H3>
        <InstallCTA>
          <SmartLink to="https://badger.bitcoin.com">Install Badger</SmartLink>
          <StyledLink to="/badger/docs/getting-started">
            <Button round>Start Here</Button>
          </StyledLink>
        </InstallCTA>
      </HeroLayout>
    </Hero>
    <Container>
      <PreviewLayout>
        <PreviewItem to="/badger/docs/getting-started">
          <H3>Badger SDK</H3>
          <Text>
            Badger Wallet injects an API into pages a user visits to allow apps
            to request a users's permission to send Bitcoin Cash, send tokens,
            or authenticate with CashID.
          </Text>
        </PreviewItem>
        <PreviewItem to="/badger/docs/badger-components-react">
          <H3>Badger React Components</H3>
          <Text>
            React based components and tools to make integrating Bitcoin Cash
            (BCH) into your next project easy.
          </Text>
        </PreviewItem>
      </PreviewLayout>
    </Container>
  </DefaultLayout>
)

export default BadgerPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f9b016", shadow: "#191919" }
          maxWidth: 2000
          quality: 85
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
