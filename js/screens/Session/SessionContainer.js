import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';

import styles from './styles';

class SessionContainer extends Component {
  render() {
    const {
      description,
      title,
      time,
      location,
      speaker
    } = this.props.navigation.state.params;
    return (
      <View style={styles.session}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.event}>{title}</Text>
        <Text style={styles.time}>{Moment(time).format('h:mm A')}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.location}>Presented by:</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push('Speaker', {
              name: speaker.name,
              image: speaker.image,
              bio: speaker.bio,
              url: speaker.url
            })
          }
        >
          <View style={styles.speaker}>
            {speaker && (
              <Image source={{ uri: speaker.image }} style={styles.image} />
            )}
            <Text style={styles.speakerName}>{speaker && speaker.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SessionContainer);