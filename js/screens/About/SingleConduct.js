import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';

class SingleConduct extends Component {
  constructor() {
    super();
    this.minHeight;
    this.maxHeight;
    this.title = React.createRef();
    this.description = React.createRef();
    this.state = {
      isVisible: true,
      currentIndex: -1,
      animatedHeight: new Animated.Value(),
      minHeight: 0,
      maxHeight: 0
    };
  }

  componentDidMount() {
    setTimeout(this.measureTitle.bind(this));
  }

  measureTitle() {
    this.title.current.measure((ox, oy, width, height, px, py) => {
      if (height > this.state.minHeight) {
        this.setState({ minHeight: height + 10 });
      }
    });

    this.description.current.measure((ox, oy, width, height, px, py) => {
      if (height > this.state.minHeight) {
        this.setState({ maxHeight: height });
      }
    });
  }

  _setMaxHeight(event) {
    // console.log('The max height is:', event.nativeEvent);
    // this.setState({
    //   maxHeight: event.nativeEvent.layout.height
    // });
    // this.maxHeight = event.nativeEvent.layout.height;
  }

  _setMinHeight(event) {
    // this.setState({
    //   minHeight: event.nativeEvent.layout.height
    // });
    // this.minHeight = event.nativeEvent.layout.height;
  }

  // a lot of this animation code was inspired from:
  // https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/

  toggle(index) {
    //Step 1
    let initialValue = this.state.isVisible
      ? this.state.maxHeight + this.state.minHeight
      : this.state.minHeight;
    let finalValue = this.state.isVisible
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    console.log('THIS IS INITIAL VALUE: ', initialValue);
    console.log('THIS IS FINAL VALUE: ', finalValue);

    this.setState({
      isVisible: !this.state.isVisible //Step 2
    });

    this.state.animatedHeight.setValue(initialValue); //Step 3
    Animated.spring(
      //Step 4
      this.state.animatedHeight,
      {
        toValue: finalValue
      }
    ).start(); //Step 5
  }

  render() {
    // console.log('THIS IS ANIMATED HEIGHT: ', this.state.animatedHeight);
    console.log(this.props.index);
    return (
      <Animated.View
        style={[
          styles.singleConduct,
          {
            height: this.state.animatedHeight
          }
        ]}
        key={this.props.index}
      >
        <Text
          style={styles.conductTitle}
          onPress={this.toggle.bind(this)}
          onLayout={this._setMinHeight.bind(this)}
          ref={this.title}
        >
          {this.state.isVisible && this.state.currentIndex === this.props.index
            ? '-'
            : '+'}{' '}
          {this.props.title}
        </Text>
        <View>
          <Text
            // onLayout={this._setMaxHeight.bind(this)}
            style={styles.description}
            ref={this.description}
          >
            {this.props.description}
          </Text>
        </View>
        {/* {this.state.isVisible && this.state.currentIndex === index ? (
                  <Text id={'conduct' + index}>{description}</Text>
                ) : (
                  <View></View>
                )} */}
      </Animated.View>
    );
  }
}

export default SingleConduct;
