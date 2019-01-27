import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';

export default class DefaultSlide extends React.PureComponent {
  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      paddingTop: this.props.topSpacer,
      paddingBottom: this.props.bottomSpacer,
      width: this.props.width,
      height: this.props.height,
    }
    return (
      <View style={[styles.mainContent, style]}>
        <ImageBackground
          source={this.props.image}
          style={this.props.imageStyle}
        >
          <Text style={[styles.title, this.props.titleStyle]}>
            {this.props.title}
          </Text>

          <Text style={[styles.text, this.props.textStyle]}>
            {this.props.text}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, .7)',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: 'rgba(255, 255, 255, .7)',
    fontWeight: '300',
    paddingHorizontal: 16,
  }
});
