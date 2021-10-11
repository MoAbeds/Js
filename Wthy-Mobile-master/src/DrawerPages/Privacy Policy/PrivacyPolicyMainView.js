import React, { Component } from 'react'
import { Text, View , ScrollView,Dimensions, } from 'react-native'
import {H1,H2,Header,Left,Body,Drawer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerMenuMainView from './DrawerMenuMainView'

const {height} = Dimensions.get('window');

export default class PrivacyPolicyMainView extends Component {

  state={
    screenHeight: 0,
    MenuOpen:false
  }

  onContentSizeChange = (contentWidth,contentHeight) => {
    this.setState({
      screenHeight: contentHeight

    })
  }


  render() {
    const scrollEnabled = this.state.screenHeight > height;

    return (
      <Drawer  content={<DrawerMenuMainView/>} open={this.state.MenuOpen}     tapToClose={true}  >
      <ScrollView
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                    >
      <View>
        <Header style={{backgroundColor:'#333333'}} androidStatusBarColor="#333333"   >
        <Left>
            <Icon color='white' onPress={()=>{this.setState({
                  MenuOpen: true
            })}}    size={20} name='bars' />
          </Left>
          <Body>
          <Text style={{fontSize:20,color:'white'}} > Privacy Policy</Text>
          </Body>

        </Header>
          <H1>Privacy Policy of Wthy</H1>

<Text>Wthy operates the WTHY website, which provides the SERVICE.</Text>

<Text>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the WTHY website.</Text>

<Text>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</Text>

<H2>Information Collection and Use</H2>

<Text>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</Text>

<H2>Log Data</H2>

<Text>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</Text>

<H2>Cookies</H2>

<Text>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.</Text>

<Text>Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</Text>

<H2>Service Providers</H2>

<Text>We may employ third-party companies and individuals due to the following reasons:</Text>

<Text>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Text>

<H2>Security</H2>

<Text>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Text>

<H2>Links to Other Sites</H2>

<Text>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>

<Text>Children’s Privacy</Text>

<Text>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</Text>

<H2>Changes to This Privacy Policy</H2>

<Text>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</Text>

<H2>Contact Us</H2>

<Text>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</Text>

      </View>
      </ScrollView>
      </Drawer>

    )
  }
}

