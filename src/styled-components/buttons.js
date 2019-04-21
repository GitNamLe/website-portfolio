import styled from 'styled-components';
import PropTypes from 'prop-types';
import Mix from 'color';


const BasicFadeButton = styled.button`
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    text-decoration: none;
  }
`;

const BasicFadeA = styled.a`
color: #fff;
cursor: pointer;
font-size: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding: 10px 60px;
line-height: 45px;
margin: 0 0 2em;
position: relative;
text-decoration: none;
text-transform: uppercase;
width: 100%;
&:hover {
  text-decoration: none;
}
`;

const TextFadeButton = BasicFadeButton.extend`
    font-weight: 100;
    letter-spacing: 1px;
    transition: all 150ms linear;
    border: none;
    background-color: #2b374b;
    margin-bottom: 0;
    &:hover {
        color: ${props => props.fade === 'fade' ? '	#45A29E' : '#fff'}
        text-decoration: none;
        transition: all 250ms linear;
    }`;

const FadeButton = BasicFadeA.extend`
  background: transparent;
  border: 2px solid
    ${props =>
      Mix('#45A29E')
        .darken(0.04)
        .string()};
  letter-spacing: 1px;
  transition: all 150ms linear;
  &:hover {
    color: ${props => props.fade === 'fade' ? '	#0e1111' : '#fff'}
    background: ${ props => props.fade === 'fade' ? 'transparent' : Mix('#45A29E').darken(0.15).string()};
    text-decoration: none;
    transition: all 250ms linear;
  }`;


  BasicFadeButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    color: PropTypes.string,
    fade: PropTypes.string
    // type: PropTypes.string,
    // fullWidth: PropTypes.bool,
    // disabled: PropTypes.bool,
    // onMouseEnter: PropTypes.func,
    // onMouseLeave: PropTypes.func,
    // ghost: PropTypes.bool,
    // naked: PropTypes.bool,
    // style: PropTypes.object
};
  
BasicFadeButton.defaultProps = {
    onClick: () => {},
    children: {},
    color: 'blue',
    fade: 'no-fade'
    // condensed: false,
    // fullWidth: false,
    // disabled: false,
    // naked: false,
    // ghost: false,
    // buttonType: 'progressive',
    // onMouseEnter: () => {},
    // onMouseLeave: () => {},
    // style: {}
};

export { FadeButton, TextFadeButton };