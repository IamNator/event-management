import React from "react";
import styled from "@emotion/styled";
import Link from 'next/link';
import {LogoNacos} from "@/assets/logo";

export function HeroHeaderSection() {
    return (
        <RootWrapperHeroHeaderSection>
            <DropdownHeaderNavigation>
                <Header>
                    <Container>
                        <Content>
                            <Logo>
                                <LogoNacos/>
                                <Logotype>
                                    <NacossUi>Nacoss UI</NacossUi>
                                </Logotype>
                            </Logo>
                        </Content>
                        <NavigationActions>
                            <Button>
                                <ButtonBase>
                                    <Link href={"/login"}>
                                        <Text>Login</Text>
                                    </Link>
                                </ButtonBase>
                            </Button>
                            <Button_0001>
                                <ButtonBase>
                                    <Link href={"/signup"}>
                                        <Text>Sign up</Text>
                                    </Link>
                                </ButtonBase>
                            </Button_0001>
                        </NavigationActions>
                    </Container>
                </Header>
            </DropdownHeaderNavigation>
            <Section>
                <Container_0001>
                    <Content_0001>
                        <HeadingAndSupportingText>
                            <Heading>Manage Your Events Efficiently!</Heading>
                            <SupportingText>
                                The best event service software for planning and executing events. Industry-leading
                                email and live chat support.
                            </SupportingText>
                        </HeadingAndSupportingText>
                        <EmailCapture>
                            <InputField>
                                <InputFieldBase>
                                    <InputWithLabel>
                                        <Input>
                                            <Content_0002>
                                                <Content_0003>
                                                    <Text_0002 placeholder="Enter your email" />
                                                </Content_0003>
                                            </Content_0002>
                                        </Input>
                                    </InputWithLabel>
                                    <HintText>We care about your data in our privacy policy</HintText>
                                </InputFieldBase>
                            </InputField>
                            <Button_0001>
                                <ButtonBase_0002>
                                    <Text>Get started</Text>
                                </ButtonBase_0002>
                            </Button_0001>
                        </EmailCapture>
                    </Content_0001>
                    <Image>
                        <PlayButton />
                        <HandDrawnArrow>
                            <Vectors xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="rgb(158, 119, 237)"
                                    d="M332.368 2.33151C332.366 2.38052 332.362 2.4295 332.357 2.48026C332.275 3.26786 331.742 3.92073 331.23 4.52281C318.42 19.6256 303.023 36.8828 287.877 49.6175C242.058 88.1472 178.102 106 118.976 97.1591C98.3327 94.0717 78.163 87.4401 59.7858 77.483C50.8498 72.6419 42.0392 66.334 34.07 59.6201C26.2836 53.0585 18.0077 44.8219 10.1012 37.6512C9.91307 37.4814 9.60126 37.6477 9.56642 37.8997C9.16578 40.8436 5.32489 53.6973 4.93993 54.639C3.21195 58.871 -0.630732 58.3582 0.0886785 53.3491C0.935249 47.456 2.19468 42.6954 3.59866 36.9914C4.06898 35.0766 4.64902 30.9181 6.10526 29.5949C7.82975 28.0284 10.359 28.4117 12.6845 28.3365C17.9224 28.1632 23.8554 27.6556 29.1107 28.179C33.955 28.662 38.5832 33.3386 30.6175 33.5294C25.4057 33.6537 19.5824 33.778 14.3288 33.6082C14.1372 33.6012 14.0414 33.834 14.1842 33.9617C17.3493 36.7936 22.6378 42.1878 25.1757 44.9392C65.1805 88.3152 138.641 101.939 195.695 88.793C206.864 86.2202 217.84 82.7932 228.488 78.5401C267.324 63.0278 301.915 31.2873 324.876 3.69491C325.997 2.34723 326.954 0.693291 328.612 0.140218C330.223 -0.397104 332.409 0.668791 332.368 2.33151Z"
                                />
                            </Vectors>
                        </HandDrawnArrow>
                    </Image>
                </Container_0001>
            </Section>
        </RootWrapperHeroHeaderSection>
    );
}

const RootWrapperHeroHeaderSection = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	background-color: white;
	box-sizing: border-box;
`;

const DropdownHeaderNavigation = styled.div`
	height: 80px;
	position: relative;
	align-self: stretch;
	flex-shrink: 0;
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	height: 80px;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	flex: none;
	width: 1280px;
	box-sizing: border-box;
	padding: 0px 32px;
`;

const Content = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 40px;
	box-sizing: border-box;
`;

const Logo = styled.div`
	width: 142px;
	height: 32px;
	position: relative;
`;


const Logotype = styled.div`
	position: absolute;
	left: 42px;
	top: 0px;
	right: 0px;
	bottom: 8px;
`;

const NacossUi = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 40px;
	text-align: center;
	min-height: 41px;
	position: absolute;
	left: -15px;
	top: -4px;
	right: -20px;
	bottom: -13px;
`;

const NavigationActions = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 12px;
	box-sizing: border-box;
`;

const Button = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	border-radius: 8px;
	box-sizing: border-box;
`;

const ButtonBase = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 8px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(18, 183, 106);
	border-radius: 8px;
	background-color: rgb(18, 183, 106);
	box-sizing: border-box;
	padding: 10px 18px;

  :hover {
    background-color: rgb(28, 193, 116);
    border: solid 1px rgb(28, 193, 116);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
    cursor: pointer;
  }

  :active {
    background-color: rgb(8, 163, 86);
    border: solid 1px rgb(8, 163, 86);
    box-shadow: none;
  }
`;

const Text = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: 500;
	line-height: 24px;
	text-align: left;
`;

const Button_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	border: solid 1px rgb(18, 183, 106);
	border-radius: 8px;
	box-sizing: border-box;
`;

const Section = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	align-self: stretch;
	box-sizing: border-box;
	padding: 64px 0px 96px;
	flex-shrink: 0;
`;

const Container_0001 = styled.div`
	width: 1280px;
	height: 640px;
	position: relative;
`;

const Content_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 48px;
	box-sizing: border-box;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + -24px)) - 191px));
	width: 800px;
	height: 382px;
`;

const HeadingAndSupportingText = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Heading = styled.span`
	color: rgb(16, 24, 40);
	text-overflow: ellipsis;
	font-size: 60px;
	font-family: Inter, sans-serif;
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 72px;
	text-align: left;
	align-self: stretch;
	flex-shrink: 0;
`;

const SupportingText = styled.span`
	color: rgb(102, 112, 133);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Inter, sans-serif;
	font-weight: 400;
	line-height: 30px;
	text-align: left;
	width: 560px;
`;

const EmailCapture = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const InputField = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	width: 360px;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const InputFieldBase = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const InputWithLabel = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Input = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(208, 213, 221);
	border-radius: 8px;
	align-self: stretch;
	background-color: white;
	box-sizing: border-box;
	padding-bottom: 12px;
	padding-top: 12px;
	padding-left: 16px;
	padding-right: 14px;
	flex-shrink: 0;
`;

const Content_0002 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: 1;
`;

const Content_0003 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: 1;
	gap: 8px;
	width: 330px;
	box-sizing: border-box;
`;

const Text_0002 = styled.input`
  color: rgb(102, 112, 133);
  background: transparent;
  text-overflow: ellipsis;
  border: transparent;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  outline: none;
  width: 336px;
  flex: 1;
`;


const HintText = styled.span`
	color: rgb(102, 112, 133);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	align-self: stretch;
	flex-shrink: 0;
`;

const ButtonBase_0002 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 8px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(18, 183, 106);
	border-radius: 8px;
	background-color: rgb(18, 183, 106);
	box-sizing: border-box;
	padding: 12px 20px;

    :hover {
        background-color: rgb(28, 193, 116);
        border: solid 1px rgb(28, 193, 116);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
        cursor: pointer;
    }
    
    :active {
        background-color: rgb(8, 163, 86);
        border: solid 1px rgb(8, 163, 86);
        box-shadow: none;
    }
`;

const Image = styled.div`
	width: 560px;
	height: 640px;
	position: absolute;
	left: 688px;
	top: 0px;
`;

const PlayButton = styled.div`
	width: 128px;
	height: 128px;
	position: absolute;
	left: calc((calc((50% + 0px)) - 64px));
	top: calc((calc((50% + 0px)) - 64px));
	backdrop-filter: blur(32px);
`;

const HandDrawnArrow = styled.div`
	width: 335px;
	height: 102px;
	position: absolute;
	left: -135px;
	bottom: 88px;
`;

const Vectors = styled.svg`
	width: 332px;
	height: 99px;
	position: absolute;
	left: 0px;
	top: 1px;
	right: 2px;
	bottom: 1px;
`;
