import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f9fafb;
  padding: 4rem 0 3rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Column = styled.div``;

const Title = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

const Link = styled.a`
  color: #6b7280;
  font-size: 0.875rem;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #6b7280;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;

const SocialIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const Copyright = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
`;

function Footer() {
  const footerLinks = {
    company: ['About', 'Careers', 'Press'],
    products: ["Men's Shoes", "Women's Shoes", 'Running', 'Sneakers'],
    support: ['FAQs', 'Contact Us', 'Returns'],
    social: [
      { 
        name: 'Facebook', 
        icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'
      },
      { 
        name: 'Instagram',
        icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
      },
      { 
        name: 'Twitter',
        icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
      },
      { 
        name: 'LinkedIn',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
      }
    ]
  };

  return (
    <FooterContainer>
      <Container>
        <Grid>
          <Column>
            <Title>Company</Title>
            <LinkList>
              {footerLinks.company.map((link) => (
                <LinkItem key={link}>
                  <Link href={`#${link.toLowerCase()}`}>{link}</Link>
                </LinkItem>
              ))}
            </LinkList>
          </Column>

          <Column>
            <Title>Products</Title>
            <LinkList>
              {footerLinks.products.map((link) => (
                <LinkItem key={link}>
                  <Link href={`#${link.toLowerCase()}`}>{link}</Link>
                </LinkItem>
              ))}
            </LinkList>
          </Column>

          <Column>
            <Title>Support</Title>
            <LinkList>
              {footerLinks.support.map((link) => (
                <LinkItem key={link}>
                  <Link href={`#${link.toLowerCase()}`}>{link}</Link>
                </LinkItem>
              ))}
            </LinkList>
          </Column>

          <Column>
            <Title>Follow Us</Title>
            <SocialContainer>
              {footerLinks.social.map((social) => (
                <SocialLink key={social.name} href={`#${social.name.toLowerCase()}`}>
                  <span className="sr-only">{social.name}</span>
                  <SocialIcon fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </SocialIcon>
                </SocialLink>
              ))}
            </SocialContainer>
          </Column>
        </Grid>

        <Copyright>
          © {new Date().getFullYear()} ShoeBrand. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
}

export default Footer; 