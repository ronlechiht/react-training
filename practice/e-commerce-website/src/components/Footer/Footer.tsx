/*Import constants*/
import {
  COMPONENT_SIZES,
  TEXT_VARIANTS,
  COMPANY_NAV_LIST,
  HELP_NAV_LIST,
  FAQ_NAV_LIST,
  RESOURCES_NAV_LIST,
  PAYMENT_BADGE_LIST
} from '../../constants';
/*Import components*/
import Logo from '../Logo';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import Text from '../Text/Text';
import Badge from '../Badge';
import { TwitterIcon, FacebookIcon, InstagramIcon, GithubIcon } from '../Icon';
import { FooterNavList } from '../Nav/Nav';
/*Import CSS*/
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="container">
        <SubscribeForm />
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Logo className="footer-logo" />
              <Text className="footer-shop-describe">
                We have clothes that suits your style and which you're proud to wear. From women to
                men.
              </Text>
              <ul className="list-social">
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <GithubIcon />
                </li>
              </ul>
            </div>
            <div className="footer-nav">
              <Text className="footer-nav-title">company</Text>
              <FooterNavList linkProps={COMPANY_NAV_LIST} />
            </div>
            <div className="footer-nav">
              <Text className="footer-nav-title">help</Text>
              <FooterNavList linkProps={HELP_NAV_LIST} />
            </div>
            <div className="footer-nav">
              <Text className="footer-nav-title">FAQ</Text>
              <FooterNavList linkProps={FAQ_NAV_LIST} />
            </div>
            <div className="footer-nav">
              <Text className="footer-nav-title">resources</Text>
              <FooterNavList linkProps={RESOURCES_NAV_LIST} />
            </div>
          </div>
          <div className="footer-copyright-payment">
            <Text className="footer-copyright">Shop.co © 2000-2023, All Rights Reserved</Text>
            <ul className="list-payment">
              {PAYMENT_BADGE_LIST.map((badge, index) => (
                <li key={index}>
                  <Badge {...badge} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
